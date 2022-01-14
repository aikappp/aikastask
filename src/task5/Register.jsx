import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

const Register = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [refpassword, setRefPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  function login(ev) {
    ev.preventDefault();
    if (password === refpassword) {
      setIsLogin(true);
    } else {
      alert("Пароли не совпадают");
    }
  }

  function logout() {
    setIsLogin(false);
    setMail("");
    setPassword("");
    setRefPassword("");
  }

  return (
    <div>
      {isLogin && (
        <div>
          <h1>{mail}</h1>
          <Button onClick={logout}>Exit</Button>
        </div>
      )}
      {!isLogin && (
        <form onSubmit={login}>
          <input
            onChange={(ev) => setMail(ev.target.value)}
            placeholder="Введите email"
            required
            type="email"
          />
          <input
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="Введите пароль"
            required
            type="password"
          />
          <input
            onChange={(ev) => setRefPassword(ev.target.value)}
            placeholder="Повторите пароль"
            required
            type="password"
          />
          <Button type="submit">Войти</Button>
        </form>
      )}
    </div>
  );
};

export default Register;
