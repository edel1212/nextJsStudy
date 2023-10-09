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
    - Would you like to use TypeScript?
    - Would you like to use ESLint?
    - Would you like to use Tailwind CSS?
    - Would you like to use `src/` directory?
      - 사용 하면 src 디렉토리 생성된다.
    - Would you like to use App Router? (recommended)
      - ⭐ 라우팅 방식 설정
        - 이전에는 `pages` 디렉토리 방법을 사용해서 라우팅을 했다
        - 최근에는 `App` 라우팅 방식이 생성되었다.
          - `React`에서 추천하는 방법이다. [13버전부터 추가 되었음]
    - Would you like to customize the default import alias (@/\*)?
- `npm run dev`를 사용하면 서버 실행

<br/>
<hr/>

## Routing - Pages 사용 방법 [Next13 이전]

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
<hr/>

## Routing - App Router 사용 방법 [Next13 이후]

- `Next13`이전은 파일명이 각각의 세그먼트였다면 이후는 폴더명이 세그먼트명이다
- 해당 폴더명 -> `page.js` 를 사용해줘야한다. ⭐️ 파일명은 고정임

  - 파일 경로
    - `src/app/여기가 세그먼트명/page.js`
  - 예시 코드

    - page.js

      ```javascript
      /**
       * 👉 동장 순서
       * - http://localhost:3000/create 호출
       * - src ->  app -> 해당 요청에 맞는 폴더명을 찾음
       * - 해당 폴더를 찾으면 `page.js`파일이 있다면 해당 컴포넌트를 랜더링 해줌
       *  -> 해당 js명이 `page.js`가 아니라면 404 페이지를 반환함
       */
      export default function page() {
        return <div>src - app - paht명 - page.js </div>;
      }
      ```

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
  - 작성된 스타일은 모두 독립적으로 적용된다! 다른 컴포넌트에 영향이 없음 해당 컴포넌트의 태그만 영향이 있다
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

<br/>
<hr/>

## 공통영역 처리 방법 - 전역 처리

- spring의 jsp 따지면 `include` Tymeleaf로 따지면 `fagment`로 생각하면 좋다.
- 공통적인 틀을 만드는 것은 물론이고 Global css 또한 해당 위치에 적용해야한다 그렇지 않으면 에러가 발생한다.
  - ⭐️ 일반 컴포넌트에 CSS 적용 시 발생 하는 에러
    - Message : Global CSS cannot be imported from files other than your Custom <App>.
- 주의 사항

  - 1 . ⭐️ 파일명은 **무조건** `_app.js`이어야한다 . 프레임워크에서 컴포넌트중에서 가장 먼저 읽는 네이밍이기 때문이다!
  - 2 . 해당 컴포는트의 기본틀을 꼭 지켜주자

    - `{ Component, pagePrpos }` 파라미터로 받는 것
    - `<Component {...pagePrpos}></Component>`형태로 컴포넌트를 불러오는 것

    ```javascript
    /***
     * 👉 { Component, pagePrpos } 해당 파라미터 2개는 필수이다.
     * - 기본적인 틀이며 따르면 된다,.
     *  - Component 경우 우리가 생성하는 각각의 컴포넌트라 생각하고
     *  - pagePrpos 각각의 컴포넌트에 전달하는 pageProps이다
     */
    export default function App({ Component, pagePrpos }) {
      return (
        <>
          {/* ✅ 아래의 형식을 꼭 사용해야한다 스프레드 시트를 사용해서 pageProps를 넘겨주자 */}
          <Component {...pagePrpos}></Component>
        </>
      );
    }
    ```

- 활용 ( 전역 Css와 Nav Component 사용 )

  - \_app.js

    ```javascript
    // 👉 NavBar Import
    import NavBar from "@/component/NavBar";
    // 👉 전역 css를 불러와도 에러가 없다 👍
    import "../styles/globals.css";

    export default function App({ Component, pagePrpos }) {
      return (
        <>
          {/** 👉 Nav 컴포넌트 Call */}
          <NavBar></NavBar>

          <Component {...pagePrpos}></Component>

          <span>이런식으로 여러가지를 추가 가능함 ! Footer넣자!</span>
        </>
      );
    }
    ```

