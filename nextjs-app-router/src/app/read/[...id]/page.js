export default function page({ params }) {
  // 👉 접근 시 :  http://localhost:3000/read/1/23/4
  console.log(params); // { id: [ '1', '23', '4' ] }
  return <div>{params.id}</div>;
}
