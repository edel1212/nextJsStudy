"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const params = useParams();
  const id = params.id;

  const router = useRouter();

  const deleteFunc = () => {
    const options = {
      method: "DELETE",
    };
    fetch("http://localhost:9999/topics/" + id, options)
      .then((res) => res.json())
      .then((result) => {
        router.push(`/`);
      });
  };

  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={`/update/${id}`}>Update</Link>
          </li>
          <li>
            <button
              // 👉  onClick={deleteFunc()}   ❌ 해당 방법으로 사용 시 랜더링 시 삭제 메서드가 실행된다!!
              onClick={() => {
                deleteFunc();
              }}
            >
              Delete
            </button>
          </li>
        </>
      ) : null}
    </ul>
  );
}
