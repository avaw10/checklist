import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import outdoorsFurnStyles from "../Styles/outdoorsfurn.module.css";

function OutdoorsFurn() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/outdoorsfurn";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("outdoorsFurn data", data);
    setYearOf(data.year);
    setOutdoorsPatio(data.outdoorsPatio);
    setOutdoorsTable(data.outdoorsTable);
    setOutdoorsHammock(data.outdoorsHammock);
    setOutdoorsLawn(data.outdoorsLawn);
    console.log(data);
  };
  const [YearOf, setYearOf] = useState("");
  const [outdoorsPatio, setOutdoorsPatio] = useState("");
  const outdoorsPatioChange = (e) => {
    console.log(e.target.value);
    setOutdoorsPatio(e.target.value);
  };
  const [outdoorsTable, setOutdoorsTable] = useState("");
  const outdoorsTableChange = (e) => {
    console.log(e.target.value);
    setOutdoorsTable(e.target.value);
  };
  const [outdoorsHammock, setOutdoorsHammock] = useState("");
  const outdoorsHammockChange = (e) => {
    console.log(e.target.value);
    setOutdoorsHammock(e.target.value);
  };
  const [outdoorsLawn, setOutdoorsLawn] = useState("");
  const outdoorsLawnChange = (e) => {
    console.log(e.target.value);
    setOutdoorsLawn(e.target.value);
  };

  const submitData = async () => {
    const data = {
      year: YearOf,
      outdoorsPatio: outdoorsPatio,
      outdoorsTable: outdoorsTable,
      outdoorsHammock: outdoorsHammock,
      outdoorsLawn: outdoorsLawn,
    };

    console.log("Submit", data);
    const url = "http://localhost:4001/outdoorsFurn";
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const resp = await response.json();
    alert(resp.message);
    console.log("RESP", resp);
  };
  return (
    <Layout isLoggedIn={true}>
      <div className={outdoorsFurnStyles.container}>
        <div className={outdoorsFurnStyles.intro}>
          <div className={outdoorsFurnStyles.top}>
            <h89> Outsides Furniture!</h89>
            <div className={outdoorsFurnStyles.under}>
              <h90>Check Who's Furniture is Whose to Keep Organized</h90>
              <div className={outdoorsFurnStyles.week}>
                <h91> Year: {YearOf} </h91>
                <div className={outdoorsFurnStyles.outdoorsfurn}>
                  <table>
                    <tr>
                      <th>Item</th>
                      <th>Owner</th>
                    </tr>
                    <tr>
                      <td>Patio Furniture</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={outdoorsPatio}
                          onChange={outdoorsPatioChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Table and Chairs</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={outdoorsTable}
                          onChange={outdoorsTableChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Hammock</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={outdoorsHammock}
                          onChange={outdoorsHammockChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Lawn Mower</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={outdoorsLawn}
                          onChange={outdoorsLawnChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button
                  className={outdoorsFurnStyles.subbutton}
                  onClick={submitData}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OutdoorsFurn;
