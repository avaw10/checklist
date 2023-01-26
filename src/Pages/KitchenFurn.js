import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import kitchenFurnStyles from "../Styles/kitchenfurn.module.css";

function KitchenFurn() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/kitchenfurn";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("kitchenFurn data", data);
    setYearOf(data.year);
    setKitchenPots(data.kitchenPots);
    setKitchenPlates(data.kitchenPlates);
    setKitchenBowls(data.kitchenBowls);
    setKitchenCups(data.kitchenCups);
    setKitchenMugs(data.kitchenMugs);
    setKitchenSilver(data.kitchenSilver);
    setKitchenKnives(data.kitchenKnives);
    setKitchenCoffee(data.kitchenCoffee);
    console.log(data);
  };
  const [YearOf, setYearOf] = useState("");
  const [kitchenPots, setKitchenPots] = useState("");
  const kitchenPotsChange = (e) => {
    console.log(e.target.value);
    setKitchenPots(e.target.value);
  };
  const [kitchenPlates, setKitchenPlates] = useState("");
  const kitchenPlatesChange = (e) => {
    console.log(e.target.value);
    setKitchenPlates(e.target.value);
  };
  const [kitchenBowls, setKitchenBowls] = useState("");
  const kitchenBowlsChange = (e) => {
    console.log(e.target.value);
    setKitchenBowls(e.target.value);
  };
  const [kitchenCups, setKitchenCups] = useState("");
  const kitchenCupsChange = (e) => {
    console.log(e.target.value);
    setKitchenCups(e.target.value);
  };
  const [kitchenMugs, setKitchenMugs] = useState("");
  const kitchenMugsChange = (e) => {
    console.log(e.target.value);
    setKitchenMugs(e.target.value);
  };
  const [kitchenSilver, setKitchenSilver] = useState("");
  const kitchenSilverChange = (e) => {
    console.log(e.target.value);
    setKitchenSilver(e.target.value);
  };
  const [kitchenKnives, setKitchenKnives] = useState("");
  const kitchenKnivesChange = (e) => {
    console.log(e.target.value);
    setKitchenKnives(e.target.value);
  };
  const [kitchenCoffee, setKitchenCoffee] = useState("");
  const kitchenCoffeeChange = (e) => {
    console.log(e.target.value);
    setKitchenCoffee(e.target.value);
  };

  const submitData = async () => {
    const data = {
      year: YearOf,
      kitchenPots: kitchenPots,
      kitchenPlates: kitchenPlates,
      kitchenBowls: kitchenBowls,
      kitchenCups: kitchenCups,
      kitchenMugs: kitchenMugs,
      kitchenSilver: kitchenSilver,
      kitchenKnives: kitchenKnives,
      kitchenCoffee: kitchenCoffee,
    };

    console.log("Submit", data);
    const url = "http://localhost:4001/kitchenFurn";
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
      <div className={kitchenFurnStyles.container}>
        <div className={kitchenFurnStyles.intro}>
          <div className={kitchenFurnStyles.top}>
            <h75>Kitchen Furniture!</h75>
            <div className={kitchenFurnStyles.under}>
              <h76>Check Who's Furniture is Whose to Keep Organized</h76>
              <div className={kitchenFurnStyles.week}>
                <h98> Year: {YearOf} </h98>
                <div className={kitchenFurnStyles.kitchenfurn}>
                  <table>
                    <tr>
                      <th>Item</th>
                      <th>Owner</th>
                    </tr>
                    <tr>
                      <td>Pots and Pans</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={kitchenPots}
                          onChange={kitchenPotsChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Plates</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={kitchenPlates}
                          onChange={kitchenPlatesChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bowls</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={kitchenBowls}
                          onChange={kitchenBowlsChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Cups</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={kitchenCups}
                          onChange={kitchenCupsChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Mugs</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={kitchenMugs}
                          onChange={kitchenMugsChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Silverware</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={kitchenSilver}
                          onChange={kitchenSilverChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Knives</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={kitchenKnives}
                          onChange={kitchenKnivesChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Coffee Maker</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={kitchenCoffee}
                          onChange={kitchenCoffeeChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button
                  className={kitchenFurnStyles.subbutton}
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

export default KitchenFurn;
