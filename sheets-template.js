const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./gcp-creds.json'); // Service Account Credentials
const doc = new GoogleSpreadsheet('16HobuR9kTIBpf7rE8Aq0SCJ1xzzij1yrZOk7LZrq0ws');

async function SheetsBasicsDemo() {
  // The Basics
  
  // Using Service Account Credentials
  await doc.useServiceAccountAuth(creds);

  // Loading, Getting, and Editing Document Properties
  await doc.loadInfo(); 
  const originalTitle = doc.title;
  console.log(doc.title);
  await doc.updateProperties({ title: 'Renamed Document!' });
  await doc.updateProperties({ title: originalTitle });

  // Selecting Sheets and Getting Sheet Properties 
  // doc.sheetsById[id] or doc.sheetsByTitle[title]
  const sheet = doc.sheetsByIndex[0]; 
  console.log(sheet.title);
  console.log(sheet.rowCount);

  // Adding and Removing Sheets
  const newSheet = await doc.addSheet({ title: 'New Sheet!' });
  await newSheet.delete();

}

async function SheetsRowsDemo() {
  // Working with Rows

  // Using Service Account Credentials
  await doc.useServiceAccountAuth(creds);

  // Create a Sheet w/ Header Role and Header Velues
  const sheet = await doc.addSheet({ title: 'Info Sheet', headerValues: ['name', 'email'] });

  // Adding Rows (Single & Multiple)
  const larryRow = await sheet.addRow({ name: 'Larry Page', email: 'larry@google.com' });
  const moreRows = await sheet.addRows([
    { name: 'Sergey Brin', email: 'sergey@google.com' },
    { name: 'Eric Schmidt', email: 'eric@google.com' },
  ]);

  // Getting Rows
  const rows = await sheet.getRows(); // can pass in { limit, offset }

  // Reading and Writing Role Values
  console.log(rows[0].name); // 'Larry Page'
  rows[1].email = 'sergey@abc.xyz'; // update a value
  await rows[1].save(); // save updates
  await rows[1].delete(); // delete a row
  await sheet.delete();
};

async function SheetsCellsDemo() {
  // Working with Cells
  
  // Using Service Account Credentials
  await doc.useServiceAccountAuth(creds);

  // Loading Single Sheet
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[0]; 
  await sheet.delete();
  
  // Loading and Getting Cell Stats
  await sheet.loadCells('A1'); // loads a range of cells
  console.log(sheet.cellStats); // total cells, loaded, how many non-empty

  // Selecting Cells
  const a1 = sheet.getCell(0, 0); // access cells using a zero-based index
  const c6 = sheet.getCellByA1('C6'); // or A1 style notation

  // Accessing Everything About the Cell
  console.log(a1.value);
  console.log(a1.formula);
  console.log(a1.formattedValue);
  
  // Updating Cell Contents and Formatting 
  a1.value = 123.456;
  c6.formula = '=A1';
  a1.textFormat = { bold: true };
  c6.note = 'This is a note!';

  // Save All Cell Updates in One Call
  await sheet.saveUpdatedCells(); 
};

SheetsBasicsDemo();
SheetsRowsDemo();