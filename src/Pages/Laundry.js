import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import laundryStyles from "../Styles/laundryclean.module.css";

function Laundry() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/laundry";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("laundry data", data);
    setWeekOf(data.mondayDate);
    setSweepFloorBy(data.sweepFloorBy);
    setSweepFloorDate(data.sweepFloorDate);
    setMopFloorBy(data.mopFloorBy);
    setMopFloorDate(data.mopFloorDate);
    setRestockLaunBy(data.restockLaunBy);
    setRestockLaunDate(data.restockLaunDate);
    setPickUpLaunBy(data.pickUpLaunBy);
    setPickUpLaunDate(data.pickUpLaunDate);
    setOrganizeLaunBy(data.organizeLaunBy);
    setOrganizeLaunDate(data.organizeLaunDate);
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

  const [restockLaunBy, setRestockLaunBy] = useState("");
  const [restockLaunDate, setRestockLaunDate] = useState("");
  const restockLaunByChange = (e) => {
    console.log(e.target.value);
    setRestockLaunBy(e.target.value);
  };
  const restockLaunDateChange = (e) => {
    console.log(e.target.value);
    setRestockLaunDate(e.target.value);
  };

  const [pickUpLaunBy, setPickUpLaunBy] = useState("");
  const [pickUpLaunDate, setPickUpLaunDate] = useState("");
  const pickUpLaunByChange = (e) => {
    console.log(e.target.value);
    setPickUpLaunBy(e.target.value);
  };
  const pickUpLaunDateChange = (e) => {
    console.log(e.target.value);
    setPickUpLaunDate(e.target.value);
  };

  const [organizeLaunBy, setOrganizeLaunBy] = useState("");
  const [organizeLaunDate, setOrganizeLaunDate] = useState("");
  const organizeLaunByChange = (e) => {
    console.log(e.target.value);
    setOrganizeLaunBy(e.target.value);
  };
  const organizeLaunDateChange = (e) => {
    console.log(e.target.value);
    setOrganizeLaunDate(e.target.value);
  };

  const submitData = async () => {
    const data = {
      mondayDate: weekOf,
      sweepFloorBy: sweepFloorBy,
      sweepFloorDate: sweepFloorDate,
      mopFloorBy: mopFloorBy,
      mopFloorDate: mopFloorDate,
      restockLaunBy: restockLaunBy,
      restockLaunDate: restockLaunDate,
      pickUpLaunBy: pickUpLaunBy,
      pickUpLaunDate: pickUpLaunDate,
      organizeLaunBy: organizeLaunBy,
      organizeLaunDate: organizeLaunDate,
    };

    console.log("Submit", data);
    const url = "http://localhost:4001/laundry";
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
      <div className={laundryStyles.container}>
        <div className={laundryStyles.intro}>
          <div className={laundryStyles.top}>
            <h48>Laundry Room Chores!</h48>
            <div className={laundryStyles.under}>
              <h49>
                Check what chores are done, need to be done, who they were
                completed by, and when they were completed!
              </h49>
              <div className={laundryStyles.week}>
                <h50> Week of: {weekOf} </h50>
                <div className={laundryStyles.laundry}>
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
                      <td>Restock Laundry Supplies</td>
                      <td>
                        <input
                          type="text"
                          value={restockLaunBy}
                          onChange={restockLaunByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={restockLaunDate}
                          onChange={restockLaunDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Pick Up Clothes</td>
                      <td>
                        <input
                          type="text"
                          value={pickUpLaunBy}
                          onChange={pickUpLaunByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={pickUpLaunDate}
                          onChange={pickUpLaunDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Organize Laundry Room</td>
                      <td>
                        <input
                          type="text"
                          value={organizeLaunBy}
                          onChange={organizeLaunByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={organizeLaunDate}
                          onChange={organizeLaunDateChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button
                  className={laundryStyles.subbutton}
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

export default Laundry;
