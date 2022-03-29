function loadMainForm() {

    const htmlServ = HtmlService.createTemplateFromFile("main");
    const html = htmlServ.evaluate();
    html.setWidth(875).setHeight(875);
    const ui = SpreadsheetApp.getUi();
    ui.showModalDialog(html, "Edit Organization Data");

  }


  function createMenu_() {

    const ui = SpreadsheetApp.getUi();
    const menu = ui.createMenu("Form");
    menu.addItem("Open Form", "loadMainForm");
    menu.addToUi();

  }

  function onOpen() {

    createMenu_();

  }
