import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import officeStyles from "../Styles/officeclean.module.css";

function Office() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/office";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("office data", data);
    setWeekOf(data.mondayDate);
    setSweepFloorBy(data.sweepFloorBy);
    setSweepFloorDate(data.sweepFloorDate);
    setMopFloorBy(data.mopFloorBy);
    setMopFloorDate(data.mopFloorDate);
    setOrganizeOfficeBy(data.organizeOfficeBy);
    setOrganizeOfficeDate(data.organizeOfficeDate);
    setDishesOfficeBy(data.dishesOfficeBy);
    setDishesOfficeDate(data.dishesOfficeDate);
    console.log(data);
  };
  const [weekOf, setWeekOf] = useState("");
  const [sweepFloorBy, setSweepFloorBy] = useState("");
  const [sweepFloorDate, setSweepFloorDate] = useState("");
  const sweepFloorByChange = (e) => {
    console.log(e.target.value);
    setSweepFloorBy(e.target.value);
  };
  const sweepFloorDateChange = (e) => {
    console.log(e.target.value);
    setSweepFloorDate(e.target.value);
  };

  const [mopFloorBy, setMopFloorBy] = useState("");
  const [mopFloorDate, setMopFloorDate] = useState("");
  const mopFloorByChange = (e) => {
    console.log(e.target.value);
    setMopFloorBy(e.target.value);
  };
  const mopFloorDateChange = (e) => {
    console.log(e.target.value);
    setMopFloorDate(e.target.value);
  };

  const [organizeOfficeBy, setOrganizeOfficeBy] = useState("");
  const [organizeOfficeDate, setOrganizeOfficeDate] = useState("");
  const organizeOfficeByChange = (e) => {
    console.log(e.target.value);
    setOrganizeOfficeBy(e.target.value);
  };
  const organizeOfficeDateChange = (e) => {
    console.log(e.target.value);
    setOrganizeOfficeDate(e.target.value);
  };

  const [dishesOfficeBy, setDishesOfficeBy] = useState("");
  const [dishesOfficeDate, setDishesOfficeDate] = useState("");
  const dishesOfficeByChange = (e) => {
    console.log(e.target.value);
    setDishesOfficeBy(e.target.value);
  };
  const dishesOfficeDateChange = (e) => {
    console.log(e.target.value);
    setDishesOfficeDate(e.target.value);
  };

  const submitData = async () => {
    const data = {
      mondayDate: weekOf,
      sweepFloorBy: sweepFloorBy,
      sweepFloorDate: sweepFloorDate,
      mopFloorBy: mopFloorBy,
      mopFloorDate: mopFloorDate,
      organizeOfficeBy: organizeOfficeBy,
      organizeOfficeDate: organizeOfficeDate,
      dishesOfficeBy: dishesOfficeBy,
      dishesOfficeDate: dishesOfficeDate,
    };

    console.log("Submit", data);
    const url = "http://localhost:4001/office";
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
      <div className={officeStyles.container}>
        <div className={officeStyles.intro}>
          <div className={officeStyles.top}>
            <h45>Office Chores!</h45>
            <div className={officeStyles.under}>
              <h46>
                Check what chores are done, need to be done, who they were
                completed by, and when they were completed!
              </h46>
              <div className={officeStyles.week}>
                <h47> Week of: {weekOf} </h47>
                <div className={officeStyles.office}>
                  <table>
                    <tr>
                      <th>Chore</th>
                      <th>Completed By</th>
                      <th>Date Completed</th>
                    </tr>
                    <tr>
                      <td>Sweep Floor</td>
                      <td>
                        <input
                          type="text"
                          value={sweepFloorBy}
                          onChange={sweepFloorByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={sweepFloorDate}
                          onChange={sweepFloorDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Mop Floor</td>
                      <td>
                        <input
                          type="text"
                          value={mopFloorBy}
                          onChange={mopFloorByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={mopFloorDate}
                          onChange={mopFloorDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Organize Office</td>
                      <td>
                        <input
                          type="text"
                          value={organizeOfficeBy}
                          onChange={organizeOfficeByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={organizeOfficeDate}
                          onChange={organizeOfficeDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Pick Up and Put Away Dirty Dishes</td>
                      <td>
                        <input
                          type="text"
                          value={dishesOfficeBy}
                          onChange={dishesOfficeByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={dishesOfficeDate}
                          onChange={dishesOfficeDateChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button className={officeStyles.subbutton} onClick={submitData}>
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

export default Office;
