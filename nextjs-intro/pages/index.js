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
    <>
      <h2>Home!</h2>
      {!movies && <h4>Loading...</h4>}
      {movies.map((item) => (
        <div key={item.id}>{item.original_title}</div>
      ))}
    </>
  );
}
