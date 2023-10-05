import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  // ⭐️ 순서가 중요함 useEffect보다 아래있으면 에러 발생함
  const router = useRouter;
  // 👉 Link Tag를 사용하지 않고 해당 방법으로도 같은 기능 사용이 가능하다.
  const onClick = (id) => {
    router().push(`/movies/${id}`);
  };

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((result) => setMovies(result.results))
      .catch((e) => console(e));
  }, []);

  return (
    <div className="container">
      {!movies && <h4>Loading...</h4>}
      {movies.map((item) => (
        <div className="movie" key={item.id}>
          <img
            onClick={() => onClick(item.id)}
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          />
          <Link href={`/movies/${item.id}`}>
            <h4>{item.original_title}</h4>
          </Link>
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
