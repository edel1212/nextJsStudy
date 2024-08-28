import { API_URL } from "../(home)/page";

const getVideos = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return await response.json();
  };


  export default async function MovieVidoes({id} : {id:string}){
    const vidoes = await getVideos(id);
    return <h6>{JSON.stringify(vidoes)}</h6>
  }