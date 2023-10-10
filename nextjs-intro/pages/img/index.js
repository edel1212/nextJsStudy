import Image from "next/image";
import React, { useEffect, useState } from "react";
import picka from "/public/picka.png";

export default function page() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/movies");
        const data = await response.json();
        setImageData(data.results[0].poster_path); // 데이터 설정
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    })();
  }, []);

  return (
    <div>
      {/* 👉 일반 Image 태그 */}
      <img src="/picka.png" width={"50%"} alt="이건 그냥 img" />
      <hr />
      <Image
        src={picka}
        alt="이건 최적화 적용"
        className="다 가능해"
        style={{ width: "50%", height: "100%" }}
      />
      <hr />
      <Image
        src={`https://image.tmdb.org/t/p/w500/${imageData}`}
        alt="비동기 통신으로 받음 next.config.js 설정 필요"
        width={400} // ⭐️ 필수 값
        height={300} // ⭐️ 필수 값
      />
    </div>
  );
}
