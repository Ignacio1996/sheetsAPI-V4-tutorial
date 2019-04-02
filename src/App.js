import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  //updates the spreadsheet
  updateSheetValues = () =>{   
                                                            //update the sheet ID here!
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/1nIrrHDVn0Jx3AbyWowfvHg7jqvtP5LH1yRI2Ks:batchUpdate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
                                //update this token with yours. 
          Authorization: "Bearer TOKEN_GOES_HERE",
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

  // Gets a range of values from a spreadsheet
  getSheetValues = async () =>{
                                                                              //Sheet ID goes here
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/SHEET_ID_HERE/values/A1:B5`, //you can change the range to whatever you want e.g A1, B5:F3, F5, etc
    {
      headers: {
        "Content-Type": "application/json",
                                //update with your token
        Authorization: "Bearer TOKEN_GOES_HERE" 
    }
    });
    const data = await request.json();
    console.log(data);
    return data;
  }

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
