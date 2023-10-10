import Image from "next/image";
import React, { useEffect, useState } from "react";
import picka from "/public/picka.png";

export default function page() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // 비동기 함수를 호출하여 데이터를 가져옴 (예: 서버 API 호출)
    const fetchData = async () => {
      try {
        const response = await fetch("/api/movies");
        const data = await response.json();
        setImageData(data.results[0].poster_path); // 데이터 설정
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchData(); // 데이터 가져오기
  }, []);

  // 이미지 데이터가 없는 경우 로딩 중을 표시
  if (!imageData) {
    return <div>Loading...</div>;
  }

  // 이미지 데이터를 기반으로 이미지 URL 생성

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
        width={400}
        height={300}
        //unoptimized={true}
      />
    </div>
  );
}
