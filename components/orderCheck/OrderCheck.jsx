import { useState } from "react";
import styles from "./OrderCheck.module.scss";
const OrdersCheck = ({ ordersList }) => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState("");
  const [error, setError] = useState(false);
  const handleCheck = () => {
    const filteredOrder = ordersList.filter((id) => id._id === orderId);
    setOrder(filteredOrder.lenght === 0 ? "" : filteredOrder);
    console.log(filteredOrder);
  };
  return (
    <div className={styles.container}>
      <h1>Sprawdz status zlecenia</h1>
      <p>
        W celu sprawdzenia statusu zlecenia należy wprowadzić identyfikator
        zlecenia wysłany na adres e-mail
      </p>
      <input type="text" onChange={(e) => setOrderId(e.target.value)} />
      <button onClick={handleCheck}>Sprawdź status</button>
      {error && <h1>Nieprawidłowy identyfikator zlecenia</h1>}
      <div className={styles.orderDetails}>
        <h2>{order[0]?.title}</h2>
      </div>
    </div>
  );
};

export default OrdersCheck;
