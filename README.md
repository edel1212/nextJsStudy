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

<br/>

### `Link Tag`

- React에서는 `A Tag`를 사용하지 말자, 아니 사용하면 안된다.
  - 화면이 깜빡거림
  - 느림
  - 장점이 하나도 없으며 eslint에서도 사용하지 말라고 경고가 나옴
- `Link Tag` 장점
  - 화면이 깜빡이지 않고 페이지간 이동이 가능하며 속도 또한 훨씬 빨라 SPA느낌을 준다.
  - 따로 해당 Library를 설치할 필요 없이 NextJs에 포함되어 있어서 그냥 바로 `import` 하여 사용하면 된다.
  - `className`, `style`등등 여러가지를 사용이 가능하다.
- 예시 코드

  ```javascript
  // 👉 그냥 import 하고 사용하면 끝!
  import Link from "next/link";

  export default function NavBar() {
    /**
     *  👉 React를 사용하면 a Tag를 사용해서 페이지 이동을 사용하지 말자!!
     *     - 무조건 Link를 사용해주자! 그래야 싱글 페이지를 경험 하는 느낌을 낼 수 있음!! 기억하자!
     */
    return (
      <nav>
        <Link href="/" style={{ color: "red" }} className="hello">
          Home
        </Link>
        <Link href="/about">About</Link>
      </nav>
    );
  }
  ```

<br/>

### `useRouter()`

- 해당 Url에 대한 정보를 가져와서 사용이 가능하다.
- NextJs 설치 시 자동으로 설치되어 있기에 바로 사용하면 된다.
- 예시 코드

  ```javascript
  import Link from "next/link";
  import { useRouter } from "next/router";

  const activeNav = (path) => {
    // 💬 NextJs에서 기본적으로 router가 설치되어 있기 때문에 사용만 하면된다.
    //    - 해당 함수 내에는 rotuer에 대한 여러가지 정보를 받아서 사용이 가능함
    const router = useRouter;
    return {
      color: path === router().pathname ? "red" : null,
    };
  };

  export default function NavBar() {
    return (
      <nav>
        <Link href="/" style={activeNav("/")}>
          Home
        </Link>
        <Link href="/about" style={activeNav("/about")}>
          About
        </Link>
      </nav>
    );
  }
  ```

<br/>
<hr/>

## Style 적용 방법

- 방법 1 . `Css Module`을 사용하는 방법

  - 파일의 명명규칙이 정해져 있다.

    - `??.module.css` 형태이다 앞에는 자유지만 뒤에는 꼭 명명규칙에 맞춰주자
    - 사용 방법은 간단하다 `className`을 직접 지정해주는것이 아닌 `clasName={import 모듈명.클래스명}`로 적용하면 된다.
      - 여기서 장점은 해당 class명이 알아서 부여되어 중복의 걱정할 필요가 없다.

  - 사용 예시

    - NavBar.module.css

      ```css
      /*
      💬 해당 MoudleCss의 최고의 장점은 사용하는 className의 중복을 걱정하지 않아도 된다는 것이다.
          - 랜더링하여 화면에 사용될 경우 알아서 겹치지 않도록 자동으로 클래스명을 만들어서 사용됨!
          - 단 사용 방법은 "clasName={모듈명.클래스명}"으로 사용해줘야 한다는 것이다.
      */
      .nav {
        background-color: green;
        display: flex;
        justify-items: center;
      }

      .active {
        color: red;
      }

      .link {
        text-decoration: none;
      }
      ```

    - NavBar.js

      ```javascript
      import Link from "next/link";
      // 👉 사용 하려는 css modul import
      import styles from "./NavBar.module.css";

      export default function NavBar() {
        return (
          <nav>
            {/** 👉 다수의 className을 사용해주기 위해서는 배열 형태로 만들어 준 후 join(" ")을 사용해 주자 */}
            <Link href="??" className={[styles.active, styles.link].join(" ")}>
              cssMoulde 테스트
            </Link>
          </nav>
        );
      }
      ```

- 방법 2 . `style jsx` 적용 방법

  - 따로 Css파일을 만들 필요가 없다
  - 클래스명을 따로 지어줄 필요없이 태그명으로 바로 사용이 가능하다.
  - 하지만 뭔가 불편하다 코드가 길어지고 직관적인 느낌이 없음
  - 백틱 ``을 사용하여 작성해줘야한다.
  - 사용 방법

    - NavBar.js

      ```javascript
      import Link from "next/link";
      import { useRouter } from "next/router";

      const activeNav = (path) => {
        return useRouter().pathname === path ? "active" : null;
      };

      export default function NavBar() {
        return (
          <nav>
            {/** 
               ⭐️ nexjs버전이 오르면서 Link 태그 내부 a태그 사용이 불가능한데 legacyBehavior를 사용하면 된다. 
                 - "style jsx"에서는 Link태그에 접근이 불가능하여 css적용이 어려움 ... 불편하다..
            */}
            <Link href="/" legacyBehavior>
              <a className={activeNav("/")}>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className={activeNav("/about")}>About</a>
            </Link>

            {/** 👉 아래와 같이 return 구문안에 작성 중요 포인트는 "jsx"를 사용해주고 ``을 사용해줘야한다는 것 */}
            <style jsx>{`
              nav {
                background-color: tomato;
              }
              a {
                text-decoration: none;
              }
              .active {
                color: yellow;
              }
            `}</style>
          </nav>
        );
      }
      ```
