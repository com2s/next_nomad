"use client";
// onClick 이벤트 리스너를 처리하기 위해...

import Link from "next/link";
import styles from "../../styles/movie.module.css";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router"; 가 아니라 next/navigation을 사용한다.

interface IMovieProps {
  id: string;
  title: string;
  poster_path: string;
}

export default function Movie({ id, title, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  }
  return (
    //   <div key={movie.id}>
    // 이 컴포넌트로 가져오면 key는 필요없다.
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
