import Movie from "../components/Movie";
import styles from "../../styles/movie.module.css";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

/**
 * fetch를 통해 데이터 목록을 받아옴
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
  } // try - catch
}

/**
 * SSR을 사용한 UI 컴포넌트
 * ㄴ> async 필수 ::  await로 함수 데이터를 받기 때문
 */
export default async function MainPage() {
  //  SSR 방식으로 데이터를 요청함
  const movies = await getMovies();
  return (
    <>
      <div className={styles.container}>
        {movies.map((movie) => (
          // 😱 Click 이벤트를 주고 싶지면 SSR이기에 줄 수 가없음
          //   ㄴ> 그렇기에 해당 Movie 컴포넌트 내부에서 "use client"선언을 통해
          //       해당 컴포넌트에 "Hydration" 적용하여 사용 할 수있다.
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>
    </>
  );
}
