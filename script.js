/*
🏆 Snack 1
Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.

*/

function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then((obj => resolve(obj.title)))
            .catch(reject);
    })
}



getPostTitle(3)
    .then(obj => console.log(obj))
    .catch(error => console.error(error));



//BONUS (non completato)
function getPost(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then((obj => resolve(obj)))
            .catch(reject);
    })
}

getPost(2)
    .then(obj => console.log(obj))
    .catch(error => console.error(error));


/*
🏆 Snack 2
Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".

*/

function rollDice(result) {
    return new Promise((resolve, reject) => {
        console.log("Rolling the dice...");
        setTimeout(() => {
            let min = 1;
            let max = 6;
            let n = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(`The dice rolled: ${n}`);

            let rejectNum = Math.random();

            if (n === result) {
                resolve("You win!");
            } else if (rejectNum < 0.2) {
                reject("The dice got stuck!");
            } else {
                reject("You lose!");
            }
        }, 3000);
    });
}

rollDice(5)
    .then(message => console.log(message))
    .catch(error => console.log(error));