- `_app.js`를 사용할 경우 사용하는 패턴

  - 패턴 사용 이유
    - `_app.js`에는 공통적으로 사용해야하는 것들이 많이 Import 된다.
    - 그렇다면 엄청나게 길어질 것이며 이러한 코드는 보기도 관리하기도 힘들어진다.
  - 예시 코드

    - components -> Layout.js

      ```javascript
      import NavBar from "./NavBar";

      // 👉 하위로 들어온 모든 요소들은 children으로 받음
      export default function Layout({ children }) {
        return (
          <>
            <NavBar></NavBar>
            // 👉 사용
            <div>{children}</div>
          </>
        );
      }
      ```

    - \_app.js

      ```javascript
      import Layout from "@/component/Layout";
      import "../styles/globals.css";

      export default function App({ Component, pagePrpos }) {
        return (
          <>
            {/* ✅ Layout 하위에 들어온 컴포넌트 구조가 중요함 */}
            <Layout>
              <Component {...pagePrpos}></Component>
            </Layout>
          </>
        );
      }
      ```

<br/>
<hr/>

## Header 정보 변경

- NextJs에서는 Header 정보를 쉽게 바꿀 수 있는 Library가 기본적으로 설치되어 있어 편하게 사용이 가능하다.
- 해당 `Head` 또한 랜더링 될 때 적용되므로 공통적으로 랜더링 되는 위치에 적용하는것이 옳다.
  - 그렇지 않으면 만약 about 컴포넌트에만 작업했다면 about에서만 적용됨.
- 예시 코드

  - HeadTitle.js

    ```javascript
    // 👉 NextJs 설치 시 자동으로 설치되어 있는 라이브러리 Import!
    import Head from "next/head";

    // 👉 Object형태로 파라미터가 넘어오기 떄문에 {}사용 필수!
    export default function HeadTitle({ titleName }) {
      return (
        // 👉 Head 사용해서 header에서 사용하는 값 변경이 가능하다!
        <Head>
          <title>{titleName} | Moive!</title>
        </Head>
      );
    }
    ```

  - Layout.js

        ```javascript
        import HeadTitle from "./HeadTitle";
        import NavBar from "./NavBar";

        export default function Layout({ children }) {
          return (
            <>
              {/* 👉 titleName파라미터명을 맞춰서 넘겨주자 */}
              <HeadTitle titleName={"Movie!"}></HeadTitle>
              <NavBar></NavBar>
              <div>{children}</div>
            </>
          );
        }
        ```

<br/>
<hr/>

## 정적 파일 불러오는 방법

- NextJs에서 정적 파일은 public폴더 안에 존재한다.
- 불러오는 방법은 간단하게 "/파일"로 다른 경로작업 필요없이 불러올 수 있다. - 틀이 그렇게 잡혀있기 때문
- 예시 코드

  - index.js

  ```javascript
  export default function NavBar() {
    return (
      <nav>
        {/** 바로 public 내부의 vercel.svg를 불러옴 */}
        <img src="/vercel.svg"></img>
      </nav>
    );
  }
  ```

<br/>
<hr/>

## `next.config.js`

- nextJs 서버의 설정을 수정할 수 있다.

### Redirects 사용 방법

- 지정한 path로 들어온 접근을 변경된 주소로 이동시켜 준다.
- 더 이상 사용하지 않는 url로 들어올 경우 변경된 url로 보내줄 때 사용된다.
- 배열 형태로 되어있기에 원하면 계속 해서 Object를 늘려서 설정이 가능하다
- 사용 예시

  - next.config.js

    ```javascript
    /** @type {import('next').NextConfig} \*/
    const nextConfig = {
      reactStrictMode: true,
      /**
       * 👉 해당 "source"에 잡힌 경로를 "destination"로 이동 시켜줌
       * - :path* 를 사용하면 뒤에 붙은 모든 path 정보를 그대로 넘겨줌
       * */
      async redirects() {
        return [
          {
            source: "/old-blog/:path*",
            destination: "/new-sexy-blog/:path*",
            // 💬 일반적으로 페이지 이동이 영구적으로 변경된 경우 permanent: true를 사용하고, 일시적인 변경의 경우 permanent: false를 사용합니다.
            permanent: false,
          },
        ];
      },
    };

    module.exports = nextConfig;
    ```

### Rewrites 사용 방법

