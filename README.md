# NextJs

```properties
# ℹ️ NextJs의 특징
#  - `Framework`이다.
#  - 정해진 틀(`Frame`)이 정해져 있고 그 틀에 맞춰서 개발을 진행하면 쉽게 구현이 가능하다.
#  - 기본적으로 필요한 Library가 설치 되어 있으며 필요한 경우 추가하는 식으로 진행하면 된다.
```

## 구분

- [Next13 사용 링크]("https://github.com/edel1212/nextJsStudy/tree/main/Next13")
- [Next14 사용 링크]("https://github.com/edel1212/nextJsStudy/tree/main/Next14")
- [Recoil 사용 링크]("https://github.com/edel1212/nextJsStudy/tree/main/next-recoil")

## `Library`와`Framework`의 차이

- Library
  - 내가 사용 하여 개발만 하는 개념이다 대체로 **내가 원하는 방향으로 사용해서 개발**하면 되는 개념이다.
    - 기본적인 `React.js`로 생각 하며 비교하면 쉽다
      - 틀이 없기에 자유로움 내가 직접 기준을 만들어 개발하면 된다.
        - 디렉토리 구조나 파일명 등 틀이 정해져 있지 않다.
- Framework
  - 틀이 정해져있어 그 **틀에 맞춰 개발**하면 된다.
  - NextJs를 생각하여 비교하면 된다.
  - 틀이 정해져 있기에 정해진 방식의 라우팅 방식 `Page or App Route`방식에 맞춰 디렉토리 구조 및 파일명이 있다.
    - 정해진 해당 프레임워크에 선점되어 있는 변수명등이 정해져 있다.
  - `IoC(Inversion of Control) - 제어의 역전`을 생각하면 된다.
    - 메소드나 객체의 호출작업을 개발자가 결정하는 것이 아니라 외부에서 결정한다.

## 설치 방법 및 서버 실행

- 프로젝트 생성
  - `npx create-next-app@latest`
- 옵션
  - Would you like to use TypeScript?
    - 타입스크립트 사용 여부
  - Would you like to use ESLint?
    - EsLint 사용 여부
  - Would you like to use Tailwind CSS?
    - Tailwind CSS 사용 여부
  - Would you like to use `src/` directory?
    - 사용 하면 src 디렉토리 생성된다.
  - Would you like to use App Router? (recommended)
    - ⭐ 라우팅 방식 설정
      - 이전에는 `pages` 디렉토리 방법을 사용해서 라우팅을 했다
      - 최근에는 `App` 라우팅 방식이 생성되었다.
        - `React`에서 추천하는 방법이다. [13버전부터 추가 되었음]
  - Would you like to customize the default import alias (@/\*)?
    - Import 시 별칭을 만들어서 불러올지 여부
- 서버 실행
  - `npm run dev`

## Cache ?

- `SSR` 방식을 사용할 경우 새로고침을 해도 값을 최신값을 가져오지 않는다.
  - `Caching`을 하고 있기 때문이다.
  - 성능에는 좋을 수 있으나 실시간성 데이터를 보여주기 위해서는 추가적인 설정이 필요 하다.
