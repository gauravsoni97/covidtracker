import React, { useState, useEffect } from "react";

const Covid = () => {
  const [data, setdata] = useState([]);

  // FETCHING API
  const getCovidData = async () => {
    const res = await fetch(`https://data.covid19india.org/data.json`);
    // converting above response in proper js object
    const myData = await res.json();
    setdata(myData.statewise);
  };

  // for updating data
  useEffect(() => {
    getCovidData();
  }, []);
  // empty []  is used here - as it will call once after refreshing the page for first time

  return (
    <>
      <table class="table container my-5 ">
        <thead className="thead">
          <tr>
            <th scope="col">State</th>
            <th scope="col">Active</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Deaths</th>
            <th scope="col">Recovered</th>
            <th scope="col">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {/* using map method for looping the api value for input
           */}

          {data.map((curele, index) => {
            return (
              <tr key={index}>
                <td>{curele.state}</td>
                <td>{curele.active}</td>
                <td>{curele.confirmed}</td>
                <td>{curele.deaths}</td>
                <td>{curele.recovered}</td>
                <td>{curele.lastupdatedtime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
