import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctors from '../Doctors/Doctors';
import "./Main.css"

const Main = () => {
  //get doctor data form public folder
  const [doctors, setDoctors] = useState([]);
  const [cart, setcart] = useState([])
  useEffect(() => {
    fetch("doctorsData.json")
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, [])

  //add member to cart

  const addMember = (member) => {
    if(cart.indexOf(member) !== -1){
      alert('He is already added!')
      return;
    }
    const newcart = [...cart, member]
    setcart(newcart)
  }

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="doctors">
            <div className="inner-row">
              {
                doctors.map(doctor => <Doctors
                  key={doctor.id}
                  doctor={doctor}
                  addMember={addMember}
                />)
              }
            </div>
          </div>
          <div className="selected">
            <Cart
            cart={cart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;