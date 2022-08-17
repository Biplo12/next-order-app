import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/images/logo-big.png";
import styles from "./Login.module.scss";
const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <Image src={logo} width={"375px"} height={"125px"} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nazwa użytkownika"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Hasło"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Zaloguj się</button>
      </form>
      {error && (
        <h4 className={styles.error}>Wystąpił błąd podczas logowania</h4>
      )}
    </div>
  );
};

export default Login;
