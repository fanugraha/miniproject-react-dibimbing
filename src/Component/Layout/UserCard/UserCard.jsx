import React from "react";
import "./UserCardstyle.css";

const UserCard = (props) => {
  return (
    // Menerima data item dari props item dari parents
    <button key={props.item?.id} className="Card">
      <div className="Image">
        <img
          src={props.item?.avatar}
          alt={`Avatar ${props.item?.first_name}`}
        />
      </div>
      <div className="WrapperContent">
        <h1 className="Title-Card">First Name</h1>
        <p className="Deskripsi-Card">{props.item?.first_name}</p>
      </div>
      <div className="WrapperContent">
        <h1 className="Title-Card">Last Name</h1>
        <p className="Deskripsi-Card">{props.item?.last_name}</p>
      </div>
      <div className="WrapperContent">
        <h1 className="Title-Card">Email</h1>
        <p className="Deskripsi-Card">{props.item?.email}</p>
      </div>
    </button>
  );
};

export default UserCard;
