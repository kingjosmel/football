import Link from 'next/link';

export default function Hero() {
    return (
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold">
            Live Football Scores & Matches
            </h1>
            <p className="mb-8 leading-relaxed opacity-50">
            Get real-time updates on all live football matches from top leagues around the world.
            Never miss a goal with our up-to-the-minute coverage.
            </p>
            <div className="flex justify-center">
            <Link 
            href="/live" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
          View Live Matches
             </Link>
            </div>
          </div>
          <div id="pattern" className="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16 ">
            <div className="w-full flex gap-3 justify-center max-sm:hidden">
              <img 
                className="object-cover object-center rounded-xl w-[208] h-[145]" 
                alt="hero" 
                src="/images/futuristic-football-game-player.jpg"
              />
              <img 
                className="object-cover object-center rounded-xl w-[208] h-[145]" 
                alt="hero" 
                src="/images/futuristic-football-game-player.jpg"
              /> 
            </div>
            <div className="w-full flex gap-2 justify-center items-center my-2 max-sm:hidden">
              <img 
                className="object-cover object-center rounded-xl w-[208] h-[145]" 
                alt="hero" 
                src="/images/futuristic-football-game-player.jpg"
              />
              <img 
                className="object-cover object-center rounded-xl w-[208] h-[145]" 
                alt="hero" 
                src="/images/futuristic-football-game-player.jpg"
              /> 
              <img 
                className="object-cover object-center rounded-xl w-[208] h-[145]" 
                alt="hero" 
                src="/images/futuristic-football-game-player.jpg"
              /> 
            </div>
            <div className="w-full flex gap-3 justify-center max-sm:hidden">
              <img 
                className="object-cover object-center rounded-xl w-[208] h-[145]" 
                alt="hero" 
                src="/images/futuristic-football-game-player.jpg"
              />
              <img 
                className="object-cover object-center rounded-xl w-[208] h-[145]" 
                alt="hero" 
                src="/images/futuristic-football-game-player.jpg"
              /> 
            </div>
          </div>
        </div>
      </section>
    );
  }