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
  // ⭐️ 해당 컴포넌트도 count를 변경할떄마다 랜더링이된다 굉장히 비효율적
  // 그냥 해당 props를 갖고 있기만 했다고 랜더링이 일어나버린다 .. 상태관리 라이브러리를 사용하는것!
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <hr></hr>
      <DisplayCount count={count}></DisplayCount>
    </div>
  );
}
