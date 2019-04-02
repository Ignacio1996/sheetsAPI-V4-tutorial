# Simple React.js App using Google Sheets API v4

To make this work, create a new spreadsheet on your Google Sheets account. Get the spreadsheet Id from the url.

e.g https://docs.google.com/spreadsheets/d/1nIrrHDVn0Jx3AbyWowfvLvHg7jqvtP5LH1yRI2Ks/edit

Spreadsheet Id: 1nIrrHDVn0Jx3AbyWowfvLvHg7jqvtP5LH1yRI2Ks

Make sure you have an access token from the Google OAuth Playground https://developers.google.com/oauthplayground/ .
Find the Sheets API V4 scope, and select https://www.googleapis.com/auth/spreadsheets scope.

## Click Authorize APIs. You'll get an Authorization code. Hit Exchange authorization code for tokens.

## Copy the access token:

e.g Access Token: ya29.GlvfBsNYQIAsfSyNWuAaiErjtN2fMdar90lzlFx81HKsPr7OS2mPVsoquXzpsRIKqryh8JtoupYCCBE5idwEhUukIZhlvu-f3AJFow4t41Lg2
(this wont work because tokens are temporary).

## You will need to modify 4 things: The sheetID in lines 10 and 46, and the access token in lines 16 and 51

If you've followed these steps correctly, it should work! Let me know if it doesnt.


## `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Expanding this

Click the buttons and it should work! Feel free to modify the code to make it more efficient! Create state variables with the token and ID, find more Google Sheets functions (update formats, update column width, update background color, etc)

## You can see more examples at www.snowballfinances.com . It's what I've been working on the past year. You can also learn some personal finance.

Happy coding!

