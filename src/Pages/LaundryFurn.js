import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import laundryFurnStyles from "../Styles/laundryfurn.module.css";

function LaundryFurn() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/laundryfurn";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("laundryFurn data", data);
    setYearOf(data.year);
    setLaundryWasher(data.laundryWasher);
    setLaundryDryer(data.laundryDryer);
    setLaundryRack(data.laundryRack);
    setLaundryIron(data.laundryIron);
    console.log(data);
  };
  const [YearOf, setYearOf] = useState("");
  const [laundryWasher, setLaundryWasher] = useState("");
  const laundryWasherChange = (e) => {
    console.log(e.target.value);
    setLaundryWasher(e.target.value);
  };
  const [laundryDryer, setLaundryDryer] = useState("");
  const laundryDryerChange = (e) => {
    console.log(e.target.value);
    setLaundryDryer(e.target.value);
  };
  const [laundryRack, setLaundryRack] = useState("");
  const laundryRackChange = (e) => {
    console.log(e.target.value);
    setLaundryRack(e.target.value);
  };
  const [laundryIron, setLaundryIron] = useState("");
  const laundryIronChange = (e) => {
    console.log(e.target.value);
    setLaundryIron(e.target.value);
  };

  const submitData = async () => {
    const data = {
      year: YearOf,
      laundryWasher: laundryWasher,
      laundryDryer: laundryDryer,
      laundryRack: laundryRack,
      laundryIron: laundryIron,
    };

    console.log("Submit", data);
    const url = "http://localhost:4001/laundryFurn";
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
      <div className={laundryFurnStyles.container}>
        <div className={laundryFurnStyles.intro}>
          <div className={laundryFurnStyles.top}>
            <h81>Laundry Room Furniture!</h81>
            <div className={laundryFurnStyles.under}>
              <h82>Check Who's Furniture is Whose to Keep Organized</h82>
              <div className={laundryFurnStyles.week}>
                <h95> Year: {YearOf} </h95>
                <div className={laundryFurnStyles.laundryfurn}>
                  <table>
                    <tr>
                      <th>Item</th>
                      <th>Owner</th>
                    </tr>
                    <tr>
                      <td>Washer</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={laundryWasher}
                          onChange={laundryWasherChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Dryer</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={laundryDryer}
                          onChange={laundryDryerChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Drying Rack</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={laundryRack}
                          onChange={laundryRackChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Iron and Ironing Board</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={laundryIron}
                          onChange={laundryIronChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button
                  className={laundryFurnStyles.subbutton}
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

export default LaundryFurn;
