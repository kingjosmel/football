import Link from "next/link";
import { format, parseISO } from "date-fns";

export default function MatchCard({ match, isLive }) {
  const matchTime = match.utcDate
    ? format(parseISO(match.utcDate), "h:mm a")
    : "TBD";

  const renderTimeInfo = () => {
    if (isLive) {
      return (
        <div className="mt-1 text-xs text-gray-800">
          {match.minute ? `${match.minute}'` : "LIVE"}
        </div>
      );
    }
    if (match.status === "FINISHED") {
      return <div className="mt-1 text-xs text-gray-800">FT</div>;
    }
    return <div className="mt-1 text-xs text-gray-800">{matchTime}</div>;
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all ${
        isLive ? "border-l-4 border-red-600" : ""
      }`}
    >
      <div className="p-4">
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-800">
            {match.competition?.name || "Unknown Competition"}
          </span>
          {isLive ? (
            <span className="flex items-center px-2 py-1 text-xs text-red-800 bg-red-100 rounded-full">
              <span className="w-2 h-2 mr-1 bg-red-600 rounded-full animate-pulse"></span>
              LIVE
            </span>
          ) : (
            <span className="px-2 py-1 text-xs text-gray-800 bg-gray-100 rounded-full">
              {match.status === "SCHEDULED" ? "UPCOMING" : match.status}
            </span>
          )}
        </div>

        {/* Match Content */}
        <div className="flex items-center justify-between py-4">
          {/* Home Team */}
          <div className="w-2/5 text-center">
            <p className="font-bold truncate text-gray-900">
              {match.homeTeam?.name || "TBD"}
            </p>
            {match.homeTeam?.crest && (
              <img
                src={match.homeTeam.crest}
                alt={match.homeTeam.name}
                className="h-12 mx-auto my-2"
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
          </div>

          {/* Score */}
          <div className="w-1/5 text-center">
            <div
              className={`text-2xl font-bold ${isLive ? "text-red-600" : ""}`}
            >
              {match.score?.fullTime?.home ?? "-"}
              <span className="mx-1">:</span>
              {match.score?.fullTime?.away ?? "-"}
            </div>
            {renderTimeInfo()}
          </div>

          {/* Away Team */}
          <div className="w-2/5 text-center">
            <p className="font-bold truncate text-gray-900">
              {match.awayTeam?.name || "TBD"}
            </p>
            {match.awayTeam?.crest && (
              <img
                src={match.awayTeam.crest}
                alt={match.awayTeam.name}
                className="h-12 mx-auto my-2"
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
          </div>
        </div>

        {/* View Details Button */}
        <Link
          href={`/matches/${match.id}`}
          className={`block w-full text-center py-2 px-4 rounded transition-colors ${
            isLive
              ? "bg-red-50 text-red-600 hover:bg-red-100"
              : "bg-blue-50 text-gray-900 hover:bg-blue-100"
          }`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
