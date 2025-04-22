export default function Lineup({ team, players = [], formation = 'N/A' }) {
    return (
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">{team?.name || 'Team'}</h3>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            {formation}
          </span>
        </div>
        
        {players.length > 0 ? (
          <div className="grid grid-cols-2 gap-2">
            {players.map(player => (
              <div key={player.id || player.name} className="flex items-center p-2 border-b">
                <span className="w-8 text-gray-500">{player.position || '--'}</span>
                <span className="font-medium">{player.name}</span>
                <span className="ml-auto text-sm text-gray-500">
                  {player.shirtNumber || ''}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">No lineup data available</p>
        )}
      </div>
    );
  }