function MovieCard({ movie, onDetails }) {

  return (
    <div className="movie-card">

      <img
        src={
          movie.image?.medium ||
          "https://via.placeholder.com/300x450"
        }
        alt={movie.name}
      />

      <div className="movie-info">

        <h2>{movie.name}</h2>

        <p>
          ⭐ {movie.rating?.average || "N/A"}
        </p>

        <p>
          📅 {movie.premiered || "Unknown"}
        </p>

        <button onClick={onDetails}>
          See Details
        </button>

      </div>

    </div>
  );
}

export default MovieCard;