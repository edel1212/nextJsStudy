/**
 * 👉 동장 순서
 * - http://localhost:3000/create 호출
 * - src ->  app -> 해당 요청에 맞는 폴더명을 찾음
 * - 해당 폴더를 찾으면 `page.js`파일이 있다면 해당 컴포넌트를 랜더링 해줌
 *  -> 해당 js명이 `page.js`가 아니라면 404 페이지를 반환함
 */
export default function page() {
  return <div>src - app - paht명 - page.js </div>;
}
