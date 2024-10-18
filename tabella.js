const createTable = (parentElement) => {
    let data = [];
  
    return {
      build: (dataInput) => {
        data = dataInput;
      },
      addRow: (row) => {
        data.push(row);
      },
      render: () => {
        let htmlTable = '<table border="1">';
        htmlTable += data
          .map(
            (row) =>
              '<tr>' + row.map((col) => '<td>' + col + '</td>').join('') + '</tr>'
          )
          .join('');
        htmlTable += '</table>';
        parentElement.innerHTML = htmlTable;
      },
    };
  };
  
  const table2 = createTable(document.querySelector('#table2'));
  table2.build([['Data', 'Singola', 'Doppia', 'Suite']]);
  table2.render();