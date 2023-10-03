import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

const activeNav = (path) => {
  // 💬 NextJs에서 기본적으로 router가 설치되어 있기 때문에 사용만 하면된다.
  //    - 해당 함수 내에는 rotuer에 대한 여러가지 정보를 받아서 사용이 가능함
  const router = useRouter;
  return path === router().pathname ? styles.active : "";
};

export default function NavBar() {
  /**
   *  👉 React를 사용하면 a Tag를 사용해서 페이지 이동을 사용하지 말자!!
   *     - 무조건 Link를 사용해주자! 그래야 싱글 페이지를 경험 하는 느낌을 낼 수 있음!! 기억하자!
   */
  return (
    <nav className={styles.nav}>
      <Link href="/" className={activeNav("/")}>
        Home
      </Link>
      <Link href="/about" className={activeNav("/about")}>
        About
      </Link>
    </nav>
  );
}
