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