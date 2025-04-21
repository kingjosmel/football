// app/api/football/route.js
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
  
    try {
      const apiUrl = `https://api.football-data.org/v4/matches?status=${status}`
      console.log('Fetching from:', apiUrl) // Debug log
      
      const response = await fetch(apiUrl, {
        headers: {
          'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_API_TOKEN || ''
        }
      })
      
      console.log('API response status:', response.status) // Debug log
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }
  
      const data = await response.json()
      console.log('API data:', data) // Debug log
      
      return Response.json(data)
    } catch (error) {
      console.error('Proxy error:', error) // Debug log
      return Response.json(
        { error: error.message },
        { status: 500 }
      )
    }
  }