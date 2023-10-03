import NavBar from "@/component/NavBar";
import "../styles/globals.css";

/***
 * 👉 { Component, pagePrpos } 해당 파라미터 2개는 필수이다.
 * - 기본적인 틀이며 따르면 된다,.
 *  - Component 경우 우리가 생성하는 각각의 컴포넌트라 생각하고
 *  - pagePrpos 각각의 컴포넌트에 전달하는 pageProps이다
 */
export default function App({ Component, pagePrpos }) {
  return (
    <>
      <NavBar></NavBar>

      {/* ⭐️ 아래의 형식을 꼭 사용해야한다 스프레드 시트를 사용해서 pageProps를 넘겨주자 */}
      <Component {...pagePrpos}></Component>

      <span>이런식으로 여러가지를 추가 가능함 ! Footer넣자!</span>
    </>
  );
}
