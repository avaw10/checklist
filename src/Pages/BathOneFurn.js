import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import bathOneFurnStyles from "../Styles/bathonefurn.module.css";

function BathOneFurn() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/bathonefurn";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("bathoneFurn data", data);
    setYearOf(data.year);
    setBathOneShower(data.bathOneShower);
    setBathOneWall(data.bathOneWall);
    setBathOneSoap(data.bathOneSoap);
    console.log(data);
  };
  const [YearOf, setYearOf] = useState("");
  const [bathOneShower, setBathOneShower] = useState("");
  const bathOneShowerChange = (e) => {
    console.log(e.target.value);
    setBathOneShower(e.target.value);
  };
  const [bathOneWall, setBathOneWall] = useState("");
  const bathOneWallChange = (e) => {
    console.log(e.target.value);
    setBathOneWall(e.target.value);
  };
  const [bathOneSoap, setBathOneSoap] = useState("");
  const bathOneSoapChange = (e) => {
    console.log(e.target.value);
    setBathOneSoap(e.target.value);
  };

  const submitData = async () => {
    const data = {
      year: YearOf,
      bathOneShower: bathOneShower,
      bathOneWall: bathOneWall,
      bathOneSoap: bathOneSoap,
    };

    console.log("Submit", data);
    const url = "http://localhost:4001/bathOneFurn";
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
      <div className={bathOneFurnStyles.container}>
        <div className={bathOneFurnStyles.intro}>
          <div className={bathOneFurnStyles.top}>
            <h83> The First Bathroom's Furniture!</h83>
            <div className={bathOneFurnStyles.under}>
              <h84>Check Who's Furniture is Whose to Keep Organized</h84>
              <div className={bathOneFurnStyles.week}>
                <h94> Year: {YearOf} </h94>
                <div className={bathOneFurnStyles.bathonefurn}>
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
                          value={bathOneShower}
                          onChange={bathOneShowerChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Wall Hanger</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={bathOneWall}
                          onChange={bathOneWallChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Soap Dispensor</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={bathOneSoap}
                          onChange={bathOneSoapChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button
                  className={bathOneFurnStyles.subbutton}
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

export default BathOneFurn;
