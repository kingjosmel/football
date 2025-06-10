export default function Lineup({ team, players = [], formation = "N/A" }) {
  return (
    <div className="p-4 mb-6 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">{team?.name || "Team"}</h3>
        <span className="px-3 py-1 text-sm bg-gray-200 rounded-full">
          {formation}
        </span>
      </div>

      {players.length > 0 ? (
        <div className="grid grid-cols-2 gap-2">
          {players.map((player) => (
            <div
              key={player.id || player.name}
              className="flex items-center p-2 border-b"
            >
              <span className="w-8 text-gray-800">
                {player.position || "--"}
              </span>
              <span className="font-medium">{player.name}</span>
              <span className="ml-auto text-sm text-gray-800">
                {player.shirtNumber || ""}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="py-4 text-center text-gray-800">
          No lineup data available
        </p>
      )}
    </div>
  );
}
