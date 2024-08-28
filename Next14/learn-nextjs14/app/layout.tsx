import { Metadata } from "next";
import Navigation from "./components/navigation";
import "css/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s |  앞에 오는 것은 변수로 치환 함",
    default: "기본값",
  },
  description: "설명 설명",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
