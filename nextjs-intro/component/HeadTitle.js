// 👉 NextJs 설치 시 자동으로 설치되어 있는 라이브러리 Import!
import Head from "next/head";

// 👉 Object형태로 파라미터가 넘어오기 떄문에 {}사용 필수!
export default function HeadTitle({ titleName }) {
  return (
    // 👉 Head 사용해서 header에서 사용하는 값 변경이 가능하다!
    <Head>
      <title>{`${titleName} | Movie!`}</title>
    </Head>
  );
}
