export async function GET(request) {
    const { searchParams } = new URL(request.url);
    
    try {
      const endpoint = searchParams.get('endpoint');
      if (!endpoint) {
        return Response.json({ error: 'Endpoint parameter required' }, { status: 400 });
      }
  
      const apiUrl = new URL(`https://api.football-data.org/v4/${endpoint}`);
      const response = await fetch(apiUrl, {
        headers: {
          'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_API_TOKEN || '',
          'Content-Type': 'application/json'
        }
      });
  
      // Handle 404 specifically
      if (response.status === 404) {
        return Response.json(
          { error: 'Data not available', is404: true },
          { status: 404 }
        );
      }
  
      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `Request failed with status ${response.status}`);
      }
  
      return Response.json(await response.json());
  
    } catch (error) {
      console.error('API Error:', error);
      return Response.json(
        { error: error.message },
        { status: 500 }
      );
    }
  }