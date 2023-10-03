# NextJsStudy

## NextJs의 특징

- `Framework`이다.
  - 틀이 정해져 있고 그 틀에 맞춰서 사용하기만 하면된다.
  - 정해진 틀에 위치에 코드를 맞춰서 사용만 해주면 더욱 편하게 개발을 진행 할 수 있다.
  - 기본적으로 필요한 Library를 내장하고있다.
  - 필요한 설정이 기본적으로 되어있단 - 404 페이지 등등 ..
- `Library`와`Framework`의 차이점
  - `Library`의 경우 내가 사용 하여 개발만 하는 개념이다 대체로 내가 원하는 방향으로 사용해서 개발하면 되는 개념임
    - `create-react-app`으로 생각하면 쉽다.
      - App.js가 존재함
      - Component를 모아둘 폴더를 아무 이름이나 생성해서 넣은 다음 Import해서 써도됨
      - Router를 사용할 폴더도 위와 같은 개념으로 사용 해도된다. - 틀이 없기에 자유로움 내가 직접 기준을 만들어 개발하면 됨
  - `Framework`의 경우 위에 설명과 같이 틀이 정해져있어 그틀에 맞춰 개발하면 된다.
    - `create-next-app`으로 생각하면 쉽다.
      - pages폴더 안에 `index.js`이름으로 리엑트 컴포넌트를 생성하면 어떠한 라우터, 랜더링 설정 없이도 `127.0.0.0:3000`로 접근하면 해당 컴포넌트가 실행된다.
        - `Framework`이기 때문에 추상화 되어있는 상태로 이미 pages폴더 안의 파일을 `home`으로 지정되어 있기 때문이다!!
          ```javascript
          // index.js
          // 👉 함수명이 어떤것이든 상관없음!!
          export default function Foo() {
            return "Hi~";
          }
          ```

<br/>
<hr/>

## 설치방법 및 서버 실행

- `npx create-next-app@latest` 명령어를 사용해서 nextJs 프로젝트를 생성해준다.
  - 터미널에서 각각 맞는 옵션을 맞게 선택해 주자.
- `npm run dev`를 사용하면 서버 실행

<br/>
<hr/>

## Routing

- Next.js에서는 따로 `react-router-dom`를 설치해 줄 필요가 없다.
  - 이미 설치 및 설정이 전부 되어있음.
- `pages`폴더 내부의 js파일명 기준으로 `/path`가 결정된다.
  - ⭐️ `index.js`의 경우 특별한 케이스로 무조건 root Path로 인식한다.
- `.js`파일의 파일명이 중요하지 내부의 함수명은 자유이다. Url의 Path에 영향이 없다.
  ```javascript
  // about.js
  /**
   * 중요 포인트
   * - 함수명은 어떤것이든 상관 없다 routing의 기준은 해당 js파일명을 따라 생성된다.
   * - export할 경우 무조건 "epxort default" 이어야한다!
   *  - error : Error: The default export is not a React Component in page
   */
  export default function google() {
    return <div>about</div>;
  }
  ```
- `export`는 필수이며 무조건 `export default`를 사용해서 모듈화 해줘야한다.
  - Next.js 프레임워크 자체에서 그렇게 정의하였으므로 따라 사용하면 된다.
