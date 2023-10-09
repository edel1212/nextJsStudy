export default function layout({ children }) {
  return (
    <form>
      <b>create폴더 내부에서도 한번더 layout.js로 감싸서 사용</b>
      {children}
    </form>
  );
}
