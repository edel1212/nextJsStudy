import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function cookie() {
  const [userid, setUserid] = useState("");

  /*============================*/

  /*====== Cookie 관련 선언======*/
  const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]); //Cookies 이름
  const [isRemember, setIsRemember] = useState(false); //아이디 저장 체크박스 체크 유무

  /*페이지가 최초 렌더링 될 경우*/
  useEffect(() => {
    /*저장된 쿠키값이 있으면, CheckBox TRUE 및 UserID에 값 셋팅*/
    if (cookies.rememberUserId !== undefined) {
      setUserid(cookies.rememberUserId);
      setIsRemember(true);
    }
  }, []);

  const handleOnChange = (e) => {
    setIsRemember(e.target.checked);
    if (!e.target.checked) {
      removeCookie("rememberUserId");
    }
  };

  /*============================*/

  return (
    <>
      <h4>User ID</h4>
      <input
        type="email"
        value={userid}
        placeholder="name@domain.com "
        onChange={(e) => {
          setUserid(e.target.value);
        }}
      />
      <p>
        아이기 기억 :{" "}
        <input
          type="checkbox"
          onChange={(e) => {
            handleOnChange(e);
          }}
          checked={isRemember}
        />
      </p>

      {/*  버튼 누르면 쿠키 저장할거임!! */}
      <button
        onClick={(e) =>
          setCookie("rememberUserId", "edel1212@naver.com", { path: "/" })
        }
      >
        저장 이벤트 발동!
      </button>
    </>
  );
}