- 다양한 cache 설정 방법이 있다 예제에서는 간단하게 해결 가능한 `no-cache`를 사용
- [Next14 - Caching 이슈 및 해결 방법 확인 ](https://github.com/edel1212/nextJsStudy/tree/main/Next14)

## Link Tag

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

## Style 적용 방법

- `Css Module`을 사용하는 방법

  - 파일의 명명규칙이 정해져 있다.

    - `??.module.css` 형태이다 앞에는 자유지만 뒤에는 꼭 명명규칙에 맞춰주자
    - `className`을 직접 지정해주는것이 아닌 `clasName={import 모듈명.클래스명}`로 적용하면 된다.
      - 여기서 장점은 해당 class명이 알아서 부여되어 중복의 걱정할 필요가 없다.

  - 예시

    - ??.module.css

      ```css
      .active {
        color: red;
      }
      .link {
        text-decoration: none;
      }
      ```

    - 적용 컴포넌트

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

- `style jsx` 적용 방법

  - `CSS`파일을 만들 필요가 없다
  - 클래스명을 따로 지어줄 필요없이 태그명으로 바로 사용이 가능하다.
  - 하지만 뭔가 불편하다 코드가 길어지고 직관적인 느낌이 없음
  - 백틱 ``을 사용하여 작성해줘야한다.
  - 작성된 스타일은 모두 독립적으로 적용된다! 다른 컴포넌트에 영향이 없음 해당 컴포넌트의 태그만 영향이 있다

- 예시

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

## 정적 파일 불러오는 방법

- NextJs에서 정적 파일은 public폴더 안에 존재한다.
  - 불러오는 방법은 간단하게 "/파일"로 다른 경로작업 필요없이 불러올 수 있다. - 틀이 그렇게 잡혀있기 때문
- 예시 코드
  ```javascript
  export default function NavBar() {
    return <img src="/vercel.svg"></img>;
  }
  ```

## Image

- NextJs에서는 Image 태그를 사용할 수 있다
- 장점

  - Lazy loading 가능
  - 사이즈 최적화
  - Layout shift 방지
    - 이미지가 로딩전에 너비, 높이가 없어 레이아웃이 깨지는 것

- 예시

  ```javascript
  import Image from "next/image";
  import React, { useEffect, useState } from "react";
  // ⭐️ Image 태그에 넣을 이미지 Import
  import picka from "/public/picka.png";

  export default function page() {
    return (
      <div>
        <Image
          // ✅ src 경로는 import 된 경로만 사용이 가능함!!!
          src={picka}
          alt="이건 최적화 적용"
          className="다 가능해"
          style={{ width: "50%", height: "100%" }}
        />
      </div>
    );
  }
  ```

  - Fetching Data Image ` <Image>` 사용

    - ⭐️ 중요 포인트는 서버로 요청하는 도메인을 `next.config.js`에 꼭 등록해줘야 한다는 것이다.

  ```javascript
  import Image from "next/image";
  import React, { useEffect, useState } from "react";
  import picka from "/public/picka.png";

  export default function page() {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
      (async () => {
        try {
          const response = await fetch("/api/movies");
          const data = await response.json();
          setImageData(data.results[0].poster_path); // 데이터 설정
        } catch (error) {
          console.error("Error fetching image data:", error);
        }
      })();
    }, []);

    return (
      <div>
        {/* 👉 비동기 통신 */}
        <Image
          src={`https://image.tmdb.org/t/p/w500/${imageData}`}
          alt="비동기 통신으로 받음 next.config.js 설정 필요"
          width={400} // ⭐️ 필수 값
          height={300} // ⭐️ 필수 값
        />
      </div>
    );
  }
  ```

  - `next.config.js`

    ```javascript
    // ✅ .evn파일에 작성한 API Key를 불러옴
    const API_KEY = process.env.API_KEY;

    /** @type {import('next').NextConfig} */
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
      /**
       * 👉 redirects()와는 다르게 "source"로 접근한 값을 "destination"로 변경해서 요청 함
       */
      async rewrites() {
        return [
          {
            source: "/api/movies",
            destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
          },
          {
            // 👉 중요 포인트는 ":id"로 값을 넘긴다는 것이다!! 변환해주는 destination도 똑같이!
            source: "/api/movies/:id",
            destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
          },
        ];
      },
      images: {
        domains: ["image.tmdb.org", "*"], // 사용하려는 이미지 호스트 이름 추가
      },
    };

    module.exports = nextConfig;
    ```

## 서버 설정

```properties
# ℹ️ `next.config.js` 파일에서 서버의 설정을 수정할 수 있다.
```

### Redirects 사용 방법

- 지정한 path로 들어온 접근을 변경된 주소로 이동시켜 준다.
- 더 이상 사용하지 않는 url로 들어올 경우 변경된 url로 보내줄 때 사용된다.
- 배열 형태로 되어있기에 원하면 계속 해서 Object를 늘려서 설정이 가능하다
- 사용 예시

  - next.config.js

    ```javascript
    // ✅ .evn파일에 작성한 API Key를 불러옴
    const API_KEY = process.env.API_KEY;

    /** @type {import('next').NextConfig} */
    const nextConfig = {
      reactStrictMode: true,
      //⭐️ 사용하려는 이미지의 도메인 주소를 추가해줘야한다.
      images: {
        domains: ["image.tmdb.org", "*"],
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

## 환경 변수 사용 방법

- 개발 시 `local`환경과 `prod`환경의 사용 URL이 다를 수 있다.
- 해당 경우 일일이 변경해주는 것이 아닌 하나의 파일을 읽게끔 하면 된다 `.env`파일
- 사용 가능한 `.env`파일 종류
  - `.env` : 어떤 환경이든 읽음 공통 적으로 사용
  - `.env.local` : 개발 환경에서 읽음 `npm run dev`로 서버 실행 시 읽음
  - `.env.production` : 운영 환경에서 읽음 `npm build`를 통해 빌드된 서버 실행 시 읽음
- ⭐️ 만약 통신간 비밀키 와 같은 민감 정보를 사용할 경우라면 `.env`파일에 등록 후 `next.config.js`에서 읽게 끔 해주자 [ Rewrites 사용 방법 확인 ]
- 기본적인 `app router` 방식은 Server Component 방식이기 때문에 쉽게 사용 가능하지만 `use-client` 방식일 경우 사용 방식이 다르다.
- 사용 방법

  - .env.local

    ```properties
    # 👉 Server Component에서 사용 시
    #    - process.env.??
    API_URL=http://localhost:9999/topics

    # 👉 Client Component에서 사용 시 꼭  "NEXT_PUBLIC_???"형식으로 사용 해야함
    #    - process.env.NEXT_PUBLIC_???
    NEXT_PUBLIC_API_URL=http://localhost:9999/topics

    ```

  - Component별 사용
    - Server Component : `const res = await fetch(process.env.API_URL)`
      - 위와 같이 `process.env.???`를 사용해서 불러옴
    - Client Component : `const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/${params.id}`, {cache: "no-cache",});`
      - 위와 같이 `process.env.NEXT_PUBLIC_A???`를 사용해서 불러옴

## 개발 시 유용한 JSON 서버 개발 방법

- 서버 연동 전 서버가 개발되어 있지 않다면 간단하게 받아오는 것이 가능하다
  - 설치방법
    - `npx json-server --port 9999 --watch db.json`
      - db.json 파일을 감시중이라 변경하면 해당 값에 맞에 반환이 가능하다.

## React Cookie

- React에서 Cookie를 다룰 수 있는 Library 이다.
- React에서 쓰던 명령어와 비슷하여 쉽게 사용이 가능하다.
- 사용 방법

  - `npm install reack-cookie` 설치
  - 예시 코드

    ```javascript
    import { useCookies } from "react-cookie";

    export default function cookie() {
      // 👉 Cookie 사용 State 선언 -- 사용될 cookie의 key값을 배열로 기본값 설정 가능
      const [cookies, setCookie, removeCookie] = useCookies(["rememberId"]);

      // 👉 cookies.?? 를 사용해서 값의 유무 체크가 가능
      function checkCookie() {
        return cookies.rememberId === undefined;
      }

      // 👉 Cookie의 사용될 값 지정
      const handleSetCookie = () => {
        // 쿠키 저장 기간 설정
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);

        setCookie(
          "Key값 지정",
          "Value 값 지정",
          // 옵션 지정
          {
            path: "/", // 사용 범위 지정
            expires: expirationDate, // 유지기간 설정 - 자유 없어도 된다.
          }
        );
      };

      // 👉 Cookie 삭제
      removeCookie("삭제하고 싶은 Key 값 지정", { path: "/" });

      return <></>;
    }
    ```
