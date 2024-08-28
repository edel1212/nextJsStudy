import { API_URL } from "../(home)/page";
import styles from "../../styles/movie-videos.module.css";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          // <iframe> 요소에 특정 기능이나 API에 대한 권한을 부여하는 역할을 합니다.
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // <iframe> 내에서 콘텐츠가 전체 화면 모드로 전환될 수 있도록 허용합니다.
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
