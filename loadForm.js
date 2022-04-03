/*function doGet(){

  return HtmlService.createTemplateFromFile("main").evaluate();

}*/

function loadMainForm(){

  const htmlServ = HtmlService.createTemplateFromFile("main");
  const html = htmlServ.evaluate();
  html.setWidth(875).setHeight(875);
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html, "Edit Organization Data");

}

function loadMainFormDonations(){

  const htmlServ = HtmlService.createTemplateFromFile("mainDonations");
  const html = htmlServ.evaluate();
  html.setWidth(875).setHeight(875);
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html, "Edit Donation Data");

}


function createMenu_(){

  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu("Form");
  menu.addItem("Open Form", "loadMainForm");
  menu.addItem("Donations Form", "loadMainFormDonations");
  menu.addToUi();

}

function onOpen(){

  createMenu_();

}
