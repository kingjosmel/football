export default function MatchCard({ match }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-500">
              {match.competition?.name || 'Unknown Competition'}
            </span>
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
              {match.status === 'IN_PLAY' ? 'LIVE' : match.status}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-center w-1/3">
              <p className="font-bold">{match.homeTeam?.name || 'TBD'}</p>
              <img 
                src={match.homeTeam?.crest} 
                alt={match.homeTeam?.name} 
                className="h-12 mx-auto my-2"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            
            <div className="text-center w-1/3">
              <div className="text-2xl font-bold">
                {match.score?.fullTime?.home !== null ? match.score?.fullTime?.home : '-'} 
                : 
                {match.score?.fullTime?.away !== null ? match.score?.fullTime?.away : '-'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {match.minute ? `${match.minute}'` : ''}
              </div>
            </div>
            
            <div className="text-center w-1/3">
              <p className="font-bold">{match.awayTeam?.name || 'TBD'}</p>
              <img 
                src={match.awayTeam?.crest} 
                alt={match.awayTeam?.name} 
                className="h-12 mx-auto my-2"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }