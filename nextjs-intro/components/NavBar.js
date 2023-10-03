import Link from "next/link";
import { useRouter } from "next/router";

const activeNav = (path) => {
  return useRouter().pathname === path ? "active" : null;
};

export default function NavBar() {
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={activeNav("/")}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={activeNav("/about")}>About</a>
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
