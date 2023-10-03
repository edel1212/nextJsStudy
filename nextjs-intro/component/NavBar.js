import Link from "next/link";
import { useRouter } from "next/router";

const activeNav = (path) => {
  return useRouter().pathname === path ? "active" : null;
};

export default function NavBar() {
  return (
    <nav>
      {/* 👉 public에 있는 정적 파일을 "/"를 사용해서 바로 접근이 가능함 */}
      <img src="/vercel.svg"></img>
      <Link href="/" legacyBehavior>
        <a className={activeNav("/")}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={activeNav("/about")}>About</a>
      </Link>

      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
