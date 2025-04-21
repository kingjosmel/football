import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Live Football Scores & Matches
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get real-time updates on all live football matches from top leagues around the world.
          Never miss a goal with our up-to-the-minute coverage.
        </p>
        <Link 
          href="/live" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          View Live Matches
        </Link>
      </div>
    </div>
  )
}