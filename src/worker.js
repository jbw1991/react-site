export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // API Routes
    if (url.pathname.startsWith('/api/')) {
      return handleApiRequest(url, request);
    }
    
    // Serve static assets from the ASSETS binding
    return env.ASSETS.fetch(request);
  },
};

async function handleApiRequest(url, request) {
  // GET /api/time - Returns current server time
  if (url.pathname === '/api/time' && request.method === 'GET') {
    const serverTime = new Date().toISOString();
    return new Response(
      JSON.stringify({
        time: serverTime,
        timestamp: Date.now(),
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
  
  // 404 for unknown API routes
  return new Response(
    JSON.stringify({ error: 'Not found' }),
    {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
