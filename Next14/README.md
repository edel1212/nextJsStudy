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