- 받아온 요청을 내가 지정한 요청으로 변경해서 요청을 보낸다.
- NexJs자체가 서버 역할을 하기 떄문에 가능한 기능이다.
- 개발자 도구의 Request부분에서도 이제 요청 시 들어있던 비밀키와 같은 정보도 숨길 수 있다.
- SpringBoot의 `application.protperties`와 비슷한 개념이라 생각하자
- 예시 코드

  - .env

    ```properties
        # API KEY
        API_KEY=시크릿키~
    ```

  - next.config.js

    ```javascript
    // ✅ .evn파일에 작성한 API Key를 불러옴
    const API_KEY = process.env.API_KEY;

    /** @type {import('next').NextConfig} */
    const nextConfig = {
      reactStrictMode: true,
      /**
       * 👉 redirects()와는 다르게 "source"로 접근한 값을 "destination"로 변경해서 요청 함
       */
      async rewrites() {
        return [
          {
            source: "/api/movies",
            destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
          },
        ];
      },
    };

    module.exports = nextConfig;
    ```

### Rewrites - pathVariable 전달 방법

- 예시 코드

  - next.config.js

        ```javascript
        const API_KEY = process.env.API_KEY;

        /** @type {import('next').NextConfig} */
        const nextConfig = {
          reactStrictMode: true,
          async rewrites() {
            return [
             {
                // 👉 중요 포인트는 ":id"로 값을 넘긴다는 것이다!! 변환해주는 destination도 똑같이!
                source: "/api/movies/:id",
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
            },
            ];
          },
        };

        module.exports = nextConfig;
        ```

<br/>
<hr/>

## pre rendering - 구버전용 .. 이제 쓸수 없음 레거시 코드에는 남아있을 수 있으니 .. 참고하자

- 특정 페이지 혹은 상황에 따라 데이터 목록을 로딩 후 보여지는 것이 아닌 서버에서 목록을 받아온 후 적용하게 할 수 있다.
  - 상황에 따라 `SEO`에 필요한 데이터를 홈 화면에 만들 경우 유용할 것으로 추측함
  - 로딩 화면이 없이 서버에서 데이터를 받고 그 후 다 받아진 이후 화면을 랜더링함.
- ⭐️ 사용 시 중요
  - `export`를 꼭 해줘야한다. --> `export async function `
  - 함수명이 틀리면 안된다. --> `getServerSideProps`
