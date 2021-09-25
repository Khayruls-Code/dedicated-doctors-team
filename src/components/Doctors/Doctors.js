import React from 'react';
import "./Doctors.css"

const Doctors = (props) => {
  const {name, img, salary, distric, time, spacial} = props.doctor;
  return (
    <div className="doctor">
      <h1>{name}</h1>
      <p className="spacial">{spacial}</p>
      <p className="time">Visit Time {time}</p>
      <p className="place">Form: {distric}</p>
      <p className="salary">Mothly Charge: ৳ <span>{salary}</span></p>
      <div className="button">
        <div className="social">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        </div>
        <button onClick={() => props.addMember(props.doctor)}>Add To Team<i className="fas fa-check"></i></button>
      </div>
      <div className="image">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Doctors;