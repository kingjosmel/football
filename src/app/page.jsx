// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="min-h-screen hero"
        style={{
          backgroundImage: "url('/images/futuristic-football-game-player.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-gradient-to-br from-black/70 to-blue-900/50"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-4xl">
            {/* Live Badge */}
            <div className="gap-2 p-4 mb-6 text-lg badge badge-success">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              Live Updates
            </div>

            <h1 className="mb-8 text-6xl font-bold leading-tight lg:text-8xl">
              Live Football
              <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                Scores & Matches
              </span>
            </h1>

            <p className="max-w-2xl mx-auto mb-8 text-xl leading-relaxed lg:text-2xl text-base-content/80">
              Experience real-time updates from top leagues worldwide.
              <span className="font-semibold text-white">
                Never miss a moment
              </span>{" "}
              of the beautiful game.
            </p>

            <div className="flex flex-col justify-center gap-4 mb-12 sm:flex-row">
              <Link
                href="/live"
                className="px-8 text-lg btn btn-primary btn-lg"
              >
                View Live Matches
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <button className="px-8 text-lg btn btn-outline btn-lg">
                Watch Highlights
              </button>
            </div>

            {/* Stats */}
            <div className="shadow-2xl stats stats-vertical lg:stats-horizontal bg-base-100/20 backdrop-blur-sm">
              <div className="stat">
                <div className="stat-title text-base-content/60">
                  Live Matches
                </div>
                <div className="stat-value text-primary">100+</div>
                <div className="stat-desc text-base-content/60">
                  Updated every minute
                </div>
              </div>
              <div className="stat">
                <div className="stat-title text-base-content/60">Leagues</div>
                <div className="stat-value text-secondary">50+</div>
                <div className="stat-desc text-base-content/60">
                  Global coverage
                </div>
              </div>
              <div className="stat">
                <div className="stat-title text-base-content/60">Coverage</div>
                <div className="stat-value text-accent">24/7</div>
                <div className="stat-desc text-base-content/60">
                  Never offline
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-base-200">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
              Why Choose FootballLive?
            </h2>
            <p className="text-xl text-base-content/70">
              Everything you need for the ultimate football experience
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="transition-all duration-300 shadow-xl card bg-base-100 hover:shadow-2xl">
              <div className="text-center card-body">
                <div className="mb-4 text-4xl">⚡</div>
                <h3 className="justify-center mb-2 text-2xl card-title">
                  Real-Time Updates
                </h3>
                <p>
                  Get instant notifications for goals, cards, and key moments as
                  they happen.
                </p>
              </div>
            </div>

            <div className="transition-all duration-300 shadow-xl card bg-base-100 hover:shadow-2xl">
              <div className="text-center card-body">
                <div className="mb-4 text-4xl">🌍</div>
                <h3 className="justify-center mb-2 text-2xl card-title">
                  Global Coverage
                </h3>
                <p>
                  Follow matches from Premier League, La Liga, Serie A, and 50+
                  leagues worldwide.
                </p>
              </div>
            </div>

            <div className="transition-all duration-300 shadow-xl card bg-base-100 hover:shadow-2xl">
              <div className="text-center card-body">
                <div className="mb-4 text-4xl">📱</div>
                <h3 className="justify-center mb-2 text-2xl card-title">
                  Mobile First
                </h3>
                <p>
                  Perfect experience on any device - desktop, tablet, or mobile
                  phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
            Ready to Experience Live Football?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-white/90">
            Join thousands of football fans who never miss a moment with our
            live coverage.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/live" className="px-8 text-lg btn btn-accent btn-lg">
              Start Watching Now
            </Link>
            <button className="px-8 text-lg text-white border-white btn btn-outline btn-lg hover:bg-white hover:text-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
