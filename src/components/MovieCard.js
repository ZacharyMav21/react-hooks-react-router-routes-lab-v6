import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <article>
      <Link to={`/movies/${movie.id}`}>
        <h2>{movie.title}</h2>
        <h3>{movie.time} minutes</h3>
        {movie.genres.map((el, index) => (
          <p key={index}>{el}</p>
        ))}
      </Link>
    </article>
  );
}

export default MovieCard;