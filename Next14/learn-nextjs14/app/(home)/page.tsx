"use client";

import { useEffect, useState } from "react";

export default function BlackGome() {
  // 로딩 상태 체크를 위한 변수
  const [isLoading, setIsLoading] = useState(true);
  // 데이터를 담을 변수
  const [movie, setMovie] = useState([]);

  // 1. 해당 컴포넌트가 실행될때 최초 실행을 위함
  useEffect(() => {
    getMovie();
  }, []);

  // 2. 비동기 통신을 통해 데이터를 요청
  const getMovie = async () => {
    const res = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await res.json();
    // 2.1 변수에 데이터 삽입
    setMovie(json);
    // 2.2 로딩 False로 변환
    setIsLoading(false);
  };

  return (
    <>
      <h1>{isLoading ? "Loading ..." : JSON.stringify(movie)}</h1>
    </>
  );
}
