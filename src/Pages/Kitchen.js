import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import kitchenStyles from "../Styles/kitchenclean.module.css";

function Kitchen() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/kitchen";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("kitchen data", data);
    setWeekOf(data.mondayDate);
    setSweepFloorBy(data.sweepFloorBy);
    setSweepFloorDate(data.sweepFloorDate);
    setMopFloorBy(data.mopFloorBy);
    setMopFloorDate(data.mopFloorDate);
    setUnloadDishBy(data.unloadDishBy);
    setUnloadDishDate(data.unloadDishDate);
    setWashDishBy(data.washDishBy);
    setWashDishDate(data.washDishDate);
    setWipeTableBy(data.wipeTableBy);
    setWipeTableDate(data.wipeTableDate);
    setTakeTrashBy(data.takeTrashBy);
    setTakeTrashDate(data.takeTrashDate);
    setTakeRecyclingBy(data.takeRecyclingBy);
    setTakeRecyclingDate(data.takeRecyclingDate);
    console.log(data);
  };

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
  const [weekOf, setWeekOf] = useState("");
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

  const [unloadDishBy, setUnloadDishBy] = useState("");
  const [unloadDishDate, setUnloadDishDate] = useState("");
  const unloadDishByChange = (e) => {
    console.log(e.target.value);
    setUnloadDishBy(e.target.value);
  };
  const unloadDishDateChange = (e) => {
    console.log(e.target.value);
    setUnloadDishDate(e.target.value);
  };

  const [washDishBy, setWashDishBy] = useState("");
  const [washDishDate, setWashDishDate] = useState("");
  const washDishByChange = (e) => {
    console.log(e.target.value);
    setWashDishBy(e.target.value);
  };
  const washDishDateChange = (e) => {
    console.log(e.target.value);
    setWashDishDate(e.target.value);
  };

  const [wipeTableBy, setWipeTableBy] = useState("");
  const [wipeTableDate, setWipeTableDate] = useState("");
  const wipeTableByChange = (e) => {
    console.log(e.target.value);
    setWipeTableBy(e.target.value);
  };
  const wipeTableDateChange = (e) => {
    console.log(e.target.value);
    setWipeTableDate(e.target.value);
  };

  const [takeTrashBy, setTakeTrashBy] = useState("");
  const [takeTrashDate, setTakeTrashDate] = useState("");
  const takeTrashByChange = (e) => {
    console.log(e.target.value);
    setTakeTrashBy(e.target.value);
  };
  const takeTrashDateChange = (e) => {
    console.log(e.target.value);
    setTakeTrashDate(e.target.value);
  };

  const [takeRecyclingBy, setTakeRecyclingBy] = useState("");
  const [takeRecyclingDate, setTakeRecyclingDate] = useState("");
  const takeRecyclingByChange = (e) => {
    console.log(e.target.value);
    setTakeRecyclingBy(e.target.value);
  };
  const takeRecyclingDateChange = (e) => {
    console.log(e.target.value);
    setTakeRecyclingDate(e.target.value);
  };

  const submitData = async () => {
    const data = {
      mondayDate: weekOf,
      sweepFloorBy: sweepFloorBy,
      sweepFloorDate: sweepFloorDate,
      mopFloorBy: mopFloorBy,
      mopFloorDate: mopFloorDate,
      unloadDishBy: unloadDishBy,
      unloadDishDate: unloadDishDate,
      washDishBy: washDishBy,
      washDishDate: washDishDate,
      wipeTableBy: wipeTableBy,
      wipeTableDate: wipeTableDate,
      takeTrashBy: takeTrashBy,
      takeTrashDate: takeTrashDate,
      takeRecyclingBy: takeRecyclingBy,
      takeRecyclingDate: takeRecyclingDate,
    };
    console.log("Submit", data);
    const url = "http://localhost:4001/kitchen";
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
      <div className={kitchenStyles.container}>
        <div className={kitchenStyles.intro}>
          <div className={kitchenStyles.top}>
            <h39>Kitchen Chores!</h39>
            <div className={kitchenStyles.under}>
              <h40>
                Check what chores are done, need to be done, who they were
                completed by, and when they were completed!
              </h40>
              <div className={kitchenStyles.week}>
                <h41> Week of: {weekOf} </h41>
                <div className={kitchenStyles.kitchen}>
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
                      <td>Unload Dishwasher</td>
                      <td>
                        <input
                          type="text"
                          value={unloadDishBy}
                          onChange={unloadDishByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={unloadDishDate}
                          onChange={unloadDishDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Wash Dishes</td>
                      <td>
                        <input
                          type="text"
                          value={washDishBy}
                          onChange={washDishByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={washDishDate}
                          onChange={washDishDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Wipe Down Counters and Tables</td>
                      <td>
                        <input
                          type="text"
                          value={wipeTableBy}
                          onChange={wipeTableByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={wipeTableDate}
                          onChange={wipeTableDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Take Out Trash</td>
                      <td>
                        <input
                          type="text"
                          value={takeTrashBy}
                          onChange={takeTrashByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={takeTrashDate}
                          onChange={takeTrashDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Take Out Recycling</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={takeRecyclingBy}
                          onChange={takeRecyclingByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={takeRecyclingDate}
                          onChange={takeRecyclingDateChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button
                  className={kitchenStyles.subbutton}
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

export default Kitchen;
