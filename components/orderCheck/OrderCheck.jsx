import { useState } from "react";
import styles from "./OrderCheck.module.scss";
const OrdersCheck = ({ ordersList }) => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState("");
  const [error, setError] = useState(false);
  const handleCheck = () => {
    const filteredOrder = ordersList.filter((id) => id._id === orderId);
    setOrder(filteredOrder);
    filteredOrder.length === 0 ? setError(true) : "";
  };
  const handleReset = () => {
    setOrder("");
    setOrderId("");
    setError(false);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>
            Sprawdz status <span>zlecenia</span>
          </h1>
          <p>
            W celu sprawdzenia statusu zlecenia należy wprowadzić identyfikator
            zlecenia wysłany na adres e-mail
          </p>
        </div>
        <div className={styles.bottom}>
          <input
            placeholder={"Identyfikator zlecenia"}
            type="text"
            onChange={(e) => setOrderId(e.target.value)}
          />
          <div className={styles.buttons}>
            <button onClick={handleCheck}>Sprawdź status</button>
            <button type="reset" onClick={handleReset}>
              Zresetuj
            </button>
          </div>
          {error && <h1>Nieprawidłowy identyfikator zlecenia</h1>}
        </div>
      </div>
      {order && (
        <div className={order.length === 0 ? "" : styles.orderDetails}>
          <h2>{order[0]?.title}</h2>
          <p>{order[0]?.desc}</p>
        </div>
      )}
    </>
  );
};

export default OrdersCheck;
