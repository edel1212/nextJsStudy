/**
 * 중요 포인트
 * - 함수명은 어떤것이든 상관 없다 routing의 기준은 해당 js파일명을 따라 생성된다.
 * - export할 경우 무조건 "epxort default" 이어야한다!
 *  - error : Error: The default export is not a React Component in page
 */
export default function about() {
  return (
    <div>
      <h2>about</h2>
    </div>
  );
}
