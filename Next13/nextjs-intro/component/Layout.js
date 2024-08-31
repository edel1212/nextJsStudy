import HeadTitle from "./HeadTitle";
import NavBar from "./NavBar";

// 👉 하위로 들어온 모든 요소들은 children으로 받음
export default function Layout({ children }) {
  return (
    <>
      {/* 👉 titleName파라미터명을 맞춰서 넘겨주자 */}
      <HeadTitle titleName={"Movie!"}></HeadTitle>
      <NavBar></NavBar>
      <div>{children}</div>
    </>
  );
}
