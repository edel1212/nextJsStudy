import React, { useState } from "react";

// 👉 Recouil State Import
import { countState } from "../store/countState";
// 👉 Recoil 함수 Import
import { useRecoilValue, useRecoilState } from "recoil";

function Counter() {
  // 👉 useRecoilState(상태변수)를 사용해서 불러옴 useState() 와 사용방법이 똑같음
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
function DisplayCount() {
  // 값만 읽어오는 Recoil 함수
  const count = useRecoilValue(countState);
  return (
    <div>
      <h1>받아온 값을 보여주기만하는 컴포넌트 {count} </h1>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Counter />
      <hr></hr>
      <DisplayCount></DisplayCount>
    </div>
  );
}
