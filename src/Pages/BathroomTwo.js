import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import bathTwoStyles from "../Styles/bathtwoclean.module.css";

function BathTwo() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/bathroomTwo";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("bathroomTwo data", data);
    setWeekOf(data.mondayDate);
    setSweepFloorBy(data.sweepFloorBy);
    setSweepFloorDate(data.sweepFloorDate);
    setMopFloorBy(data.mopFloorBy);
    setMopFloorDate(data.mopFloorDate);
    setCleanSinkBy(data.cleanSinkBy);
    setCleanSinkDate(data.cleanSinkDate);
    setCleanMirrorsBy(data.cleanMirrorsBy);
    setCleanMirrorsDate(data.cleanMirrorsDate);
    setCleanTubBy(data.cleanTubBy);
    setCleanTubDate(data.cleanTubDate);
    setCleanToiletBy(data.cleanToiletBy);
    setCleanToiletDate(data.cleanToiletDate);
    setStockBathBy(data.stockBathBy);
    setStockBathDate(data.stockBathDate);
    setTrashOutBy(data.trashOutBy);
    setTrashOutDate(data.trashOutDate);
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

  const [cleanSinkBy, setCleanSinkBy] = useState("");
  const [cleanSinkDate, setCleanSinkDate] = useState("");
  const cleanSinkByChange = (e) => {
    console.log(e.target.value);
    setCleanSinkBy(e.target.value);
  };
  const cleanSinkDateChange = (e) => {
    console.log(e.target.value);
    setCleanSinkDate(e.target.value);
  };

  const [cleanMirrorsBy, setCleanMirrorsBy] = useState("");
  const [cleanMirrorsDate, setCleanMirrorsDate] = useState("");
  const cleanMirrorsByChange = (e) => {
    console.log(e.target.value);
    setCleanMirrorsBy(e.target.value);
  };
  const cleanMirrorsDateChange = (e) => {
    console.log(e.target.value);
    setCleanMirrorsDate(e.target.value);
  };

  const [cleanTubBy, setCleanTubBy] = useState("");
  const [cleanTubDate, setCleanTubDate] = useState("");
  const cleanTubByChange = (e) => {
    console.log(e.target.value);
    setCleanTubBy(e.target.value);
  };
  const cleanTubDateChange = (e) => {
    console.log(e.target.value);
    setCleanTubDate(e.target.value);
  };
  const [cleanToiletBy, setCleanToiletBy] = useState("");
  const [cleanToiletDate, setCleanToiletDate] = useState("");
  const cleanToiletByChange = (e) => {
    console.log(e.target.value);
    setCleanToiletBy(e.target.value);
  };
  const cleanToiletDateChange = (e) => {
    console.log(e.target.value);
    setCleanToiletDate(e.target.value);
  };

  const [stockBathBy, setStockBathBy] = useState("");
  const [stockBathDate, setStockBathDate] = useState("");
  const stockBathByChange = (e) => {
    console.log(e.target.value);
    setStockBathBy(e.target.value);
  };
  const stockBathDateChange = (e) => {
    console.log(e.target.value);
    setStockBathDate(e.target.value);
  };

  const [trashOutBy, setTrashOutBy] = useState("");
  const [trashOutDate, setTrashOutDate] = useState("");
  const trashOutByChange = (e) => {
    console.log(e.target.value);
    setTrashOutBy(e.target.value);
  };
  const trashOutDateChange = (e) => {
    console.log(e.target.value);
    setTrashOutDate(e.target.value);
  };

  const submitData = async () => {
    const data = {
      mondayDate: weekOf,
      sweepFloorBy: sweepFloorBy,
      sweepFloorDate: sweepFloorDate,
      mopFloorBy: mopFloorBy,
      mopFloorDate: mopFloorDate,
      cleanSinkBy: cleanSinkBy,
      cleanSinkDate: cleanSinkDate,
      cleanMirrorsBy: cleanMirrorsBy,
      cleanMirrorsDate: cleanMirrorsDate,
      cleanTubBy: cleanTubBy,
      cleanTubDate: cleanTubDate,
      cleanToiletBy: cleanToiletBy,
      cleanToiletDate: cleanToiletDate,
      stockBathBy: stockBathBy,
      stockBathDate: stockBathDate,
      trashOutBy: trashOutBy,
      trashOutDate: trashOutDate,
    };

    console.log("Submit", data);
    const url = "http://localhost:4001/bathroomTwo";
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
      <div className={bathTwoStyles.container}>
        <div className={bathTwoStyles.intro}>
          <div className={bathTwoStyles.top}>
            <h54>Bathroom Two's Chores!</h54>
            <div className={bathTwoStyles.under}>
              <h55>
                Check what chores are done, need to be done, who they were
                completed by, and when they were completed!
              </h55>
              <div className={bathTwoStyles.week}>
                <h56> Week of: {weekOf} </h56>
                <div className={bathTwoStyles.bathtwo}>
                  <table>
                    <tr>
                      <th>Chore</th>
                      <th>Completed By</th>
                      <th>Date Completed</th>
                    </tr>
                    <tr>
                      <td>Sweep Floor</td>
                      <td>
                        {" "}
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
                      <td>Clean Sink</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={cleanSinkBy}
                          onChange={cleanSinkByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={cleanSinkDate}
                          onChange={cleanSinkDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Clean Mirrors</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={cleanMirrorsBy}
                          onChange={cleanMirrorsByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={cleanMirrorsDate}
                          onChange={cleanMirrorsDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Clean Shower/Tub</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={cleanTubBy}
                          onChange={cleanTubByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={cleanTubDate}
                          onChange={cleanTubDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Clean Toilet</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={cleanToiletBy}
                          onChange={cleanToiletByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={cleanToiletDate}
                          onChange={cleanToiletDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Restock Bathroom Supplies</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={stockBathBy}
                          onChange={stockBathByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={stockBathDate}
                          onChange={stockBathDateChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Take Trash Out</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={trashOutBy}
                          onChange={trashOutByChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={trashOutDate}
                          onChange={trashOutDateChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button
                  className={bathTwoStyles.subbutton}
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

export default BathTwo;
