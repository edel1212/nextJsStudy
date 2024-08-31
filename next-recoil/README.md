# Recoil

- 전역관리 상태 관리를 위한 Library 이다.
- React 특성상 하위 하위.... 하위 컴포넌트에 데이터를 전달하기 위해서는 props를 전달해야하는데 그렇게되면 중간 컴포넌트들이 중계자가 되는 불편함이 있다.
  - 이러한 불편함을 덜어주고자 전역적으로 관리할 데이터를 지정하는 개념이다.
- 사용방법

  - 1 . `npm install recoil`
  - 2 . 메인 js 부분에 감시할 수 있도록 `<RecoilRoot></RecoilRoot>` 설정

    - \_app.js

      ```javascript
      import "@/styles/globals.css";
      import { RecoilRoot } from "recoil";

      export default function App({ Component, pageProps }) {
        return;
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>;
      }
      ```

  - 3 . 사용할 Recoil State 선언

    - 위치는 상관없으나 기본적으로 store라는 폴더에 자주 사용함
    - countState.js

      ```javascript
      // 👉 Recoil에 사용할 번수선언을 위한 Import
      import { atom } from "recoil";

      export const countState = atom({
        // 👉 고유 식별 Key 지정 중복되면 안된다!
        key: "count",
        // 👉 사용 디폴트 값 지정 여러가지 형태 가능 {}, [] 등등
        default: 10,
      });
      ```

  - 4 . 사용 js

    - index.js

      ```javascript
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
      ```

- Recoil 사용 가능 import 메서드
  - useRecoilState : react의 useState랑 동일한 기능이라고 생각하면 된다.
  - useSetRecoilState : useState에서 setter만 있는것
  - useRecolValue : useState에서 value만 있는것
  - useResetRecoilState : 기본값으로 초기화 시키는 기능
