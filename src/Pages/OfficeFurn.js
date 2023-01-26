import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import officeFurnStyles from "../Styles/officefurn.module.css";

function OfficeFurn() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/officefurn";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("officeFurn data", data);
    setYearOf(data.year);
    setOfficeDesk(data.officeDesk);
    setOfficeChair(data.officeChair);
    setOfficeLamp(data.officeLamp);
    setOfficeBook(data.officeBook);
    console.log(data);
  };

  const [YearOf, setYearOf] = useState("");
  const [officeDesk, setOfficeDesk] = useState("");
  const officeDeskChange = (e) => {
    console.log(e.target.value);
    setOfficeDesk(e.target.value);
  };
  const [officeChair, setOfficeChair] = useState("");
  const officeChairChange = (e) => {
    console.log(e.target.value);
    setOfficeChair(e.target.value);
  };
  const [officeLamp, setOfficeLamp] = useState("");
  const officeLampChange = (e) => {
    console.log(e.target.value);
    setOfficeLamp(e.target.value);
  };
  const [officeBook, setOfficeBook] = useState("");
  const officeBookChange = (e) => {
    console.log(e.target.value);
    setOfficeBook(e.target.value);
  };

  const submitData = async () => {
    const data = {
      year: YearOf,
      officeDesk: officeDesk,
      officeChair: officeChair,
      officeLamp: officeLamp,
      officeBook: officeBook,
    };

    console.log("Submit", data);
    const url = "http://localhost:4001/officeFurn";
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
      <div className={officeFurnStyles.container}>
        <div className={officeFurnStyles.intro}>
          <div className={officeFurnStyles.top}>
            <h79>Office Furniture!</h79>
            <div className={officeFurnStyles.under}>
              <h80>Check Who's Furniture is Whose to Keep Organized</h80>
              <div className={officeFurnStyles.week}>
                <h96> Year: {YearOf} </h96>
                <div className={officeFurnStyles.officefurn}>
                  <table>
                    <tr>
                      <th>Item</th>
                      <th>Owner</th>
                    </tr>
                    <tr>
                      <td>Desk</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={officeDesk}
                          onChange={officeDeskChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Chair</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={officeChair}
                          onChange={officeChairChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Lamp</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={officeLamp}
                          onChange={officeLampChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bookshelf</td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={officeBook}
                          onChange={officeBookChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <button
                  className={officeFurnStyles.subbutton}
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

export default OfficeFurn;
