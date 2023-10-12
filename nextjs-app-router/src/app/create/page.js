"use client";

// 👉 app router를 사용할 경우 navigation에서 Import 해줘야한다!!
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };
    fetch("http://localhost:9999/topics", options)
      .then((res) => res.json())
      .then((result) => {
        // 👉 router를 새로고침 한다.
        router.refresh();
        router.push(`/read/${result.id}`);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <p>
          <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="create"></input>
        </p>
      </form>
    </div>
  );
}
