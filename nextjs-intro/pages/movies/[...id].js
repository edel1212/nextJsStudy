import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log("------------------");
  console.log(router.query.id); // 👉 [] 형태로 들어옴

  const id = router.query.id;
  return <div>{id}</div>;
}
