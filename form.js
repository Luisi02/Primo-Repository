const conf = {
  "singola": 10,
  "doppia": 5,
  "suite": 3,
  "tripla": 1,
  "Quadrupla": 15
};

const createForm = (parentElement) => {
  let data = [];
  let callback = null;

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
        data
          .map((name, index) => {
            const inputId = `input-${index}`;
            return `<div>${name}\n<input id="${inputId}" type="text" /></div>`;
          })
          .join('') + "<button type='button' id='submit' class='btn btn-primary ms-2'>Submit</button>";

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

        if (callback) {
          callback(result);
        }
      };
    },
  };
};

const form = createForm(document.querySelector('#app'));

form.onsubmit((result) => {
  table2.addRow(result);
  table2.render();
});

form.render();