import Layout from "../Layout/Layout";
import LoginForm from "../Components/LoginForm";
import Register from "../Components/Register";
import loginStyles from "../Styles/login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const [isLoggedIn] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const login = async () => {
    const user = {
      username: username,
      password: password,
    };

    console.log("user", user);
    const url = "http://localhost:4001/login";
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(user), // body data type must match "Content-Type" header
    });
    const data = await response.json();
    if (data.status === 1) {
      // logged in correctly
      props.setLogin(data);
      let path = `/Cleaning`;
      window.location.replace(path);
      // navigate(path);
    } else {
    }
    console.log("login resp", data);
  };
  return (
    <Layout>
      <div className={loginStyles.container}>
        <img
          className={loginStyles.back}
          src="/Images/UserProfile.png"
          alt=""
        />
        <div className={loginStyles.login}>
          <h10>Log In or Sign Up Below to Start Checking off Your List!</h10>
          <div className={loginStyles.questions}>
            {!isLoggedIn && (
              <LoginForm setUsername={setUsername} setPassword={setPassword} />
            )}
            <div className={loginStyles.logbutton}>
              <button onClick={login}>Login</button>
              <div className={loginStyles.questions}>
                {!hasAccount && <Register />}
                <div className={loginStyles.signbutton}>
                  <button onClick={() => setHasAccount(!hasAccount)}>
                    Don't Have An Account? Sign Up Here!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Login;
