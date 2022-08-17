import { useState, useRef, useEffect } from "react";
import styles from "./OrderCheck.module.scss";
const OrdersCheck = ({ ordersList }) => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  let myRef = useRef();

  const handleUserInput = (e) => {
    e.preventDefault();
    setOrderId(e.target.value);
    setValue(e.target.value);
  };

  const handleCheck = (e) => {
    e.preventDefault();
    const filteredOrder = ordersList.filter((id) => id._id === orderId);
    setOrder(filteredOrder);
    setError(filteredOrder.length === 0 ? true : false);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setOrder("");
    setValue("");
    setOrderId("");
    setError(false);
  };

  useEffect(() => {
    if (order.length != 0) {
      myRef.current.scrollIntoView();
    }
  }, [order]);

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
          <form onSubmit={handleCheck}>
            <input
              placeholder={"Identyfikator zlecenia"}
              type="text"
              value={value}
              onChange={handleUserInput}
            />
            <div className={styles.buttons}>
              <button type="submit" onClick={handleCheck}>
                Sprawdź status
              </button>
              <button type="reset" onClick={handleReset}>
                Zresetuj
              </button>
            </div>
          </form>
          {!order && (
            <div className={styles.example}>
              <p>Przykładowy identyfikator: 62ec06988c8f19392f0e047e</p>
            </div>
          )}
          {error && (
            <>
              <h4 className={styles.error}>
                Nieprawidłowy identyfikator zlecenia
              </h4>
              <div className={styles.example}>
                <p>Przykładowy identyfikator: 62ec06988c8f19392f0e047e</p>
              </div>
            </>
          )}
        </div>
      </div>
      {order && (
        <div
          ref={myRef}
          className={order.length === 0 ? "" : styles.orderDetails}
        >
          <h1>{order[0]?.status}</h1>
          <h2>{order[0]?.title}</h2>
          <p>{order[0]?.desc}</p>
        </div>
      )}
    </>
  );
};

export default OrdersCheck;
