"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export function Control() {
  const params = useParams();
  const id = params.id;
  console.log(id);
  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href="/update/1">Update</Link>
          </li>
          <li>
            <button>Delete</button>
          </li>
        </>
      ) : null}
    </ul>
  );
}
