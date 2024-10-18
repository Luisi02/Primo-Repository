const  giorno= date.now();

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
        let htmlTable = '<table>';
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
  table2.build([['Data', 'Singola', 'Doppia', 'Suite'], [giorno, '10', '5', '3']]);
  table2.render();