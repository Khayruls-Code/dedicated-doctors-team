import React from 'react';
import "./Cart.css"

const Cart = (props) => {
  let salary = 0;
  let nameArr = [];
  for(let singleMember of props.cart){
    salary = salary + singleMember.salary
    nameArr.push(singleMember.name)
  }
  return (
    <div className="cart">
      <h2>Total Added Member: <span className="count">{props.cart.length}</span></h2>
      <h2>Total Cost: <span>৳{salary}</span></h2>
      <ul>
        {
          nameArr.map(name => <li key={name + (Math.random() * 10000)}>{name}</li>)
        }
      </ul>
    </div>
  );
};
export default Cart;