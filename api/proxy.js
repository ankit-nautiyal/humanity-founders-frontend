// Vercel Serverless Function to proxy HTTP API requests
import axios from 'axios';

// API Base URL - your actual HTTP API endpoint
const API_BASE_URL = 'http://34.10.166.233';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  // Handle OPTIONS preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Get the path from the request URL
    const endpoint = req.url.replace(/^\/api\/proxy/, '');
    
    // Prepare request config
    const config = {
      method: req.method,
      url: `${API_BASE_URL}${endpoint}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Forward any authorization headers
    if (req.headers.authorization) {
      config.headers.Authorization = req.headers.authorization;
    }

    // Forward any additional headers
    if (req.headers.accept) {
      config.headers.Accept = req.headers.accept;
    }

    // Add request body for non-GET requests
    if (req.method !== 'GET' && req.body) {
      config.data = req.body;
    }

    console.log(`Proxying ${req.method} request to ${endpoint}`);
    
    // Make the request to the actual API
    const response = await axios(config);

    // Return the response
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Proxy error:', error.message);
    
    // Forward the error status and data from the API
    if (error.response) {
      return res.status(error.response.status || 500).json(error.response.data || { error: 'Server error' });
    }
    
    return res.status(500).json({ error: 'An error occurred while proxying the request' });
  }
} 