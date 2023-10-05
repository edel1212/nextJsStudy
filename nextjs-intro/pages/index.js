import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  // ⭐️ 순서가 중요함 useEffect보다 아래있으면 에러 발생함
  const router = useRouter();
  // 👉 Link Tag를 사용하지 않고 해당 방법으로도 같은 기능 사용이 가능하다.
  const onClick = (id) => {
    /**
     * ✅ JSON 구조를 사용하면  url 말고도 queryParameter를 넘겨줄 수 있다
     * - pathname : 이동하려는 path 정보
     * - query {}  : queryParameter
     * - push({}, "이동 시 시 사용될 path정보")  >>> ⭐️ 두번째 매개변수를 통해 queryParameter를 숨길 수 있다!!
     *     - 이런 방식의 활용은 내부 로직을 모르는 사람이 볼때는 쿼리파람없이 해킹 가능 이네 하지만 사실은 쿼리파라미터가 없어서 튕겨낼 수 도 있다.
     * - 💬 Link 태그에서도 똑같이 사용이 가능하다 그냥 똑같이 넣으면 된다!!
     */
    router.push(
      { pathname: `/movies/${id}`, query: { title: "yooo" } },
      `/movies/${id}`
    );
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
