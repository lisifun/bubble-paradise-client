import { createContext, useEffect, useState } from "react";
import axios from "axios";

import { API_URL } from "../services/API_URL";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [allOrders, setAllOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    size: "",
    sizePrice: "",
    packet: [],
    packetPrice: [],
    packetDuration: [],
    date: "",
    time: "",
  });
  const [updatedOrder, setUpdatedOrder] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL + "/orders")
      .then((response) => {
        setAllOrders(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addSize = (selectedSize) => {
    setNewOrder((prev) => ({ ...prev, size: selectedSize.name }));
    setNewOrder((prev) => ({ ...prev, sizePrice: selectedSize.price }));
  };

  const addPacket = (selectedPackage) => {
    setNewOrder((prev) => ({
      ...prev,
      packet: [...newOrder.packet, selectedPackage.name],
    }));
    setNewOrder((prev) => ({
      ...prev,
      packetPrice: [...newOrder.packetPrice, selectedPackage.price],
    }));
    setNewOrder((prev) => ({
      ...prev,
      packetDuration: [...newOrder.packetDuration, selectedPackage.duration],
    }));
  };

  const removePacket = (selectedPackage) => {
    let filterPacketNames = newOrder.packet.filter((name) => {
      return name !== selectedPackage.name;
    });
    let filterPacketPrices = newOrder.packetPrice.filter((price) => {
      return price !== selectedPackage.price;
    });
    let filterPacketDurations = newOrder.packetDuration.filter((duration) => {
      return duration !== selectedPackage.duration;
    });

    setNewOrder((prev) => ({ ...prev, packet: filterPacketNames }));
    setNewOrder((prev) => ({ ...prev, packetPrice: filterPacketPrices }));
    setNewOrder((prev) => ({ ...prev, packetDuration: filterPacketDurations }));
  };

  const addDate = (selectedDate) => {
    setNewOrder((prev) => ({ ...prev, date: selectedDate }));
  };

  const addTime = (selectedTime) => {
    setNewOrder((prev) => ({ ...prev, time: selectedTime }));
  };

  const addContact = (contactInfo) => {
    setNewOrder((prev) => ({ ...prev, ...contactInfo }));
  };

  const extractingOrder = (orderId) => {
    setUpdatedOrder(
      allOrders.filter((order) => {
        return order.id === orderId;
      })[0]
    );
  };

  const updatingOrder = (changedOrder) => {
    setUpdatedOrder((prev) => ({ ...prev, ...changedOrder }));
  };

  return (
    <OrderContext.Provider
      value={{
        allOrders,
        newOrder,
        updatedOrder,
        addSize,
        addPacket,
        removePacket,
        addDate,
        addTime,
        addContact,
        setAllOrders,
        setNewOrder,
        extractingOrder,
        updatingOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderProvider };
