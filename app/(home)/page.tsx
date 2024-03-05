import Movie from "../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
  // description: 'The Best Movies on the Best Framework',
};

// 나중에 또 쓸 거라 export
// page.tsx에서 아무거나 export할 수는 없다.
// 그래서 app/constants.ts로 옮겨서 export
// export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // 로딩을 확인하기 위해 임의의 시간(ms) 지연
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  // return <div>{JSON.stringify(movies)}</div>;
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
