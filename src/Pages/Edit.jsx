import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Edit.css";

const Edit = ({ id }) => {
  //for navigating
  const navigate = useNavigate();

  //setting initial value to empty
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  //Rendering data from api
  useEffect(() => {
    fetchData();
  }, []);

  //Funtion to get data from the api through axios
  const fetchData = async () => {
    await axios
      .get(`https://6642ed733c01a059ea20d1e5.mockapi.io/api/task_data/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  };

  //Function to update to the user data
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setEditData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setEditData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  //Function to handle sunmit through the submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://6642ed733c01a059ea20d1e5.mockapi.io/api/task_data/${id}`,
        editData
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    alert("Data Edited successfully");
    //After updating navigating the user to the dashboard
    navigate("/details");
  };
  const handleRest = (e) => {
    e.target.value.remove();
  };
  return (
    <div className="container text-center mt-3">
      <div className="row">
        <div className="col">
          <div className="card mb-4 col-12 card-edit">
            <div className="card-header text-uppercase text-center fs-3 fw-bolder">
              Currently Editing the Details of User - {editData.name}
            </div>
            <div className="card-body">
              <form>
                <div className="row fs-5 fw-bolder ">
                  <div className="mb-3 row col-md-4 col-sm-12 col-12 ms-2">
                    <label className="small mb-1" htmlFor="id">
                      User ID
                    </label>
                    <input
                      className="form-control col-12"
                      id="id"
                      placeholder="Enter your user ID"
                      type="text"
                      name="id"
                      value={editData.id}
                      onChange={handleChange}
                    />
                  </div>
                  <div className=" col-12 col-md-4 col-sm-12 ">
                    <label className="small mb-1 " htmlFor="username">
                      User Name
                    </label>
                    <input
                      className="form-control  col-12"
                      id="username"
                      placeholder="Enter your user name"
                      type="text"
                      name="username"
                      value={editData.username}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mb-3 fs-5 fw-bolder">
                  <div className="col-md-6 col-sm-12 col-12 ">
                    <label className="small mb-1 " htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control  col-12"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      value={editData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className=" col-12 col-md-6 col-sm-12  ">
                    <label className="small mb-1 " htmlFor="useremail">
                      User Email{" "}
                    </label>
                    <input
                      className="form-control  col-12"
                      type="text"
                      name="email"
                      id="useremail"
                      placeholder="Enter your email"
                      value={editData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mb-3 fs-5 fw-bolder">
                  <div className=" col-12 col-md-3 col-sm-12  ">
                    <label className="small mb-1 " htmlFor="street">
                      User address Street{" "}
                    </label>
                    <input
                      id="street"
                      className="form-control  col-12"
                      placeholder="Enter your street name"
                      type="text"
                      name="address.street"
                      value={editData.address.street}
                      onChange={handleChange}
                    />
                  </div>

                  <div className=" col-12 col-md-3 col-sm-12  ">
                    <label className="small mb-1" htmlFor="suite">
                      User address Suite
                    </label>
                    <input
                      className="form-control  col-12"
                      type="text"
                      id="suite"
                      placeholder="Enter your suite"
                      name="address.suite"
                      value={editData.address.suite}
                      onChange={handleChange}
                    />
                  </div>

                  <div className=" col-12 col-md-3 col-sm-12  ">
                    <label className="small mb-1" htmlFor="city">
                      User address City
                    </label>
                    <input
                      className="form-control  col-12"
                      type="text"
                      id="city"
                      placeholder="Enter your city name"
                      name="address.city"
                      value={editData.address.city}
                      onChange={handleChange}
                    />
                  </div>

                  <div className=" col-12 col-md-3 col-sm-12  ">
                    <label className="small mb-1" htmlFor="zipcode">
                      User address Zipcode:
                    </label>
                    <input
                      className="form-control  col-12"
                      type="text"
                      placeholder="Enter your city name"
                      id="zipcode"
                      name="address.zipcode"
                      value={editData.address.zipcode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mb-3 fs-5 fw-bolder">
                  <div className=" col-12 col-md-5 col-sm-12  ">
                    <label className="small mb-1" htmlFor="phone">
                      User Phone{" "}
                    </label>
                    <input
                      className="form-control  col-12"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone number"
                      value={editData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className=" col-12 col-md-5 col-sm-12 ">
                    <label className="small mb-1" htmlFor="website">
                      Website{" "}
                    </label>
                    <input
                      className="form-control  col-12"
                      type="text"
                      id="webiste"
                      placeholder="Enter your website name"
                      name="website"
                      value={editData.website}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mb-3 fs-5 fw-bolder">
                  <div className=" col-12 col-md-6 col-sm-12 ">
                    <label className="small mb-1" htmlFor="companyname">
                      Company Name{" "}
                    </label>
                    <input
                      className="form-control  col-12"
                      type="text"
                      id="companyname"
                      placeholder="Enter your company's name"
                      name="company.companyName"
                      value={editData.company.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className=" col-12 col-md-6 col-sm-12  ">
                    <label className="small mb-1" htmlFor="catchphrase">
                      Company Catch Phrase :
                    </label>
                    <input
                      className="form-control  col-12"
                      type="text"
                      id="catchphrase"
                      placeholder="Enter your company's catch phrase"
                      name="company.catchPhrase"
                      value={editData.company.catchPhrase}
                      onChange={handleChange}
                    />
                  </div>

                  <div className=" col-12 col-md-6 col-sm-12  ">
                    <label className="small mb-1" htmlFor="bs">
                      Company Bussiness Stratergy :
                    </label>
                    <input
                      className="form-control  col-12"
                      type="text"
                      id="bs"
                      placeholder="Enter your company's bussiness stratergy"
                      name="company.bs"
                      value={editData.company.bs}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mb-2 d-flex justify-content-center ">
                  <button
                    className="btn btn-success col-md-2 col-sm-2 col-5 m-2"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    <i class="fa-sharp fa-solid fa-user-pen"></i> Update
                  </button>
                  <button
                    className="btn btn-danger col-md-2 col-sm-2 col-5 m-2"
                    onClick={handleRest}
                  >
                    <i class="fa-sharp fa-solid fa-eraser"></i> Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
