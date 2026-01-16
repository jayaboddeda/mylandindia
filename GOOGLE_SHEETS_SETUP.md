# How to Connect Form to Google Sheets

Follow these steps to enable form submissions directly to a Google Sheet.

## 1. Create the Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new sheet.
2. Name it "Land India Site Visits".
3. In the first row, add these headers:
   - **Column A:** Timestamp
   - **Column B:** Date
   - **Column C:** Name
   - **Column D:** Mobile
   - **Column E:** Property

## 2. Create the Script
1. In your Google Sheet, click **Extensions** > **Apps Script**.
2. Delete any code in the editor and paste the following code:

```javascript
var sheetName = 'Sheet1';
var scriptProp = PropertiesService.getScriptProperties();

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function doPost (e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    var sheet = doc.getSheetByName(sheetName);

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;

    var newRow = headers.map(function(header) {
      if(header === 'Timestamp'){
        return new Date();
      }
      if(header === 'Date'){
        return new Date();
      }
      return e.parameter[header.toLowerCase()] || e.parameter[header];
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  finally {
    lock.releaseLock();
  }
}
```

3. Click the **Save** icon (floppy disk).
4. Run the `intialSetup` function:
   - Select `intialSetup` from the function dropdown in the toolbar.
   - Click **Run**.
   - You will need to "Review Permissions" and authorize the script (Choose your account > Advanced > Go to (Script Name) (unsafe) > Allow).

## 3. Deploy the Script
1. Click **Deploy** > **New deployment**.
2. Click the **Select type** icon (gear) > **Web app**.
3. Fill in the details:
   - **Description:** Content Form
   - **Execute as:** Me (your email)
   - **Who has access:** **Anyone** (This is crucial!).
4. Click **Deploy**.
5. Copy the **Web App URL** provided.

## 4. Update the Website Code
1. Open `components/site-visit-modal.html`.
2. Find this line in the `<script>` section:
   ```javascript
   const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'` with the URL you copied in Step 3.5.

Done! Your form should now submit data to your Google Sheet.
