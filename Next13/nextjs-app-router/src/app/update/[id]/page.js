"use client";

// 👉 app router를 사용할 경우 navigation에서 Import 해줘야한다!!
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function update({ params }) {
  const id = params.id;
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetch("http://localhost:9999/topics/" + id)
      .then((res) => res.json())
      .then((result) => {
        // 👉 router를 새로고침 한다.
        setTitle(result.title);
        setBody(result.body);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };
    fetch("http://localhost:9999/topics/" + id, options)
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
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="update"></input>
        </p>
      </form>
    </div>
  );
}
