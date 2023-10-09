import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log("------------------");
  console.log(router.query.id);

  const id = router.query.id;
  return <div>{id}</div>;
}
