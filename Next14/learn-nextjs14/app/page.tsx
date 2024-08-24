import Navigation from "./components/navigation";

/***
 * ℹ️ Root Segment 이다
 *    - "/"로 접근 시 보여지는 최초 화면
 */
export default function BlackGome() {
  return (
    <>
      <Navigation />
      <h1>Hello NextJs!</h1>
    </>
  );
}
