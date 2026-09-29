import { Link } from "react-router";

function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>Discover Amazing Movies</h1>

        <p>
          Explore and discover your favorite movies
          and TV shows from around the world.
        </p>

        <Link to="/movies" className="explore-button">
          Explore Now
        </Link>

      </div>

    </section>
  );
}

export default Home;