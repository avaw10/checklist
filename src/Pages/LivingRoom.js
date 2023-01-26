import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import livingStyles from "../Styles/livingclean.module.css";

function Livingroom() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/livingroom";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("livingroom data", data);
    setWeekOf(data.mondayDate);
    setSweepFloorBy(data.sweepFloorBy);
    setSweepFloorDate(data.sweepFloorDate);
    setMopFloorBy(data.mopFloorBy);
    setMopFloorDate(data.mopFloorDate);
    setPickUpCouchBy(data.pickUpCouchBy);
    setPickUpCouchDate(data.pickUpCouchDate);
    setWipeTablesBy(data.wipeTablesBy);
    setWipeTablesDate(data.wipeTablesDate);
    setDishesLivingBy(data.dishesLivingBy);
    setDishesLivingDate(data.dishesLivingDate);
    setOrganizeLivingBy(data.organizeLivingBy);
    setOrganizeLivingDate(data.organizeLivingDate);
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

  const [pickUpCouchBy, setPickUpCouchBy] = useState("");
  const [pickUpCouchDate, setPickUpCouchDate] = useState("");
  const pickUpCouchByChange = (e) => {
    console.log(e.target.value);
    setPickUpCouchBy(e.target.value);
  };
  const pickUpCouchDateChange = (e) => {
    console.log(e.target.value);
    setPickUpCouchDate(e.target.value);
  };

  const [wipeTablesBy, setWipeTablesBy] = useState("");
  const [wipeTablesDate, setWipeTablesDate] = useState("");
  const wipeTablesByChange = (e) => {
    console.log(e.target.value);
    setWipeTablesBy(e.target.value);
  };
  const wipeTablesDateChange = (e) => {
    console.log(e.target.value);
    setWipeTablesDate(e.target.value);
  };
  const [dishesLivingBy, setDishesLivingBy] = useState("");
  const [dishesLivingDate, setDishesLivingDate] = useState("");
  const dishesLivingByChange = (e) => {
    console.log(e.target.value);
    setDishesLivingBy(e.target.value);
  };
  const dishesLivingDateChange = (e) => {
    console.log(e.target.value);
    setDishesLivingDate(e.target.value);
  };

  const [organizeLivingBy, setOrganizeLivingBy] = useState("");
  const [organizeLivingDate, setOrganizeLivingDate] = useState("");
  const organizeLivingByChange = (e) => {
    console.log(e.target.value);
    setOrganizeLivingBy(e.target.value);
  };
  const organizeLivingDateChange = (e) => {
    console.log(e.target.value);
    setOrganizeLivingDate(e.target.value);
  };

  const submitData = async () => {
    const data = {
      mondayDate: weekOf,
      sweepFloorBy: sweepFloorBy,
      sweepFloorDate: sweepFloorDate,
      mopFloorBy: mopFloorBy,
      mopFloorDate: mopFloorDate,
      pickUpCouchBy: pickUpCouchBy,
      pickUpCouchDate: pickUpCouchDate,
      wipeTablesBy: wipeTablesBy,
      wipeTablesDate: wipeTablesDate,
      dishesLivingBy: dishesLivingBy,
      dishesLivingDate: dishesLivingDate,
      organizeLivingBy: organizeLivingBy,
      organizeLivingDate: organizeLivingDate,
    };
    console.log("Submit", data);
    const url = "http://localhost:4001/livingroom";
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
      <div className={livingStyles.container}>
        <div className={livingStyles.intro}>
          <div className={livingStyles.top}>
            <h42>Living Room Chores!</h42>
            <div className={livingStyles.under}>
              <h43>
                Check what chores are done, need to be done, who they were
                completed by, and when they were completed!
              </h43>
              <div className={livingStyles.week}>
                <h44> Week of: {weekOf} </h44>
                <div className={livingStyles.livingroom}>
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
                      <td>Pick Up Couches/Tables/Chairs</td>
                      <td>
                        <input
                          type="text"
                          value={pickUpCouchBy}
                          onChange={pickUpCouchByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={pickUpCouchDate}
                          onChange={pickUpCouchDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Wipe Down Tables</td>
                      <td>
                        <input
                          type="text"
                          value={wipeTablesBy}
                          onChange={wipeTablesByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={wipeTablesDate}
                          onChange={wipeTablesDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Pick Up and Put Away Dirty Dishes</td>
                      <td>
                        <input
                          type="text"
                          value={dishesLivingBy}
                          onChange={dishesLivingByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={dishesLivingDate}
                          onChange={dishesLivingDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Organize Living Room</td>
                      <td>
                        <input
                          type="text"
                          value={organizeLivingBy}
                          onChange={organizeLivingByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={organizeLivingDate}
                          onChange={organizeLivingDateChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button className={livingStyles.subbutton} onClick={submitData}>
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

export default Livingroom;
