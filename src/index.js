// auth-worker/index.js
export default {
	async fetch(request) {
	  const headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		'Access-Control-Max-Age': '86400',
		'Content-Type': 'application/json'
	  };
  
	  // Handle CORS preflight requests
	  if (request.method === 'OPTIONS') {
		return new Response(null, {
		  status: 204,
		  headers
		});
	  }
  
	  // Log the Authorization header
	  const authHeader = request.headers.get('Authorization');
	  console.log('Authorization Header:', authHeader);
  
	  // Mock validation of Authorization token
	  const validAuthToken = 'my-secret-token';
	  if (authHeader !== `Bearer ${validAuthToken}`) {
		console.log('Invalid authorization token');
		return new Response(JSON.stringify({ error: 'Unauthorized' }), {
		  status: 401,
		  headers
		});
	  }
  
	  // Extract and log email/password from the request body
	  const { email, password } = await request.json();
	  console.log('Received Email:', email);
	  console.log('Received Password:', password);
  
	  // Mock validation for demonstration purposes
	  const validEmail = 'admin@admin.com';
	  const validPassword = 'password123';
  
	  // Check if credentials match
	  if (email === validEmail && password === validPassword) {
		console.log('Authentication successful');
		return new Response(JSON.stringify({ authenticated: true }), {
		  status: 200,
		  headers
		});
	  } else {
		console.log('Invalid credentials');
		return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
		  status: 401,
		  headers
		});
	  }
	}
  }
  