import Link from "next/link";
import { useRouter } from "next/router";

const activeNav = (path) => {
  // 💬 NextJs에서 기본적으로 router가 설치되어 있기 때문에 사용만 하면된다.
  const router = useRouter;
  return {
    color: path === router().pathname ? "red" : null,
  };
};

export default function NavBar() {
  /**
   *  👉 React를 사용하면 a Tag를 사용해서 페이지 이동을 사용하지 말자!!
   *     - 무조건 Link를 사용해주자! 그래야 싱글 페이지를 경험 하는 느낌을 낼 수 있음!! 기억하자!
   */
  return (
    <nav>
      <Link href="/" style={activeNav("/")} className="hello">
        Home
      </Link>
      <Link href="/about" style={activeNav("/about")}>
        About
      </Link>
    </nav>
  );
}
