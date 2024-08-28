import { API_URL } from "../(home)/page";

const getMovie = async (id: string) => {
    throw  Error("eee");
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
};

export default async function MovieInfo({id} : {id:string}){
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>
}