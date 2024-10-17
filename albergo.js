const createForm = (parentElement) => {
    let data;
    let callback = null;
  
    return {
      setLabels: (labels) => {
        data = labels;
      },
      onsubmit: (callbackInput) => {
        callback = callbackInput;
      },
      render: () => {
        parentElement.innerHTML =
          data
            .map((name, index) => {
              const inputId = `input-${index}`;
              return `<div>${name}\n<input id="${inputId}" type="text" /></div>`;
            })
            .join('') + "<button type='button' id='submit'>Submit</button>";
  
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
form.setLabels([
    'Data',
    'Singola',
    'Doppia',
    'Suite'
]);
  
form.onsubmit((result) => {
    table2.addRow(result);
    table2.render();
});
  
form.render();
  