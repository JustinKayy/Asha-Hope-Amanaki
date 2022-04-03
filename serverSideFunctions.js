function getDataForSearch() {
  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RecipientsTest");
  return ws.getRange(2, 1, ws.getLastRow() - 1, 1).getValues();
}

function deleteByOrgName(name) {
  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RecipientsTest");
  const orgIds = ws.getRange(2, 1, ws.getLastRow() - 1, 1).getValues().map(r => r[0].toString().toLowerCase()); //map org name column to array
  const posIndex = orgIds.indexOf(name.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.deleteRow(rowNumber);
}

function getOrgByName(name) {
  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RecipientsTest");
  const orgIds = ws.getRange(2, 1, ws.getLastRow() - 1, 1).getValues().map(r => r[0].toString().toLowerCase()); //map org name column to array
  const posIndex = orgIds.indexOf(name.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  const organizationInfo = ws.getRange(rowNumber, 1, 1, 7).getValues()[0];
  return {
    orgName: organizationInfo[0], orgContact: organizationInfo[1], orgOwner: organizationInfo[2], orgLocation: organizationInfo[3],
    orgBagReq: organizationInfo[4], orgBagDist: organizationInfo[5], orgNotes: organizationInfo[6]
  };
}

function editOrgByName(name, organizationInfo){

  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RecipientsTest");
  const orgIds = ws.getRange(2, 1, ws.getLastRow() - 1, 1).getValues().map(r => r[0].toString().toLowerCase()); //map org name column to array
  const posIndex = orgIds.indexOf(name.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.getRange(rowNumber, 2, 1, 6).setValues([[organizationInfo.orgContact, organizationInfo.orgOwner, 
                                              organizationInfo.orgLocation, organizationInfo.orgBagReq, 
                                              organizationInfo.orgBagDist, organizationInfo.orgNotes]]);
  return true;

}

function addOrganization(organizationInfo){
  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RecipientsTest");
  const lastRow = ws.getLastRow() + 1;
  const rowNumber = lastRow;
  ws.getRange(rowNumber, 1, 1, 7).setValues([[organizationInfo.orgName, organizationInfo.orgContact, 
                                              organizationInfo.orgOwner, organizationInfo.orgLocation, 
                                              organizationInfo.orgBagReq, organizationInfo.orgBagDist, organizationInfo.orgNotes]]);

  return true;
}

function addDonation(donationInfo){
  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Item Donations");
  const lastRow = ws.getLastRow() + 1;
  const rowNumber = lastRow;
  //ws.getRange(rowNumber, 1, 1, 4).setValues([[donationInfo.donName, donationInfo.donContact, donationInfo.donItem]])
  ws.getRange(rowNumber, 4, 1, 3).setValues([[donationInfo.donName, donationInfo.donContact, donationInfo.donItem]]);
  ws.getRange(rowNumber,2,1,1).setValue(donationInfo.donNumber)                     

  return true;
}
