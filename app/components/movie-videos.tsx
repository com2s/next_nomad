import { API_URL } from "../constants";
import styles from "../../styles/movie-videos.module.css";

async function getVideos(id: string) {
  // console.log(`Fetching videos : ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // 로딩을 확인하기 위해 임의의 시간(ms) 지연
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({
  params: { id },
}: {
  params: { id: string };
}) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {/* 여기서 굳이 id, name 등의 타입을 적을 필요는 없음 */}
      {videos.map((video: { id: string; name: string; key: string }) => (
        // <li key={video.id}>
        //   {video.name}
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
          allowFullScreen
        />
        // </li>
      ))}
    </div>
  );
}
