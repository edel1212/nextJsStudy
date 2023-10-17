import React, { useState } from "react";

function Counter({ count, setCount }) {
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
// 👉 만약 같은 컴포넌트가 아님 내부내부내부 있으면 계속 중간 애들이 중계자 역할을 해줘야함...
//  - 이것을 props drilling이라 한다
function DisplayCount({ count }) {
  return (
    <div>
      <h1>받아온 값을 보여주기만하는 컴포넌트 : {count}</h1>
    </div>
  );
}

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <hr></hr>
      <DisplayCount count={count}></DisplayCount>
    </div>
  );
}
