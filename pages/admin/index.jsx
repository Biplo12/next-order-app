import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const Index = ({ orders }) => {
  const [ordersList, setOrdersList] = useState(orders);

  return (
    <div>
      {ordersList.map((order) => (
        <ul key={order._id}>
          <li>{order.title}</li>
        </ul>
      ))}
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  const orderRes = await axios.get(
    "https://next-order-app-biplo12.vercel.app:3000/api/orders"
  );
  return {
    props: {
      orders: orderRes.data,
    },
  };
};
export default Index;
