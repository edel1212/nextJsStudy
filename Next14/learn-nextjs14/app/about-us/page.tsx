import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About-Us 페이지",
};

export default function Everything_is_Ok() {
  // ⭐️ return을 해주지 않으면 화면에 보여지지 않는다.
  return <h1>About Us!</h1>;
}
