'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import Lineup from '../../components/Lineup';

export default function MatchDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [match, setMatch] = useState(null);
  const [lineups, setLineups] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch match details
        const matchRes = await axios.get(`/api/football?endpoint=matches&id=${id}`);
        if (!matchRes.data) {
          throw new Error('Match data not found');
        }
        setMatch(matchRes.data);

        // Try to fetch lineups 
        try {
          const lineupsRes = await axios.get(`/api/football?endpoint=matches/${id}/lineups`);
          if (lineupsRes.data) {
            setLineups(lineupsRes.data);
          }
        } catch (lineupError) {
          console.log('Lineups not available:', lineupError.message);
        }

      } catch (err) {
        setError(err.response?.data?.error || err.message || 'Failed to load match data');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);

  if (loading) return <div className="text-center p-8">Loading match data...</div>;
  if (error) return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <h3 className="text-red-800 font-bold">Error Loading Match</h3>
        <p className="text-red-700">{error}</p>
        <button 
          onClick={() => router.push('/live')}
          className="mt-4 text-blue-600 hover:underline"
        >
          ← Back to live matches
        </button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {match && (
        <>
          <h1 className="text-2xl font-bold mb-4">
            {match.homeTeam?.name || 'Home Team'} vs {match.awayTeam?.name || 'Away Team'}
          </h1>
          
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="font-medium">
              Status: <span className="capitalize">{match.status?.toLowerCase() || 'unknown'}</span>
            </p>
            <p className="font-medium">
              Score: {match.score?.fullTime?.home ?? '-'} - {match.score?.fullTime?.away ?? '-'}
            </p>
          </div>

          {lineups ? (
            <div className="grid md:grid-cols-2 gap-8">
              <Lineup 
                team={lineups.homeTeam} 
                players={lineups.homeTeam?.players || []} 
                formation={lineups.homeTeam?.formation} 
              />
              <Lineup 
                team={lineups.awayTeam} 
                players={lineups.awayTeam?.players || []} 
                formation={lineups.awayTeam?.formation} 
              />
            </div>
          ) : (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p>Lineup data is not available for this match</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}