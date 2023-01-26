import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import bathTwoFurnStyles from "../Styles/bathtwofurn.module.css";

function BathTwoFurn() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/bathtwofurn";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("bathtwoFurn data", data);
    setYearOf(data.year);
    setBathTwoShower(data.bathTwoShower);
    setBathTwoWall(data.bathTwoWall);
    setBathTwoSoap(data.bathTwoSoap);
    console.log(data);
  };
  const [YearOf, setYearOf] = useState("");
  const [bathTwoShower, setBathTwoShower] = useState("");
  const bathTwoShowerChange = (e) => {
    console.log(e.target.value);
    setBathTwoShower(e.target.value);
  };
  const [bathTwoWall, setBathTwoWall] = useState("");
  const bathTwoWallChange = (e) => {
    console.log(e.target.value);
    setBathTwoWall(e.target.value);
  };
  const [bathTwoSoap, setBathTwoSoap] = useState("");
  const bathTwoSoapChange = (e) => {
    console.log(e.target.value);
    setBathTwoSoap(e.target.value);
  };

  const submitData = async () => {
    const data = {
      year: YearOf,
      bathTwoShower: bathTwoShower,
      bathTwoWall: bathTwoWall,
      bathTwoSoap: bathTwoSoap,
    };

    console.log("Submit", data);
    const url = "http://localhost:4001/bathTwoFurn";
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
      <div className={bathTwoFurnStyles.container}>
        <div className={bathTwoFurnStyles.intro}>
          <div className={bathTwoFurnStyles.top}>
            <h85> The Second Bathroom's Furniture!</h85>
            <div className={bathTwoFurnStyles.under}>
              <h86>Check Who's Furniture is Whose to Keep Organized</h86>
              <div className={bathTwoFurnStyles.week}>
                <h93> Year: {YearOf} </h93>
                <div className={bathTwoFurnStyles.bathtwofurn}>
                  <table>
                    <tr>
                      <th>Item</th>
                      <th>Owner</th>
                    </tr>
                    <tr>
                      <td>Shower Rack</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={bathTwoShower}
                          onChange={bathTwoShowerChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Wall Hanger</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={bathTwoWall}
                          onChange={bathTwoWallChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Soap Dispensor</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={bathTwoSoap}
                          onChange={bathTwoSoapChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button
                  className={bathTwoFurnStyles.subbutton}
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

export default BathTwoFurn;
