// Code for blog entry:
//
// There is a full descriptions and discussion in the blog entry.
// Code for blog entry:
//
// There is a full descriptions and discussion in the blog entry.
/*
Add range names to the spreadsheet
containing data returned by spreadsheet function call:
=IMPORTHTML("http://www.espnfc.co.uk/barclays-premier-league/23/table", "table", 1)
*/
function addRangeNames() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      shName = 'Sheet1',
      sh = ss.getSheetByName(shName),
      rngAddressNames = {
        "column_names": "A2:I2",
        "league_champion_position": "A3:I3",
        "champions_league_positions": "A3:I6",
        "europa_league_position": "A7:I7",
        "relegation_positions": "A20:I22"
      },
      rngName,
      rngAddress,
      rngToName;
  for (rngName in rngAddressNames) {
    rngAddress = rngAddressNames[rngName];
    rngToName = sh.getRange(rngAddress);
    ss.setNamedRange(rngName, rngToName);
  }
}
/*
Use JavaScript introspection to determine the object type
and methods of one element returned by the Spreadsheet method
"getNamedRanges()" and print them to the logger.
Throws an error if there are no named ranges in the active spreadsheet.
*/
function examineNamedRangeObject() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      namedRng = ss.getNamedRanges()[0];
  Logger.log(namedRng);
  Logger.log(Object.keys(namedRng).join('\n'));
}

/*
Clean-up: Remove ALL range names from the active spreadsheet.
*/
function clearAllNamedRanges() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      namedRngs = ss.getNamedRanges();
  Array.forEach(namedRngs, function(namedRng) {
    namedRng.remove();
  });
}
