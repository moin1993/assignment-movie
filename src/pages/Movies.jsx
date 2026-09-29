import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get all shows
  useEffect(() => {

    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

  }, []);


 
  const handleSearch = (e) => {

    const value = e.target.value;

    setSearch(value);

    if (value === "") {

      fetch("https://api.tvmaze.com/shows")
        .then((response) => response.json())
        .then((data) => setMovies(data));

      return;
    }

    fetch(
      `https://api.tvmaze.com/search/shows?q=${value}`
    )
      .then((response) => response.json())
      .then((data) => {

       
        const shows = data.map((item) => item.show);

        setMovies(shows);
      })
      .catch((error) => {
        console.log(error);
      });

  };


  if (loading) {
    return <h2 className="loading">Loading movies...</h2>;
  }


  return (
    <main className="movies-page">

      <div className="container">

        <h1>Explore Movies & Shows</h1>

        
        <div className="search-box">

          <input
            type="text"
            placeholder="🔍 Search for a movie..."
            value={search}
            onChange={handleSearch}
          />

        </div>


        
        <div className="movie-grid">

          {movies.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie}
              onDetails={() => setSelectedMovie(movie)}
            />

          ))}

        </div>


        
        {selectedMovie && (

          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />

        )}

      </div>

    </main>
  );
}

export default Movies;