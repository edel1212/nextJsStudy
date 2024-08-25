import React from "react";
import { API_URL } from "../../(home)/page";

interface Props {
  params: { id: string };
  searchParams: { page: string };
}

const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

const getVideos = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return await response.json();
};

export default async function movieDetails({ params, searchParams }: Props) {
  const [movie, videos] = await Promise.all([
    getMovie(params.id),
    getVideos(params.id),
  ]);
  return (
    <>
      <h1>
        Movie Name : {movie.title} || Movie Id : {params.id}
      </h1>
      <p>Vidoes : {JSON.stringify({ videos })}</p>
    </>
  );
}
