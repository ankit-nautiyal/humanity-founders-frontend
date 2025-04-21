// API Base URL - would be replaced with actual API endpoint in production
const API_BASE_URL = 'https://api.referralhub-mock.com/v1';

// Simulated network delay to mimic real API behavior
const SIMULATED_DELAY_MS = 800;

/**
 * Simulates an API request with mock responses
 * @param {string} endpoint - API endpoint
 * @param {object} options - Request options
 * @returns {Promise} - Promise with mock response
 */
const simulateApiRequest = async (endpoint, options = {}) => {
  console.log(`API Request to ${endpoint}`, options);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY_MS));
  
  // Random success rate to simulate occasional failures
  const isSuccess = Math.random() > 0.2;
  
  if (!isSuccess) {
    // Simulate random API errors
    const errors = [
      { status: 400, message: "Invalid request data" },
      { status: 401, message: "Unauthorized access" },
      { status: 403, message: "Access forbidden" },
      { status: 500, message: "Internal server error" }
    ];
    const error = errors[Math.floor(Math.random() * errors.length)];
    throw { status: error.status, data: { error: error.message } };
  }
  
  // Handle different endpoints with appropriate mock responses
  switch (endpoint) {
    case '/auth/register':
      return {
        status: 201,
        data: {
          success: true,
          message: "User registered successfully",
          user: {
            id: `user_${Math.floor(Math.random() * 10000)}`,
            email: options.body.email,
            name: options.body.name || "New User",
            created_at: new Date().toISOString()
          },
          token: "mock_jwt_token_" + Math.random().toString(36).substring(2, 15)
        }
      };
    
    case '/auth/login':
      return {
        status: 200,
        data: {
          success: true,
          message: "Login successful",
          user: {
            id: `user_${Math.floor(Math.random() * 10000)}`,
            email: options.body.email,
            name: "Kadin Stanton",
            created_at: new Date().toISOString()
          },
          token: "mock_jwt_token_" + Math.random().toString(36).substring(2, 15)
        }
      };
      
    case '/business/profile':
      return {
        status: 200,
        data: {
          success: true,
          message: "Business profile created successfully",
          business: {
            id: `business_${Math.floor(Math.random() * 10000)}`,
            name: options.body.businessName,
            email: options.body.businessEmail,
            phone: options.body.businessPhone,
            description: options.body.businessDescription,
            industry: options.body.industry,
            city: options.body.city,
            state: options.body.state,
            created_at: new Date().toISOString()
          }
        }
      };
      
    default:
      return {
        status: 404,
        data: { 
          success: false,
          error: "Endpoint not found" 
        }
      };
  }
};

// Mock API delay
const mockDelay = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

// Mock user data
const mockUser = {
  id: 'usr_123456789',
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane.doe@example.com',
  profileImage: 'https://randomuser.me/api/portraits/women/17.jpg',
  isEmailVerified: true,
  businessProfile: {
    companyName: 'Acme Inc.',
    industry: 'Technology',
    companySize: '50-100',
    city: 'San Francisco',
    state: 'CA',
    country: 'United States'
  }
};

// API functions
const api = {
  auth: {
    // Login with email and password
    login: async (email, password) => {
      // Simulate API call
      await mockDelay();
      
      // Mock validation
      if (!email || !password) {
        const error = new Error('Email and password are required');
        error.data = { error: 'Email and password are required' };
        throw error;
      }
      
      // For demo purposes, any valid email/password will work
      // In a real app, you would validate credentials against a backend
      
      // Store token in localStorage (mock token)
      const token = `mock_token_${Date.now()}`;
      localStorage.setItem('authToken', token);
      
      return {
        token,
        user: mockUser
      };
    },
    
    // Send magic link
    sendMagicLink: async (email) => {
      // Simulate API call
      await mockDelay();
      
      // Mock validation
      if (!email) {
        const error = new Error('Email is required');
        error.data = { error: 'Email is required' };
        throw error;
      }
      
      // In a real app, this would trigger sending an email with a magic link
      return { success: true, message: 'Magic link sent' };
    },
    
    // Logout
    logout: async () => {
      // Simulate API call
      await mockDelay(500);
      
      // Remove token from localStorage
      localStorage.removeItem('authToken');
      
      return { success: true };
    },
    
    // Check if user is authenticated
    isAuthenticated: () => {
      return !!localStorage.getItem('authToken');
    },
    
    // Get current user
    getCurrentUser: async () => {
      // Simulate API call
      await mockDelay();
      
      // Check if token exists
      const token = localStorage.getItem('authToken');
      if (!token) {
        const error = new Error('Not authenticated');
        error.data = { error: 'Not authenticated' };
        throw error;
      }
      
      return mockUser;
    }
  },
  
  business: {
    // Update business profile
    updateBusinessProfile: async (profileData) => {
      // Simulate API call
      await mockDelay(1500);
      
      // Mock validation
      if (!profileData.companyName) {
        const error = new Error('Company name is required');
        error.data = { error: 'Company name is required' };
        throw error;
      }
      
      // In a real app, this would update the user's business profile
      return {
        success: true,
        businessProfile: {
          ...mockUser.businessProfile,
          ...profileData
        }
      };
    }
  }
};

export default api; 