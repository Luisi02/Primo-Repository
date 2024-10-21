const createTable = (parentElement) => {
    let data = [];
  
    return {
      addRow: (row) => {
        data.push(row);
      },
      updateRow: (newRow) => {
        // Trovare la riga con la stessa "Data"
        let found = false;
        for (let i = 0; i < data.length; i++) {
          if (data[i][0] === newRow[0]) {
            // Aggiorna solo i valori delle colonne, lascia i nomi intatti
            for (let j = 1; j < data[i].length; j++) {
              data[i][j] = newRow[j]; // Sostituisci il valore mantenendo il nome
            }
            found = true;
            break;
          }
        }
        return found;
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