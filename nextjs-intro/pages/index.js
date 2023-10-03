import { useEffect, useState } from "react";

const API_KEY = "a3af7d97effb973e78c5fb1fd7787b13";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`
    )
      .then((res) => res.json())
      .then((result) => setMovies(result.results))
      .catch((e) => console(e));
  }, []);
  return (
    <div className="container">
      {!movies && <h4>Loading...</h4>}
      {movies.map((item) => (
        <div className="movie" key={item.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
          <h4>{item.original_title}</h4>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
