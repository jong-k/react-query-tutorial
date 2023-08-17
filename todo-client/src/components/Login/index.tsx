import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [accountInfo, setAccountInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChangeAccountInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = accountInfo;
    if (email === "admin@hdxwill.com" && password === "qwer") {
      window.alert("로그인에 성공했습니다");
      localStorage.setItem("auth", "passed");
      navigate("/");
    } else {
      window.alert("아이디 또는 비밀번호를 재확인해주세요");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          name="email"
          id="email"
          type="text"
          value={accountInfo.email}
          onChange={handleChangeAccountInfo}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          name="password"
          id="password"
          type="text"
          value={accountInfo.password}
          onChange={handleChangeAccountInfo}
        />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}
