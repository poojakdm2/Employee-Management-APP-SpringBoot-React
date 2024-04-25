import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [emps, setemps] = useState([]);

  useEffect(() => {
    loadEmp();
  }, []);

  const loadEmp = async () => {
    const result = await axios.get("http://localhost:8080/emps");
    setemps(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow border-3">
          <thead>
            <tr>
              <th scope="col">SR.NO</th>
              <th scope="col">Image</th>
              <th scope="col">EName</th>
              <th scope="col">EmpId</th>
              <th scope="col">Dept</th>
              <th scope="col">DOB</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {emps.map((emp, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>
                  <img src={emp.url} alt="" height={170} width={160} />
                </td>
                <td>{emp.ename}</td>
                <td>{emp.empid}</td>
                <td>{emp.dept}</td>
                <td>{emp.dob}</td>
                <td>{emp.gender}</td>
                <td>{emp.email}</td>
                <td>{emp.contact}</td>

                {/* <button className="btn btn-primary m-3">View</button>
                <button className="btn btn-secondary mx-2 ">Edit </button>
                <button className="btn btn-danger mx-2 ">Delete</button> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
