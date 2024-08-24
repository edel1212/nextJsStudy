"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navigation() {
  // 👉 usePathname를 사용하기 위해서는 "use client" 선언이 필요하다
  const path = usePathname();
  console.log(path);
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home</Link> {path === "/" ? "✅" : null}
        </li>
        <li>
          <Link href={"/about-us"}>About-Us</Link>{" "}
          {path === "/about-us" ? "✅" : null}
        </li>
      </ul>
    </nav>
  );
}
