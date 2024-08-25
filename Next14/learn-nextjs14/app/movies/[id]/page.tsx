import React from "react";

interface Props {
  params: { id: string };
  searchParams: { page: string };
}

export default function movieDetails({ params, searchParams }: Props) {
  return (
    <h1>
      Movie Details :: {params.id} || {searchParams.page}
    </h1>
  );
}
