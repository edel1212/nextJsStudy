"use client";

import Link from "next/link";
import styles from "../../styles/movie.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

/**
 * 👍 SSR(Main Page) -> CSR(현재 컴포넌트)를 불러서 사용
 */
export default function Movie({ title, id, poster_path }: IMovieProps) {
  //  👍 HOOK 사용
  const router = useRouter();
  return (
    <div className={styles.movie}>
      <Image
        width={"300"}
        height={"300"}
        src={poster_path}
        alt={title}
        //  👍 Click Event 사용
        onClick={() => {
          router.push(`/movies/${id}`);
        }}
      />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
