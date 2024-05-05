// auth-worker/index.js
export default {
	async fetch(request) {
	  const headers = {
		'Access-Control-Allow-Origin': 'http://localhost:5173', // Adjust as necessary
		'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		'Access-Control-Max-Age': '86400', // Cache preflight response for 24 hours
		'Content-Type': 'application/json'
	  };
  
	  // Handle CORS preflight request
	  if (request.method === 'OPTIONS') {
		return new Response(null, {
		  status: 204,
		  headers
		});
	  }
  
	  // Ensure request method is POST for authentication
	  if (request.method === 'POST') {
		// Parse the request body
		const { email, password } = await request.json();
  
		// Example hardcoded credentials validation
		const validEmail = 'admin@admin.com';
		const validPassword = 'password123';
  
		// Validate credentials
		if (email === validEmail && password === validPassword) {
		  return new Response(JSON.stringify({ authenticated: true }), {
			status: 200,
			headers
		  });
		} else {
		  return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
			status: 401,
			headers
		  });
		}
	  }
  
	  // For unsupported methods
	  return new Response(JSON.stringify({ error: 'Unsupported request method' }), {
		status: 405,
		headers
	  });
	}
  }
  
  