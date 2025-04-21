'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import MatchCard from '../components/MatchCard'
import Link from 'next/link'

export default function LiveMatchesPage() {
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  useEffect(() => {
    const fetchLiveMatches = async () => {
      try {
        console.log('Fetching live matches...')
        const response = await axios.get('/api/football', {
          params: {
            status: 'LIVE'
          }
        })
        
        console.log('API Response:', response.data)
        
        setMatches(response.data.matches || [])
        setError(null)
        setLastUpdated(new Date().toLocaleTimeString())
        
        if (response.data.matches.length === 0) {
          console.log('No live matches currently playing')
        }
      } catch (err) {
        console.error('Error fetching matches:', err)
        setError('Failed to load live matches. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchLiveMatches()
    const interval = setInterval(fetchLiveMatches, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">Live Matches</h1>
        <div className="flex items-center gap-4">
          {lastUpdated && (
            <span className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </span>
          )}
          <span className="bg-red-600 text-white text-sm px-3 py-1 rounded-full animate-pulse">
            LIVE
          </span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          <p>{error}</p>
        </div>
      ) : matches.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            No live matches currently playing
          </h2>
          <p className="text-gray-500 mb-6">
            There are no matches in progress right now. Check back later when matches are live.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              ← Return to home
            </Link>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors"
            >
              ↻ Refresh
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      )}
    </div>
  )
}