import React, { useEffect, useState } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [rememberID, setRememberID] = useState(false);

  // 페이지 로딩 시, 로컬 스토리지에서 아이디 기억 여부 확인
  useEffect(() => {
    const storedID = localStorage.getItem("rememberedID");
    if (storedID) {
      setId(storedID);
      setRememberID(true);
    }
  }, []);

  const handleIDChange = (event) => {
    setId(event.target.value);
  };

  const toggleRememberID = () => {
    setRememberID(!rememberID);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // 아이디 기억하기가 선택된 경우, 로컬 스토리지에 아이디 저장
    if (rememberID) {
      localStorage.setItem("rememberedID", id);
    } else {
      localStorage.removeItem("rememberedID");
    }

    // 로그인 또는 다른 작업 수행
    // 여기에 필요한 작업을 수행하세요
  };

  return (
    <div>
      <h1>ID 기억하기</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="아이디 입력"
          value={id}
          onChange={handleIDChange}
        />
        <label>
          <input
            type="checkbox"
            checked={rememberID}
            onChange={toggleRememberID}
          />
          아이디 기억하기
        </label>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
