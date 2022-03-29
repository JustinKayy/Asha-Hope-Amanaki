function getDataForSearch() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Sheet1");
  return ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues();
}

function deleteByOrgName(id){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Sheet1");
  const orgIds = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r => r[0].toString().toLowerCase()); //map org name column to array
  const posIndex = orgIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.deleteRow(rowNumber);

}

function getOrgByName(id){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Sheet1");
  const orgIds = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r => r[0].toString().toLowerCase()); //map org name column to array
  const posIndex = orgIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  const organizationInfo = ws.getRange(rowNumber, 1, 1, 7 ).getValues()[0];
  return { orgName: organizationInfo[0], orgContact: organizationInfo[1], orgOwner: organizationInfo[2], orgLocation: organizationInfo[3],
            orgBagReq: organizationInfo[4], orgBagDist: organizationInfo[5], orgNotes: organizationInfo[6] };

}