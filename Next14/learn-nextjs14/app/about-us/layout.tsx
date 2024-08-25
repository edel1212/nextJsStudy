export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <h4>@ /About/**에만 적용중인 layout 컴포넌트</h4>
    </div>
  );
}
