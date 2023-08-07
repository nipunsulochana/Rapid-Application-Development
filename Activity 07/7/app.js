const fs = require('fs');
const csvParser = require('csv-parser');

const filePath = 'data.csv';

function readCSV(filePath) {
    const table = [];

    fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (row) => {
            table.push(row);
        })
        .on('end', () => {
            displayTable(table);
        });
}

function displayTable(data) {
    const headers = Object.keys(data[0]);
    const rows = data.map((row) => Object.values(row));

    const columnWidths = headers.map((header) => Math.max(header.length, ...rows.map((row) => String(row[headers.indexOf(header)]).length)));

    printRow(headers, columnWidths);

    printSeparator(columnWidths);

    rows.forEach((row) => printRow(row, columnWidths));
}

function printRow(row, columnWidths) {
    let output = '';
    for (let i = 0; i < row.length; i++) {
        output += row[i].toString().padEnd(columnWidths[i] + 2);
    }
    console.log(output);
}

function printSeparator(columnWidths) {
    let separator = '';
    for (const width of columnWidths) {
        separator += '-'.repeat(width + 2);
    }
    console.log(separator);
}

readCSV(filePath);