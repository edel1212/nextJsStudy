# Next.Js 14 Version

```properties
# ✨ 이전 버전을 14버전으로 업데이트 한다고해서 실행이 안되거나 하지 않는다.
#  - 이전 버전에 사용했던 `pages router` 방식은 그대로 사용 가능하기 때문
#  - NextJs 14는 두가지 Roter 방식을 지원함  (13부터 지원하긴 했었다 - 권장하기도 했었음)
#   ㄴ> Pages router , App routers
#  - 원한다면 두가지 라우팅 방식을 혼합해서 사용 또한 가능하다.
# ✍️ 주의사항으로는 한번에 버전을 올리고 마이그레이션 할 필요가 없다
#   ㄴ> 기존의 Page Router 방식을 사용해 가면서 하나씩 App Rotuer 방식으로 수정해 나가자
```

## 14이전 버전과 차이

- `Data fetching` 방식이 크게 변화 하였다.
  - `getStaticProps`, `getServerSideProps`, `getStatigPaht`와 같은 방식들이 사라졌다
- `App Rotuer`를 사용해야지만 사용할 수 있는 최신 기능을 사용할 수 있다

## APP Router 사용 방법

```properties
# ℹ️ Page Router 방식과 비교
# - 페이지는 파일 이름 기반으로 경로와 연결된다.
#   ㄴ> ✏️ URL : https://domain/about-us
#      ㄴ> 디렉토리 구조 : app/pages/about-us/index.js
#
#   ㄴ> ✏️ URL :  https://domain/about-us/list
#      ㄴ> 디렉토리 구조 :  app/pages/about-us/list.js
```

- 디렉토리 생성 후 `page.tsx or js`를 생성 후 export default function 해주면 된다.

  - ✨ 중요 포인트는 `paht`가 되는 디렉토리 내 파일의 명은 `page.?`로 파일명이 고정이라는 것이다.

  ![Alt text](image.png)

- 하위 `Path`가 있는 URL을 구성하고 싶을 경우

  - 폴더를 원하는 Path 구조로 만든 후 `page.?`파일을 생성해 주면 된다.

    ![Alt text](image-1.png)

## 404 페이지 처리

- `not-found.?` 형태로 파일을 만들어주면 된다.

  - 예약된 파일명으로 NextJs가 자동으로 해당 파일을 확인하여 읽어 404처리를 해준다.

  ![Alt text](image-2.png)

## SSR vs CSR

```properties
# 💬 Rendering이란?
# - Javascript Function을 가져와서 브라우저가 이해할 수 있는 HTML로 반환하는 과정을 말한다.
```

- `CSR(Client Side Rendering)`
  - 모든 UI구축이 Client에서 javasript를 로드 후 해당 script를 통해 이뤄지는 방식
    - 따라서 Javascrip를 불러올 때까지 화면이 그려지지 않는다.
    - NextJs14에서 App Router 방식으로 `usePathname();`를 사용하려 하면 에러가 발생하는 이유이기도 하다.
- `SSR(Server Side Rendering)`
  - UI 자체가 Server(Back-end)에서 생성 후 HTML로 반환해주는 방식
    - 모든 컴포넌트오 페이지들은 먼저 Back-End에서 Render 된다.
  - NextJs14에서는 기본적(Default)으로 해당 방법으로 랜더링을 진행한다.
  - ✨ `"use client"`를 사용하면 랜더링 방식이 CSR로 바뀌는것이 아니다.
    - 번들러는 해당 모듈 임포트를 서버 코드와 클라이언트 코드 간의 바운더리로 처리한다.
    - 컴포넌트 모듈이 'use client' 지시문을 포함하면 해당 컴포넌트는 클라이언트 컴포넌트임이 보장된다.
    - `SSR`에서 랜더링 된 적정 HTML이 Client에서 `Hydration`이 필요한 컴포넌트라고 알려주는 작업이다.
      - 좀 더 쉽게 이해하자면 명령어 자체가 `"use hydration"`라고하면 더 직관적이였을 것이다.
        - NextJs에서 컴포넌트 별로 어떤것이 정적인 컴포넌트인지 Interactive한 컴포넌트인지 알려주는 것이라 생각하자

## Hydration

```properties
# 💬 쉽게 설명하자면 SSR로 받아온 정적인 HTML을 초기에 보여준 이후 React Application으로 초기화 하는 작업이다.
#   - 정적 HTML를 보여준 후 그위에 사용자는 알 수 없게 인터렉티브한 React로 덮어 씌운다고 생각해도 좋다
#   - Hydration의 사전적 뜻은 수분 공급이다. 이와같이 정적인 HTML을 보여준 후 사용자 및 SEO에 최적화 한 이 후 React로 변환 해주는 것
#     ㄴ> 초기 화면도 보여주면서 Interaction(상호작용)까지 올라가는 효과가 있다.
```

- 흐름
  - Javascript 미 로딩 (Hydration 사용 불가능 경우)
    - 메인화면 요청 -> SSR 정적인 화면 표출 -> Javascript가 아직 로딩 되지 않은 상태 -> `a href` 클릭 -> 화면 깜빡이며 이동
  - Hydration 사용가능
    - 메인화면 요청 -> SSR 정적인 화면 표출 후 `Hydration 시작` -> `a href` 클릭 -> 컴포넌트로 만들어진 화면 이동 **깜빡임 X**
- 추가
  - `useState()`를 사용해서 카운트를 올리는 테스트 시에도 화면에 버튼과 카운트는 보이지만 Javascript 미 로딩 시 **이벤트는 미작동 ㄴ함**
