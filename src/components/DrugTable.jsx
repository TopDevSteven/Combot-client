import React from "react";

import './DrugTable.css';

const DrugTable = ({ jsonArray, keyArray }) => {
    // Extracting the keys dynamically from the first object in the array
    // const keyArray = Object.keys(jsonArray[0]);
    return (
      <table>
        <thead>
          <tr>
            {keyArray.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {jsonArray.map((item, index) => (
            <tr key={index}>
              {keyArray.map((header, index) => (
                <td key={index}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default DrugTable;