import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import bathThreeFurnStyles from "../Styles/baththreefurn.module.css";

function BathThreeFurn() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/baththreefurn";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("baththreeFurn data", data);
    setYearOf(data.year);
    setBathThreeShower(data.bathThreeShower);
    setBathThreeWall(data.bathThreeWall);
    setBathThreeSoap(data.bathThreeSoap);
    console.log(data);
  };
  const [YearOf, setYearOf] = useState("");
  const [bathThreeShower, setBathThreeShower] = useState("");
  const bathThreeShowerChange = (e) => {
    console.log(e.target.value);
    setBathThreeShower(e.target.value);
  };
  const [bathThreeWall, setBathThreeWall] = useState("");
  const bathThreeWallChange = (e) => {
    console.log(e.target.value);
    setBathThreeWall(e.target.value);
  };
  const [bathThreeSoap, setBathThreeSoap] = useState("");
  const bathThreeSoapChange = (e) => {
    console.log(e.target.value);
    setBathThreeSoap(e.target.value);
  };

  const submitData = async () => {
    const data = {
      year: YearOf,
      bathThreeShower: bathThreeShower,
      bathThreeWall: bathThreeWall,
      bathThreeSoap: bathThreeSoap,
    };

    console.log("Submit", data);
    const url = "http://localhost:4001/bathThreeFurn";
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
      <div className={bathThreeFurnStyles.container}>
        <div className={bathThreeFurnStyles.intro}>
          <div className={bathThreeFurnStyles.top}>
            <h87> The Third Bathroom's Furniture!</h87>
            <div className={bathThreeFurnStyles.under}>
              <h88>Check Who's Furniture is Whose to Keep Organized</h88>
              <div className={bathThreeFurnStyles.week}>
                <h92> Year: {YearOf} </h92>
                <div className={bathThreeFurnStyles.baththreefurn}>
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
                          value={bathThreeShower}
                          onChange={bathThreeShowerChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Wall Hanger</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={bathThreeWall}
                          onChange={bathThreeWallChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Soap Dispensor</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={bathThreeSoap}
                          onChange={bathThreeSoapChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button
                  className={bathThreeFurnStyles.subbutton}
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

export default BathThreeFurn;
