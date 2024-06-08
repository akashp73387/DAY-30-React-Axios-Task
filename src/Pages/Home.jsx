import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [details, setdetails] = useState([]);

  //getting api data
  useEffect(() => {
    fetchData();
  }, []);

  //Function for getting data through axios
  const fetchData = async () => {
    await axios
      .get("https://6642ed733c01a059ea20d1e5.mockapi.io/api/task_data")
      .then((res) => setdetails(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="row row-cols-1  row-cols-md-2 py-2 pb-5 me-0 details  ">
        {details.map((element, index) => {
          return (
            <div key={index}>
              <div
                className="card card-home col-md-4 col-sm-6 py-1  "
                style={{ width: "80%", height: "90%" }}
              >
                <div className="card-header">Name : {element.name} </div>
                <div className="card-body">
                  <p className="card-text">
                    <span className=" details-name">User Name :</span>{" "}
                    {element.username} <br />
                    <span className="  details-email">Email :</span>{" "}
                    {element.email} <br />
                    <span className=" details-address ">Address :</span>{" "}
                    {element.address.street} ,<br />
                    <span className=" address ">{element.address.suite} ,</span>
                    <br />
                    <span className=" address ">{element.address.city} ,</span>
                    <br />
                    <span className=" address ">
                      {element.address.zipcode} ,
                    </span>
                    <br />
                    <span className=" details-phone ">Phone :</span>{" "}
                    {element.phone}
                    <br />
                    <span className="  details-website ">website :</span>{" "}
                    {element.website}
                    <br />
                    <span className="  details-company ">
                      Company Name :
                    </span>{" "}
                    {element.company.companyName}
                    <br />
                    <span className=" detail-com ">
                      {element.company.catchPhrase} ,
                    </span>
                    <br />
                    <span className=" detail-com ">{element.company.bs} ,</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
