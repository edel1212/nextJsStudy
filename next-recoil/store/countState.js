// 👉 Recoil에 사용할 번수선언을 위한 Import
import { atom } from "recoil";

export const countState = atom({
  // 👉 고유 식별 Key 지정 중복되면 안된다!
  key: "count",
  default: 10,
});
