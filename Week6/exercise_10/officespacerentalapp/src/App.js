import React from "react";
import office from "./Images/office.jpg";

function App() {

  const element = "Office Space";

  const jsxatt = (
    <img
      src={office}
      width="25%"
      height="25%"
      alt="Office Space"
    />
  );

  const officeList = [

    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },

    {
      Name: "Regus",
      Rent: 70000,
      Address: "Bangalore"
    },

    {
      Name: "WeWork",
      Rent: 55000,
      Address: "Hyderabad"
    },

    {
      Name: "SmartWorks",
      Rent: 90000,
      Address: "Pune"
    }

  ];

  return (

    <div style={{ marginLeft: "30px" }}>

      <h1>{element}, at Affordable Range</h1>

      {jsxatt}

      <hr />

      {

        officeList.map((ItemName, index) => {

          let colors = [];

          if (ItemName.Rent <= 60000) {

            colors.push("red");

          }

          else {

            colors.push("green");

          }

          return (

            <div key={index}>

              <h2>Name : {ItemName.Name}</h2>

              <h3 style={{ color: colors[0] }}>
                Rent : Rs. {ItemName.Rent}
              </h3>

              <h3>
                Address : {ItemName.Address}
              </h3>

              <hr />

            </div>

          );

        })

      }

    </div>

  );

}

export default App;