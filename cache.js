const myToken = "6cc74d30-eb47-4cb2-8949-fa751e101038"; // token ottenuto via mail 
const myKey = "Chiara"; // chiave dell'oggetto
const myObject = lista_tabella;

function set () {
    fetch("https://ws.cipiaceinfo.it/cache/set", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "key": myToken
        },
        body: JSON.stringify({
        key: myKey,
        value: myObject
        })
    })
    .then(r => r.json())
    .then(r => {
        console.log("Entra in set");
    });
}

function get () {
    fetch("http://ws.cipiaceinfo.it/cache/get", { 
        method: "POST",
        headers: {
            "content-type": "application/json",
            "key": myToken
        },
        body: JSON.stringify({
        key: myKey,
        })
    .then(r => r.json())
    .then(r => { 
        myObject = JSON.parse(r.result); // r.result conterrà l'oggetto richiesto
        })
    })
    if (myObject===undefined){
        return []
    }else{
    return myObject
    }
}