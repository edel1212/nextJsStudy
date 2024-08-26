import React, { Suspense, useState } from "react";
import MovieInfo from "../../components/MovieInfo";
import MovieVidoes from "../../components/MovieVideos";

interface Props {
  params: { id: string };
  searchParams: { page: string };
}


export default  function movieDetails({ params, searchParams }: Props) {
  return (
    <>  
      <Suspense fallback={<h1>영화 정보 로딩중</h1>}>
        <MovieInfo id={params.id}/>
      </Suspense>
      <Suspense fallback={<h1>영화 영상 로딩중</h1>}>
      <MovieVidoes id={params.id}/>
      </Suspense>
    </>
  );
}
