import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
// import MovieVideos from "../../../components/movie-videos";
import MovieVideos from "app/components/movie-videos";

// export const metadata = {
//   title: "Movie",
//   description: "The Best Movie on the Best Framework",
// };

interface IParams {
  params: { id: string };
}
// 아래에서 IParams 로 쓰이는데, 이것은 interface로, 타입을 정의하는 것이다.
export async function generateMetadata({params: {id}}: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
    description: "Generate Metadata for Movie Detail Page",
  };
}


// 화살표 함수로 쓰고 싶다면...
// const ComponentName = async () => { ...
// 지금은 await를 쓰지 않기 때문에 async 키워드를 쓸 필요가 없다.
export default async function MovieDetailPage({
  params: { id },
}: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo params={{ id }} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos params={{ id }} />
      </Suspense>
    </div>
  );
}
