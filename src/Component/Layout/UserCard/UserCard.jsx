import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserCardstyle.css";

const UserCard = () => {
  // State untuk menyimpan data pengguna
  const [users, setUsers] = useState([]);

  // Get Data API
  const getData = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        // Simpan data ke dalam state users
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log("Gagal", err);
      });
  };

  // Mounting
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="WrapperCard">
      {users.map((item, index) => (
        <button key={index} className="Card">
          <div className="Image">
            <img src={item?.avatar} alt={`Avatar ${item?.first_name}`} />
          </div>
          <div className="WrapperContent">
            <h1 className="Title-Card">First Name</h1>
            <p className="Deskripsi-Card">{item?.first_name}</p>
          </div>
          <div className="WrapperContent">
            <h1 className="Title-Card">Last Name</h1>
            <p className="Deskripsi-Card">{item?.last_name}</p>
          </div>
          <div className="WrapperContent">
            <h1 className="Title-Card">Email</h1>
            <p className="Deskripsi-Card">{item?.email}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default UserCard;
