// import Register from './Register';
import { useState } from "react";
function LoginForm(props) {
  return (
    <form>
      <label for="username">Username</label>
      <input
        type="username"
        placeholder="Enter Username"
        onChange={(e) => {
          props.setUsername(e.target.value);
        }}
      />
      <label for="password">Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => {
          props.setPassword(e.target.value);
        }}
      />
    </form>
  );
}

export default LoginForm;
