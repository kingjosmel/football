"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import MatchCard from "../components/MatchCard";

export default function LiveMatchesPage() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLiveMatches = async () => {
      try {
        const response = await axios.get("/api/football", {
          params: {
            endpoint: "matches",
            status: "LIVE",
          },
        });

        // Sort matches - LIVE matches first, then by competition importance
        const sortedMatches = (response.data.matches || []).sort((a, b) => {
          // Push finished matches to bottom
          if (a.status === "FINISHED") return 1;
          if (b.status === "FINISHED") return -1;

          // Sort IN_PLAY (live) matches to top
          if (a.status === "IN_PLAY" && b.status !== "IN_PLAY") return -1;
          if (b.status === "IN_PLAY" && a.status !== "IN_PLAY") return 1;

          const compPriority = {
            PREMIER_LEAGUE: 1,
            CHAMPIONS_LEAGUE: 2,
          };

          return (
            (compPriority[b.competition?.code] || 99) -
            (compPriority[a.competition?.code] || 99)
          );
        });

        setMatches(sortedMatches);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to load matches");
      } finally {
        setLoading(false);
      }
    };

    // Refresh every minute
    fetchLiveMatches();
    const interval = setInterval(fetchLiveMatches, 60000);
    return () => clearInterval(interval);
  }, []);

  const liveMatches = matches.filter((m) => m.status === "IN_PLAY");
  const otherMatches = matches.filter((m) => m.status !== "IN_PLAY");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">Live Matches</h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          <p>{error}</p>
        </div>
      ) : (
        <>
          {/* Live Matches Section */}
          {liveMatches.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-red-600 w-3 h-3 rounded-full mr-2 animate-pulse"></span>
                Currently Playing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveMatches.map((match) => (
                  <MatchCard key={match.id} match={match} isLive={true} />
                ))}
              </div>
            </div>
          )}

          {otherMatches.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Other Matches</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherMatches.map((match) => (
                  <MatchCard key={match.id} match={match} isLive={false} />
                ))}
              </div>
            </div>
          )}

          {matches.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                No matches currently available
              </h2>
            </div>
          )}
        </>
      )}
    </div>
  );
}
