export default function Gallery() {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="/images/people.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="/images/futuristic-football-game-player.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="/images/people.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="/images/futuristic-football-game-player.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="/images/people.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="/images/people.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="/images/men.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="/images/futuristic-football-game-player.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="/images/men.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    );
  }