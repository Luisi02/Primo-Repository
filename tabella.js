const giorno= new Date();

function addDays(date, days) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
function formatDate(date) {
  let day = String(date.getDate()).padStart(2, '0');
  let month = String(date.getMonth() + 1).padStart(2, '0'); // Mesi indicizzati da 0
  let year = date.getFullYear();
  return ${day}/${month}/${year};
}

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