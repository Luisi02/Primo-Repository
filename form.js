import {set} from "./cache.js"

const conf = {
  singola: 10,
  doppia: 5,
  suite: 3,
};

const createForm = (parentElement) => {
  let data = [];

  return {
    onsubmit: (callbackInput) => {
      callback = callbackInput;
    },
    render: () => {
      data.push('data');
      Object.entries(conf).forEach((value, key) => {
        console.log(value[0]);
        data.push(value[0]);
      });
      console.log(data);
      parentElement.innerHTML =
        `<form><div class="mb-2">` +
        data
          .map((name, index) => {
            const inputId = `input-${index}`;
            if (index == 0) {
              return `<div class="row g-2 align-items-center">
              <div class="col-auto">
                  <label class="col-form-label">${name}</label>
              </div>
              <div class="col-auto">
                  <input id="${inputId}" type="date" class="form-control" />
              </div>
          </div>`;
            } else {
              return `<div class="row g-2 align-items-center"><div class="col-auto"> <label class="col-form-label">${name}</label>
              </div> <div class="col-auto"><input id="${inputId}" type="text" class="form-control" /></div> </div>`;
            }
          })
          .join('') +
        ` </div>
          <button type='button' id='submit' class='btn btn-primary mt-3'>Submit</button>
      </form>`;

      document.querySelector('#submit').onclick = () => {
        const result = data.map((name, index) => {
          const inputId = `input-${index}`;
          const inputElement = document.querySelector('#' + inputId);

          if (inputElement) {
            return inputElement.value;
          } else {
            console.log(`Elemento non trovato per ID: ${inputId}`);
            return null;
          }
        });

        console.log('Form data:', result);
        let f = result[0].split('-');
        let format = f[2] + '/' + f[1] + '/' + f[0];
        console.log(format);

        lista_tabella.forEach((element, i) => {
          if (format === element[0]) {
            element.forEach((el, index) => {
              if (index === 1 && result[1] != '') {
                if (parseInt(result[1]) < lista_tabella[i][index]) {
                  lista_tabella[i][index] -= parseInt(result[1]);
                }
              } else if (index === 2 && result[2] != '') {
                if (parseInt(result[2]) < lista_tabella[i][index]) {
                  lista_tabella[i][index] -= parseInt(result[2]);
                }
              } else if (index === 3 && result[3] != '') {
                if (parseInt(result[3]) < lista_tabella[i][index]) {
                  lista_tabella[i][index] -= parseInt(result[3]);
                }
              }
            });
          }
        });
        table2.render(lista_tabella);
        set(lista_tabella);
      };
    },
  };
};

const form = createForm(document.querySelector('#app'));

form.onsubmit((result) => {
  table2.addRow(result);
  table2.render(lista_tabella);
});

form.render();