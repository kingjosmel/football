import Link from 'next/link';
import { format, parseISO } from 'date-fns';

export default function MatchCard({ match, isLive }) {
  // Format match time if available
  const matchTime = match.utcDate 
    ? format(parseISO(match.utcDate), 'h:mm a') 
    : 'TBD';

  // Determine what to show in the time slot
  const renderTimeInfo = () => {
    if (isLive) {
      return (
        <div className="text-xs text-gray-500 mt-1">
          {match.minute ? `${match.minute}'` : 'LIVE'}
        </div>
      );
    }
    if (match.status === 'FINISHED') {
      return <div className="text-xs text-gray-500 mt-1">FT</div>;
    }
    return (
      <div className="text-xs text-gray-500 mt-1">
        {matchTime}
      </div>
    );
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all ${isLive ? 'border-l-4 border-red-600' : ''}`}>
      <div className="p-4">
        {/* Status Badge */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">
            {match.competition?.name || 'Unknown Competition'}
          </span>
          {isLive ? (
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full flex items-center">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-1 animate-pulse"></span>
              LIVE
            </span>
          ) : (
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
              {match.status === 'SCHEDULED' ? 'UPCOMING' : match.status}
            </span>
          )}
        </div>

        {/* Match Content */}
        <div className="flex justify-between items-center py-4">
          {/* Home Team */}
          <div className="text-center w-2/5">
            <p className="font-bold truncate">{match.homeTeam?.name || 'TBD'}</p>
            {match.homeTeam?.crest && (
              <img 
                src={match.homeTeam.crest} 
                alt={match.homeTeam.name}
                className="h-12 mx-auto my-2"
                onError={(e) => e.target.style.display = 'none'}
              />
            )}
          </div>
          
          {/* Score */}
          <div className="text-center w-1/5">
            <div className={`text-2xl font-bold ${isLive ? 'text-red-600' : ''}`}>
              {match.score?.fullTime?.home ?? '-'} 
              <span className="mx-1">:</span>
              {match.score?.fullTime?.away ?? '-'}
            </div>
            {renderTimeInfo()}
          </div>
          
          {/* Away Team */}
          <div className="text-center w-2/5">
            <p className="font-bold truncate">{match.awayTeam?.name || 'TBD'}</p>
            {match.awayTeam?.crest && (
              <img 
                src={match.awayTeam.crest} 
                alt={match.awayTeam.name}
                className="h-12 mx-auto my-2"
                onError={(e) => e.target.style.display = 'none'}
              />
            )}
          </div>
        </div>

        {/* View Details Button */}
        <Link 
          href={`/matches/${match.id}`}
          className={`block w-full text-center py-2 px-4 rounded transition-colors ${
            isLive ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
          }`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}