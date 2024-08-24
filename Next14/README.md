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
