import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styles from "../styles/Grpah.module.css"; // Import CSS file for styling

/**
 * 👉 npm install --save chart.js react-chartjs-2 설치
 */
const data = {
  labels: ["종호", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "값:",
      data: [50, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Graph() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "doughnut",
        data: data,
        options: {
          cutout: "75%", // 👉 cutout을 75%로 설정 가운데 원 크기 수정
          // 👉 범례 제거 - plugin 같이 사용해줘야함!
          plugins: {
            legend: {
              display: false, // 범례를 숨김
            },
            // 👉 툴팁 제거
            tooltip: {
              enabled: false, // 마우스 호버 툴팁 비활성화
            },
          }, // plugins
        }, // option
      });
      return () => {
        chartInstance.destroy();
      };
    }
  }, []);

  const num = 2;

  return (
    <div style={{ position: "relative" }}>
      <canvas ref={chartRef} />
      <div className={[styles.centerText]}>안녕하세요{num}</div>
    </div>
  );
}
