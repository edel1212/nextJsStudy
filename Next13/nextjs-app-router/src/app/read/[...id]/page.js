export default async function page({ params }) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/${params.id}`, {
    cache: "no-cache",
  });
  const result = await res.json();

  // 👉 접근 시 :  http://localhost:3000/read/1/23/4
  console.log(result);
  return (
    <div>
      <h2>{result.title}</h2>
      <p>{result.body}</p>
    </div>
  );
}
