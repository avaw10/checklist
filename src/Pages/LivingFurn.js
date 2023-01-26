import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import livingFurnStyles from "../Styles/livingroomfurn.module.css";

function LivingFurn() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/livingfurn";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("livingFurn data", data);
    setYearOf(data.year);
    setLivingCouch(data.livingCouch);
    setLivingTable(data.livingTable);
    setLivingChairs(data.livingChairs);
    setLivingLampOne(data.livingLampOne);
    setLivingLampTwo(data.livingLampTwo);
    setLivingTele(data.livingTele);
    console.log(data);
  };

  const [YearOf, setYearOf] = useState("");
  const [livingCouch, setLivingCouch] = useState("");
  const livingCouchChange = (e) => {
    console.log(e.target.value);
    setLivingCouch(e.target.value);
  };
  const [livingTable, setLivingTable] = useState("");
  const livingTableChange = (e) => {
    console.log(e.target.value);
    setLivingTable(e.target.value);
  };
  const [livingChairs, setLivingChairs] = useState("");
  const livingChairsChange = (e) => {
    console.log(e.target.value);
    setLivingChairs(e.target.value);
  };
  const [livingLampOne, setLivingLampOne] = useState("");
  const livingLampOneChange = (e) => {
    console.log(e.target.value);
    setLivingLampOne(e.target.value);
  };
  const [livingLampTwo, setLivingLampTwo] = useState("");
  const livingLampTwoChange = (e) => {
    console.log(e.target.value);
    setLivingLampTwo(e.target.value);
  };
  const [livingTele, setLivingTele] = useState("");
  const livingTeleChange = (e) => {
    console.log(e.target.value);
    setLivingTele(e.target.value);
  };

  const submitData = async () => {
    const data = {
      year: YearOf,
      livingCouch: livingCouch,
      livingTable: livingTable,
      livingChairs: livingChairs,
      livingLampOne: livingLampOne,
      livingLampTwo: livingLampTwo,
      livingTele: livingTele,
    };

    console.log("Submit", data);
    const url = "http://localhost:4001/livingFurn";
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
      <div className={livingFurnStyles.container}>
        <div className={livingFurnStyles.intro}>
          <div className={livingFurnStyles.top}>
            <h77>Living Room Furniture!</h77>
            <div className={livingFurnStyles.under}>
              <h78>Check Who's Furniture is Whose to Keep Organized</h78>
              <div className={livingFurnStyles.week}>
                <h97> Year: {YearOf} </h97>
                <div className={livingFurnStyles.livingfurn}>
                  <table>
                    <tr>
                      <th>Item</th>
                      <th>Owner</th>
                    </tr>
                    <tr>
                      <td>Couch</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={livingCouch}
                          onChange={livingCouchChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Table</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={livingTable}
                          onChange={livingTableChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Chairs</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={livingChairs}
                          onChange={livingChairsChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Lamp One</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={livingLampOne}
                          onChange={livingLampOneChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Lamp Two</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={livingLampTwo}
                          onChange={livingLampTwoChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Television</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={livingTele}
                          onChange={livingTeleChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button
                  className={livingFurnStyles.subbutton}
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

export default LivingFurn;
