const createTable = (parentElement) => {
    let data = [];
  
    return {
      addRow: (row) => {
        data.push(row);
      },
      build: () =>{
        let chiavi = ["Data"];
        let valori = ["Data"];
        Object.entries(conf).forEach((value) => {
          chiavi.push(value[0]);
          valori.push(value[1]);
        })
        data.push(chiavi);
        data.push(valori);
      },
      render: () => {
        let htmlTable = '<table>';
        htmlTable += data
          .map(
            (row) =>
              '<tr class="riga">' + row.map((col) => '<td class="colonna">' + col + '</td>').join('') + '</tr>'
          )
          .join('');
        htmlTable += '</table>';
        parentElement.innerHTML = htmlTable;
      },
    };
  };
  const table2 = createTable(document.querySelector('#table2'));
  table2.build();
  
  table2.render();