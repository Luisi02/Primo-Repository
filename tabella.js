import {get} from "./cache.js"

lista_tabella=get()
function formatDate(date) {
  let lista = [];
  let endDate = new Date();
  endDate.setDate(date.getDate() + 30);
  for (let i = date; i < endDate; i.setDate(i.getDate() + 1)) {
    let day = String(i.getDate()).padStart(2, '0');
    let month = String(i.getMonth() + 1).padStart(2, '0'); // Mesi indicizzati da 0
    let year = i.getFullYear();
    lista.push(`${day}/${month}/${year}`);
  }
  return lista;
}


const createTable = (parentElement) => {
  let giorno = new Date();
  let lista_giorni = formatDate(giorno);
  return {
    addRow: (row) => {
      lista_tabella.push(row);
    },
    build: () => {
      let chiavi = ['Data'];
      let valori = ['Data'];
      Object.entries(conf).forEach((value) => {
        chiavi.push(value[0]);
        valori.push(value[1]);
      });
      lista_tabella.push(chiavi);
      for (let i = 0; i < 30; i++) {
        valori.forEach((Element, index) => {
          if (index == 0) {
            valori[index] = lista_giorni[i];
            lista_tabella.push([...valori]);
          }
        });
      }

      console.log(lista_tabella);
    },

    render: (lista_tabella) => {
      let htmlTable = '<table class="table">';

      htmlTable += lista_tabella
        .map(
          (row) =>
            '<tr class="row-5">' +
            row.map((col) => '<td class="col">' + col + '</td>').join('') +
            '</tr>'
        )
        .join('');

      htmlTable += '</table>';
      parentElement.innerHTML = htmlTable;
    },
  };
};
const table2 = createTable(document.querySelector('#table2'));
table2.build();

table2.render(lista_tabella);