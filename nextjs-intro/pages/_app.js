import Layout from "@/component/Layout";
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
      <Layout>
        <Component {...pagePrpos}></Component>
      </Layout>
    </>
  );
}
