import React, { Suspense, useState } from "react";
import MovieInfo, { getMovie } from "../../components/MovieInfo";
import MovieVideos from "../../components/movie-videos";
interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

/**
 * 👍 해당 매서드에서 await 데이터를 직접 call 하지 않기에
 *    ㄴ> async 선언이 사라졌음 따라서 "use client" 사용또한 가능해짐
 */
export default function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <>
      {/* 👍 fallback을 통해 로딩중 보여질 UI 사용 */}
      <Suspense fallback={<h1>영화 정보 로딩중</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>영화 영상 로딩중</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
