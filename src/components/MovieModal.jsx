function MovieModal({ movie, onClose }) {

  return (
    <div className="modal-overlay">

      <div className="modal">

        
        <button
          className="close-button"
          onClick={onClose}
        >
          ✕
        </button>


        <img
          className="modal-image"
          src={
            movie.image?.original ||
            movie.image?.medium ||
            "https://via.placeholder.com/600x400"
          }
          alt={movie.name}
        />


        <div className="modal-content">

          <h2>{movie.name}</h2>

          <p>
            ⭐ Rating: {movie.rating?.average || "N/A"}
          </p>

          <p>
            📅 Release: {movie.premiered || "Unknown"}
          </p>

          <p>
            🎭 Genre:{" "}
            {movie.genres?.join(", ") || "Unknown"}
          </p>


          <h3>Overview</h3>

          <div
            dangerouslySetInnerHTML={{
              __html: movie.summary || "No description available."
            }}
          />


          <button onClick={onClose}>
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

export default MovieModal;