"use client";
import axios from "axios";
import React, { useState } from "react";

const Orders = () => {
  // data order
  const [order, setOrder] = useState({
    id: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    model: "",
    total: "",
  });

  const handleOrder = async (e: any) => {
    e.preventDefault();
    try {
      const respone = await axios.post("http://localhost:8080/cart", order);
      console.log("Order Submitted", respone.data);
      if(!respone){
        console.log("error ordered")
      }
      alert('Order succesfully')
      // reset order
      setOrder({
        id: "",
        name: "",
        email: "",
        address: "",
        phone: "",
        model: "",
        total: "",
      });
    } catch (error) {
      console.error("Error Submitted", error);
    }
  };

  return (
    <div className="p-24">
      <div className="bg-sky-600 rounded-3xl p-5 w-1/2">
        <form onSubmit={handleOrder} >
          <div>
            <div className="flex flex-col gap-1 w-1/2">
              <label htmlFor="name">Name</label>
            <input type="text" name="name" value={order.name} id="name" onChange={(e: any) => setOrder({...order, name: e.target.value })} />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email" 
              value={order.email}
              onChange={(e: any) => setOrder({...order, email: e.target.value })}
            />
            </div>
            <div className="flex flex-col gap-1 w-1/2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={order.address}
              onChange={(e: any) => setOrder({...order, address: e.target.value }) }
            />
              <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={order.phone}
              onChange={(e: any) => setOrder({...order, phone: e.target.value })}
            />
            </div>
            <div className="flex flex-col gap-1 w-1/2">
          <label htmlFor="model">Model</label>
            <input
              type="text"
              name="model"
              id="model"
              value={order.model}
              onChange={(e: any) => setOrder({...order, model: e.target.value })}
            />
            <label htmlFor="total">Total</label>
            <input
              type="text"
              name="total"
              id="total"
              value={order.total}
              onChange={(e: any) => setOrder({...order, total: e.target.value })}
            />
            </div>
            
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Orders;
