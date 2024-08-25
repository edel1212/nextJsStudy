import Link from "next/link";

// 1. 목록을 받아올 API 주소
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

/**
 * ✨ 2. Server에서 이뤄지는 데이터 Fetching
 */
async function getMovies() {
  try {
    await new Promise((res) => setTimeout(res, 1));
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }
}

/**
 * ℹ️ await를 사용하기위해 UI를 그려주는 default 함수를 "async"로 변경해 줘야한다.
 */
export default async function BlackGome() {
  // 3. await를 사용해서 데이터를 불러오면 끝
  const movies = await getMovies();
  return (
    <>
      <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
