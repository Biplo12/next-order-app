import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Login.module.scss";
const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Login to admin panel</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Login</button>
      {error && <h3 className={styles.error}>Error occurred</h3>}
    </div>
  );
};

export default Login;
