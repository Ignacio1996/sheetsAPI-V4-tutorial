import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  updateSheetValues = () =>{   
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/1nIrrHDVn0Jx3AbyWowfvLoBkvHg7jqvtP5LH1yRI2Ks:batchUpdate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ya29.GlvfBvCE5eSG-LR9W2U1yT6zAPtKv2yRlyrbLzbMScHy_FU1r5DJ9GN10zdglHeVcyisGK21K1z4FrVT1YQHkF2BSUHEHF6-SEInzfb13_I0U19cky2iWeiPysNZ`,
        },
        body: JSON.stringify({
        
            requests: [
              {
                repeatCell: {
                  range: {
                    startColumnIndex: 0,
                    endColumnIndex: 1,
                    startRowIndex: 0,
                    endRowIndex: 1,
                    sheetId: 0
                  },
                  cell: {
                    userEnteredValue:{
                      "numberValue": 10
                    },
                  },
                  fields: "*"
                }
              }
            ]
          
        })
      })
  }

  getSheetValues = async range => {
    const request = await fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1nIrrHDVn0Jx3AbyWowfvLoBkvHg7jqvtP5LH1yRI2Ks/values/A1:B5"
    );
    const data = await request.json();
    console.log("sheets data", data);
    return data;
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.updateSheetValues}>Update A1 to 10</button>
        <button onClick={this.getSheetValues}>Get range A1:B5</button>
      </div>
    );
  }
}

export default App;
