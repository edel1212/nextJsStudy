import Link from "next/link";
import { useRouter } from "next/router";

const activeNav = (path) => {
  return useRouter().pathname === path ? "active" : null;
};

export default function NavBar() {
  return (
    <nav>
      <Link href="/" className={useRouter().pathname === "/" ? "active" : null}>
        Home
      </Link>
      <Link
        href="/about"
        className={useRouter().pathname === "/about" ? "active" : null}
      >
        About
      </Link>

      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
