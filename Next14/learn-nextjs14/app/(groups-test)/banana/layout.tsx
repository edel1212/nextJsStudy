export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <h4>@ 바나나전용 Layout - Route Group 사용해 다르게 적용</h4>
    </div>
  );
}