- 사용 예시

  - index.js

    ```javascript
    // 👉 { results } 룰 사용해서 ServerSideData를 받아옴
    export default function Home({ results }) {
      return (
        <div className="container">
          {results.map((item) => (
            <div className="movie" key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              />
              <h4>{item.original_title}</h4>
            </div>
          ))}
        </div>
      );
    }

    // 👉 함수명이 중요함 NextJs에서 정해진 함수명임
    export async function getServerSideProps() {
      const { results } =
        await // 💬 서버에서 요청하므로 rewirte를 사용하기 위해서는 앞에 도메인 정보가 필수임
        (await fetch(`http://localhost:3000/api/movies`)).json();
      return {
        props: {
          results,
        },
      };
    }
    ```

<br/>
<hr/>

## pre rendering - NextJs13 버전 이상용

- fetch 옵션 중 `{ cache: 'no-store' }`를 사용해주자

  - 예시 코드

    ```javascript
    import { useEffect, useState } from "react";

    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/movies", {
        // 👉 해당 옵션을 사용해주자
        cache: "no-store",
      });
      const data = await res.json();
      return data.results;
    }

    export default function Home() {
      const [results, setResults] = useState([]);

      useEffect(() => {
        fetchData().then((data) => {
          setResults(data);
        });
      }, []);

      return (
        <div className="container">
          {results.map((item) => (
            <div className="movie" key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              />
              <h4>{item.original_title}</h4>
            </div>
          ))}
        </div>
      );
    }
    ```

<br/>
<hr/>

## Dynamic Routes

- 이전까지는 Path 정보가 하나 뿐인 컴포넌트를 불러오는 개념이었다면 이제는 변수값 혹은 좀 더 세분화된 url로 컴포넌트를 나눠서 사용가능하다.

### path를 좀 더 세분화

- 간단하게 그냥 폴더를 두면 그게 하나의 path가 된다.
- 중요한건 해당 폴더 또한 컴포넌트를 갖게 하고싶다면 `index.js`라는 이름으로 컴포넌트를 생성하면 된다.
- 구조
  - page
    - blackGom
      - index.js : `localhost:3000/blackGome` 시 해당 컴포넌트가 화면에 도출
      - all.js : `localhost:3000/blackGome/all`

### path를 변수로 받는 방법 - [Next13 이전]

- 간단하다 해당 폴더를 생성 한 후 `[변수명].js`로 만들면 해당 변수를 `useRouter` Hook을 이용해 값을 받을 수 있다.
- 폴더 구조

  - pages
    - movive
      - [id].js
  - 사용 예시

    - [id].js

      ```javascript
      import { useRouter } from "next/router";

      export default function Detail() {
        // ⭐️ Hooke을 이용해서 내가 지정한 id값을 받아올 수 있음
        const router = useRouter;
        console.log(router().query.id);
        return <div>이렇게 받을수 있지요~</div>;
      }
      ```

### path를 변수로 받는 방법 - [Next13 이후]

- 사용할 새그먼트명 폴더를 생성 후 `[변수명]`폴더 생성
- 해당 폴더 내부에 `page.js` 생성
- 매개변수로 `{ params }`를 받아서 사용

  - 폴더 구조
  - src
    - app
      - read
        - [...id] or [id]
          - page.js
  - 사용 예시

    - page.js

      ```javascript
      export default function page({ params }) {
        // 👉 접근 시 :  http://localhost:3000/read/1/23/4
        console.log(params); // { id: [ '1', '23', '4' ] }
        return <div>{params.id}</div>;
      }
      ```

<br/>
<hr/>

## `Link Tag`활용 및 `useRouter()`를 사용해서 같은 기능 구현

- 이벤트 함수를 생성하고 거기에 `useRouter()`를 사용해서 push해주면 된다.
  - ⭐️ 중요 포인트는 `useRouter()` 선언 위치가 `useEffect()` 밑에 있으면 에러가 뜬다 .
    - 사용에는 문제가 없지만 콘솔에 에러가 뜸
- `router.push()` 형태로 값을 넣어주면 된다.
- `{}` Object 구조를 사용하면 다양한 방법으로 사용이 가능하다.
  - 그냥 `router.push(url)` 사용 시 일반 이동
  - Object 구조일 경우 `quertParameter` 사용 가능
  - `router.push({}, "~~~" )`처럼 사용 시 Url 마스킹 가능
- 사용 예시

  - index.js

    ```javascript
    import { useRouter } from "next/router";

    export default function Home() {
      const [movies, setMovies] = useState([]);
      // ⭐️ 순서가 중요함 useEffect보다 아래있으면 에러 발생함
      const router = useRouter();
      // 👉 Link Tag를 사용하지 않고 해당 방법으로도 같은 기능 사용이 가능하다.
      const onClick = (id) => {
        /**
         * ✅ JSON 구조를 사용하면  url 말고도 queryParameter를 넘겨줄 수 있다
         * - pathname : 이동하려는 path 정보
         * - query {}  : queryParameter
         * - push({}, "이동 시 시 사용될 path정보")  >>> ⭐️ 두번째 매개변수를 통해 queryParameter를 숨길 수 있다!!
         *     - 이런 방식의 활용은 내부 로직을 모르는 사람이 볼때는 쿼리파람없이 해킹 가능 이네 하지만 사실은 쿼리파라미터가 없어서 튕겨낼 수 도 있다.
         * - 💬 Link 태그에서도 똑같이 사용이 가능하다 그냥 똑같이 넣으면 된다!!
         */
        router.push(
          { pathname: `/movies/${id}`, query: { title: "yooo" } },
          `/movies/${id}`
        );
      };

      return (
        <div className="container">
          {movies.map((item) => (
            <div className="movie" key={item.id}>
              <img
                // 👉 함수 호출
                onClick={() => onClick(item.id)}
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              />
            </div>
          ))}
        </div>
      );
    }
    ```

<br/>
<hr/>

## All-Catch

- 이전 예제에서는 `loclahost:3000/movies/:id` 와 같은 식으로 한개의 값 만 받아 왔었지만 여러개를 배열로 받을 수 있다.
- 자주 사용되지는 않지만 알아두면 필요할 경우 유용하게 사용할 수 있다.
- 사용 방법

  - 기존 예제에서 사용하던 `[id].js`파일 -> `[...id].js`로 변경하면 알아서 배열로 받아온다!
  - [...id].js

    ```javascript
    import { useRouter } from "next/router";

    export default function Detail() {
      const router = useRouter();
      console.log("------------------");
      console.log(router.query.id); // 👉 [] 형태로 들어옴

      const id = router.query.id;
      return <div>{id}</div>;
    }
    ```

<br/>
<hr/>

## 404 페이지 설정 방법

- 간단하게 `404.js`파일을 만들고 컴포넌트를 생성하면 끝이다.

  - 예시 코드

    ```javascript
    export default function Error404() {
      return <div>404Error</div>;
    }
    ```
