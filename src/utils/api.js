import axios from 'axios';

// API Base URL - actual API endpoint
const API_BASE_URL = 'http://34.10.166.233';

// Create axios instance with common configuration
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token in requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // If the error is 401 and we haven't retried the request yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Attempt to refresh the token
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
            refreshToken,
          });
          
          const { token } = response.data;
          localStorage.setItem('authToken', token);
          
          // Update header and retry original request
          originalRequest.headers['Authorization'] = `Bearer ${token}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        // If refresh token fails, log out the user
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        
        // Redirect to login (optional, depends on your app structure)
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

// API functions
const api = {
  auth: {
    // Register new user
    register: async (userData) => {
      try {
        const response = await axiosInstance.post('/auth/register', userData);
        
        if (response.data.token) {
          localStorage.setItem('authToken', response.data.token);
          
          if (response.data.refreshToken) {
            localStorage.setItem('refreshToken', response.data.refreshToken);
          }
        }
        
        return response.data;
      } catch (error) {
        throw handleApiError(error);
      }
    },
    
    // Login with email and password
    login: async (email, password) => {
      try {
        const response = await axiosInstance.post('/auth/login', { email, password });
        
        if (response.data.token) {
          localStorage.setItem('authToken', response.data.token);
          
          if (response.data.refreshToken) {
            localStorage.setItem('refreshToken', response.data.refreshToken);
          }
        }
        
        return response.data;
      } catch (error) {
        throw handleApiError(error);
      }
    },
    
    // Verify token validity
    verifyToken: async () => {
      try {
        const response = await axiosInstance.get('/auth/verify-token');
        return response.data;
      } catch (error) {
        throw handleApiError(error);
      }
    },
    
    // Refresh authentication token
    refreshToken: async () => {
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }
        
        const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
          refreshToken,
        });
        
        if (response.data.token) {
          localStorage.setItem('authToken', response.data.token);
          
          if (response.data.refreshToken) {
            localStorage.setItem('refreshToken', response.data.refreshToken);
          }
        }
        
        return response.data;
      } catch (error) {
        throw handleApiError(error);
      }
    },
    
    // Logout user
    logout: async () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      
      // Optional: call logout endpoint to invalidate tokens on server
      try {
        await axiosInstance.post('/auth/logout');
      } catch (error) {
        console.warn('Error during logout:', error);
      }
      
      return { success: true };
    },
    
    // Check if user is authenticated
    isAuthenticated: () => {
      return !!localStorage.getItem('authToken');
    },
    
    // Get current user
    getCurrentUser: async () => {
      try {
        const response = await axiosInstance.get('/auth/me');
        return response.data;
      } catch (error) {
        throw handleApiError(error);
      }
    },
    
    // Send magic link
    sendMagicLink: async (email) => {
      try {
        const response = await axiosInstance.post('/auth/magic-link', { email });
        return response.data;
      } catch (error) {
        throw handleApiError(error);
      }
    }
  },
  
  // You can add other API sections like business, profile, etc.
  business: {
    // Update business profile
    updateBusinessProfile: async (profileData) => {
      try {
        const response = await axiosInstance.post('/business/profile', profileData);
        return response.data;
      } catch (error) {
        throw handleApiError(error);
      }
    }
  }
};

// Helper function to standardize error handling
function handleApiError(error) {
  if (error.response) {
    // Server responded with a status code outside of 2xx range
    return {
      status: error.response.status,
      data: error.response.data || { error: 'Server error' }
    };
  } else if (error.request) {
    // Request was made but no response received
    return {
      status: 0,
      data: { error: 'No response from server. Please check your connection.' }
    };
  } else {
    // Request setup error
    return {
      status: 0,
      data: { error: error.message || 'An unexpected error occurred' }
    };
  }
}

export default api; 