import { useEffect, useState } from "react";

async function fetchData() {
  const res = await fetch("http://localhost:3000/api/movies", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
}

export default function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setResults(data);
    });
  }, []);

  return (
    <div className="container">
      {results.map((item) => (
        <div className="movie" key={item.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
          <h4>{item.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
