import axios from 'axios';

// API Base URL - actual API endpoint
const API_BASE_URL = 'http://34.10.166.233';

// Create axios instance with common configuration
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 10000 // 10 second timeout
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
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Attempt to refresh the token
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
            refresh: refreshToken,
          });
          
          const { access } = response.data;
          localStorage.setItem('authToken', access);
          
          // Update header and retry original request
          originalRequest.headers['Authorization'] = `Bearer ${access}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        // If refresh token fails, log out the user
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        
        // Redirect to login
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
        // Log what we're sending to the API for debugging
        console.log('Registration request payload:', userData);
        
        // Ensure userData matches the expected API format
        // Include only required fields for registration
        const payload = {
          email: userData.email,
          password: userData.password,
          full_name: userData.full_name,
          role: userData.role
        };
        
        // Only add phone if it exists and is not empty
        if (userData.phone && userData.phone.trim() !== '') {
          payload.phone = userData.phone;
        }
        
        console.log('Formatted payload being sent to API:', payload);
        
        const response = await axiosInstance.post('/auth/register', payload);
        console.log('Registration response:', response.data);
        
        // If registration returns tokens directly
        if (response.data.access) {
          localStorage.setItem('authToken', response.data.access);
        }
        
        if (response.data.refresh) {
          localStorage.setItem('refreshToken', response.data.refresh);
        }
        
        return response.data;
      } catch (error) {
        console.error('Registration error:', error);
        
        // Log detailed error response for debugging
        if (error.response) {
          console.error('Error response data:', error.response.data);
          console.error('Error response status:', error.response.status);
          console.error('Error response headers:', error.response.headers);
        }
        
        throw handleApiError(error);
      }
    },
    
    // Login with email and password
    login: async (email, password) => {
      try {
        console.log('Login attempt with email:', email);
        
        const payload = {
          email,
          password
        };
        
        const response = await axiosInstance.post('/auth/login', payload);
        // console.log('Login response:', response.data);
        
        // Store tokens from TokenObtainPair response
        if (response.data.access) {
          localStorage.setItem('authToken', response.data.access);
        }
        
        if (response.data.refresh) {
          localStorage.setItem('refreshToken', response.data.refresh);
        }
        
        // Get user data if not included in response
        // try {
        //   const userResponse = await axiosInstance.get('/auth/me', {
        //     headers: {
        //       'Authorization': `Bearer ${response.data.access}`
        //     }
        //   });
          
        //   if (userResponse.data) {
        //     localStorage.setItem('user', JSON.stringify(userResponse.data));
        //   }
        // } catch (userError) {
        //   console.warn('Could not fetch user data after login:', userError);
        // }
        
        return {
          ...response.data,
          user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
        };
      } catch (error) {
        console.error('Login error:', error);
        
        // Log detailed error response for debugging
        if (error.response) {
          console.error('Error response data:', error.response.data);
          console.error('Error response status:', error.response.status);
        }
        
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
        const refresh = localStorage.getItem('refreshToken');
        if (!refresh) {
          throw new Error('No refresh token available');
        }
        
        // Send refresh token in proper format
        const payload = {
          refresh
        };
        
        console.log('Attempting to refresh token');
        const response = await axios.post(`${API_BASE_URL}/auth/refresh`, payload);
        console.log('Refresh token response:', response.data);
        
        // Store the new tokens
        if (response.data.access) {
          localStorage.setItem('authToken', response.data.access);
        }
        
        if (response.data.refresh) {
          localStorage.setItem('refreshToken', response.data.refresh);
        }
        
        return response.data;
      } catch (error) {
        console.error('Token refresh error:', error);
        
        // Log error details for debugging
        if (error.response) {
          console.error('Error response data:', error.response.data);
          console.error('Error response status:', error.response.status);
        }
        
        // Clear tokens on refresh failure
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        
        throw handleApiError(error);
      }
    },
    
    // Logout user
    logout: async () => {
      try {
        // Get refresh token before clearing storage
        const refreshToken = localStorage.getItem('refreshToken');
        
        // Clear localStorage
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        
        // Call logout endpoint to invalidate tokens on server if refresh token exists
        if (refreshToken) {
          try {
            await axiosInstance.post('/auth/logout', { refresh: refreshToken });
            console.log('Logout successful on server');
          } catch (error) {
            console.warn('Error during server logout:', error);
          }
        }
        
        return { success: true };
      } catch (error) {
        console.error('Logout error:', error);
        // Still clear tokens even if server logout fails
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        return { success: true };
      }
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
  console.log('Processing API error:', error);
  
  if (error.response) {
    // Server responded with a status code outside of 2xx range
    console.log('Error response status:', error.response.status);
    console.log('Error response data:', error.response.data);
    
    return {
      status: error.response.status,
      data: error.response.data || { error: 'Server error' }
    };
  } else if (error.request) {
    // Request was made but no response received
    console.log('No response received:', error.request);
    
    return {
      status: 0,
      data: { error: 'No response from server. Please check your connection.' }
    };
  } else {
    // Request setup error
    console.log('Request setup error:', error.message);
    
    return {
      status: 0,
      data: { error: error.message || 'An unexpected error occurred' }
    };
  }
}

export default api; 