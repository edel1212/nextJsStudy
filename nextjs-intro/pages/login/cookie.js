import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function cookie() {
  const [userid, setUserid] = useState("");

  /*============================*/

  /*====== Cookie 관련 선언======*/
  const [cookies, setCookie, removeCookie] = useCookies(["rememberId"]); //Cookies 이름
  const [isRemember, setIsRemember] = useState(false); //아이디 저장 체크박스 체크 유무

  // Cookie 체크
  useEffect(() => {
    /*저장된 쿠키값이 있으면, CheckBox TRUE 및 UserID에 값 셋팅*/
    if (cookies.rememberId === undefined) return;
    setUserid(cookies.rememberId);
    setIsRemember(true);
  }, []);

  // RememberId - Check
  const rememberIdChange = (event) => {
    const rememberFlag = event.target.checked;
    setIsRemember(rememberFlag);
    if (!rememberFlag) removeCookie("rememberId", { path: "/" });
  };

  // ID - Input
  const changeIdInput = (event) => {
    const id = event.target.value;
    setUserid(id);
  };

  // Login Event
  const login = () => {
    if (isRemember) setCookie("rememberId", userid, { path: "/" });
  };

  /*============================*/

  return (
    <>
      <label htmlFor="">Id : </label>
      <input
        type="email"
        value={userid}
        placeholder="name@domain.com "
        onChange={(e) => changeIdInput(e)}
      />
      <p>
        <label htmlFor="">RememberId : </label>
        <input
          type="checkbox"
          onChange={(e) => rememberIdChange(e)}
          checked={isRemember}
        />
      </p>

      {/*  버튼 누르면 쿠키 저장할거임!! */}
      <button onClick={(e) => login()}>저장 이벤트 발동!</button>
    </>
  );
}
