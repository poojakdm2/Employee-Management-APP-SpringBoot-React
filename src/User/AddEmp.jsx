import axios from "axios";
import React, { useState } from "react";

export default function AddEmp() {
  const [emp, setEmp] = useState({
    ename: "",
    empid: "",
    dept: "",
    dob: "",
    gender: "",
    email: "",
    contact: "",
    url: "",
  });

  const { ename, empid, dept, dob, gender, email, contact, url } = emp;

  const onInputChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/emp", emp);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Employee details</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Ename
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="ename"
                value={ename}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Dept
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Department"
                name="dept"
                value={dept}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                DOB
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your DOB "
                name="dob"
                value={dob}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Gender
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your gender "
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Contact
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Contact Number"
                name="contact"
                value={contact}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Photo URL
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter URL of your photo"
                name="url"
                value={url}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
