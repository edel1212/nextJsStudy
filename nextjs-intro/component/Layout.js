import NavBar from "./NavBar";

// 👉 하위로 들어온 모든 요소들은 children으로 받음
export default function Layout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      // 👉 사용
      <div>{children}</div>
    </>
  );
}
