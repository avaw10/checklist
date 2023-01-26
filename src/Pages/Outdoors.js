import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import outdoorsStyles from "../Styles/outdoorsclean.module.css";

function Outdoors() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/outdoors";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("outdoors data", data);
    setWeekOf(data.mondayDate);
    setPickYardBy(data.pickYardBy);
    setPickYardDate(data.pickYardDate);
    setPickDumpsterBy(data.pickDumpsterBy);
    setPickDumpsterDate(data.pickDumpsterDate);
    setCleanGarageBy(data.cleanGarageBy);
    setCleanGarageDate(data.cleanGarageDate);
    setCleanPorchBy(data.cleanPorchBy);
    setCleanPorchDate(data.cleanPorchDate);
    console.log(data);
  };
  const [weekOf, setWeekOf] = useState("");
  const [pickYardBy, setPickYardBy] = useState("");
  const [pickYardDate, setPickYardDate] = useState("");
  const pickYardByChange = (e) => {
    console.log(e.target.value);
    setPickYardBy(e.target.value);
  };
  const pickYardDateChange = (e) => {
    console.log(e.target.value);
    setPickYardDate(e.target.value);
  };

  const [pickDumpsterBy, setPickDumpsterBy] = useState("");
  const [pickDumpsterDate, setPickDumpsterDate] = useState("");
  const pickDumpsterByChange = (e) => {
    console.log(e.target.value);
    setPickDumpsterBy(e.target.value);
  };
  const pickDumpsterDateChange = (e) => {
    console.log(e.target.value);
    setPickDumpsterDate(e.target.value);
  };

  const [cleanGarageBy, setCleanGarageBy] = useState("");
  const [cleanGarageDate, setCleanGarageDate] = useState("");
  const cleanGarageByChange = (e) => {
    console.log(e.target.value);
    setCleanGarageBy(e.target.value);
  };
  const cleanGarageDateChange = (e) => {
    console.log(e.target.value);
    setCleanGarageDate(e.target.value);
  };

  const [cleanPorchBy, setCleanPorchBy] = useState("");
  const [cleanPorchDate, setCleanPorchDate] = useState("");
  const cleanPorchByChange = (e) => {
    console.log(e.target.value);
    setCleanPorchBy(e.target.value);
  };
  const cleanPorchDateChange = (e) => {
    console.log(e.target.value);
    setCleanPorchDate(e.target.value);
  };

  const submitData = async () => {
    const data = {
      mondayDate: weekOf,
      pickYardBy: pickYardBy,
      pickYardDate: pickYardDate,
      pickDumpsterBy: pickDumpsterBy,
      pickDumpsterDate: pickDumpsterDate,
      cleanGarageBy: cleanGarageBy,
      cleanGarageDate: cleanGarageDate,
      cleanPorchBy: cleanPorchBy,
      cleanPorchDate: cleanPorchDate,
    };

    console.log("Submit", data);
    const url = "http://localhost:4001/outdoors";
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
      <div className={outdoorsStyles.container}>
        <div className={outdoorsStyles.intro}>
          <div className={outdoorsStyles.top}>
            <h60>Outsides's Chores!</h60>
            <div className={outdoorsStyles.under}>
              <h61>
                Check what chores are done, need to be done, who they were
                completed by, and when they were completed!
              </h61>
              <div className={outdoorsStyles.week}>
                <h62> Week of: {weekOf} </h62>
                <div className={outdoorsStyles.outdoors}>
                  <table>
                    <tr>
                      <th>Chore</th>
                      <th>Completed By</th>
                      <th>Date Completed</th>
                    </tr>
                    <tr>
                      <td>Pick Up Yards</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={pickYardBy}
                          onChange={pickYardByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={pickYardDate}
                          onChange={pickYardDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Pick Up Dumpster Area</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={pickDumpsterBy}
                          onChange={pickDumpsterByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={pickDumpsterDate}
                          onChange={pickDumpsterDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Clean and Organize Garage</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={cleanGarageBy}
                          onChange={cleanGarageByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={cleanGarageDate}
                          onChange={cleanGarageDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Pick Up Porches/Patios</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={cleanPorchBy}
                          onChange={cleanPorchByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={cleanPorchDate}
                          onChange={cleanPorchDateChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button
                  className={outdoorsStyles.subbutton}
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

export default Outdoors;
