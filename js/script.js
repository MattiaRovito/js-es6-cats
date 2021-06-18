//! Milestone 1 
//TODO Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso. Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.



//* Creiamo l'array di oggetti
const cats = 
[
    {
        nome : 'Felix',
        eta : 10,
        colore : '#000000',
        sesso : 'M'
    },
    {
        nome : 'Garfield',
        eta : 13,
        colore : '#f47a05',
        sesso : 'F'
    },
    {
        nome : 'GattoConGliStivali',
        eta : 7,
        colore : '#3c3c3c',
        sesso : 'M'
    },
    {
        nome : 'Silvestro',
        eta : 8,
        colore : '#774d2b',
        sesso : 'M'
    },
    {
        nome : 'Tom',
        eta : 9,
        colore : '#c0c0c0',
        sesso : 'F'
    },
    {
        nome : 'Birba',
        eta : 11,
        colore : '#6c00b0',
        sesso : 'F'
    },
];

//*Stampiamo tramite forEach() i gatti con i rispettivi nomi e colori

//* nell'immagine stampiamo direttamente, tramite style = "color" il colore dell'elemento.
cats.forEach((element) => {
    document.getElementById('gatti').innerHTML += 
    `
    Il gatto ${element.nome} è: <i class="fas fa-cat" style = "color:${element.colore}" ></i> <br>
    `;
});

//! Milestone 2 
//TODO Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

//* creiamo due variabili con i due colori
const rosso = "red";
const blue = "blue";


const newCats = cats.map((element) => {
    const nome = element.nome;
    const eta = element.eta;
    const colore = element.colore;
    const sesso = element.sesso;

    //* Posizioniamo, di fianco ogni GeolocationPosition, un fiocco colorato: rosa se femmina, blu se maschio.

    let fiocco = blue;
    if(sesso === 'F'){
        fiocco = rosso;
    }
   
    //* Inoltre, il colore del fiocco deve essere più chiaro se il gatto è giovane e più scuro se è più vecchio. 

    //* In questo caso, diviso 13 perché consideriamo il gatto più anziano. Se è un qualcosa che cambia continuamente, conviene crearsi una funzione.
    const opacity = element.eta / 13;

    return {
        nome,
        eta,
        colore,
        sesso,
        fiocco : {
            colore : fiocco,
            opacity : opacity
        }
    }
});

newCats.forEach((element) => {
    document.getElementById("nuoviGatti").innerHTML +=
    `
    Il gatto ${element.nome} è: <i class="fas fa-cat" style = "color:${element.colore}" ></i> ed è: <i class="fas fa-award" style="color:${element.fiocco.colore}; opacity:${element.fiocco.opacity}"></i>  <br>
    `
});

//* Dividiamo i gatti in due array, maschi e femmine
const catsMale = newCats.filter((element) => {
    return element.sesso === "M";
});
const catsFemale = newCats.filter((element) => {
    return element.sesso === "F";
});

console.log("I gatti maschi sono: ", catsMale);
console.log("Le gatte femmine sono: ", catsFemale);


//! Milestone 3 
//TODO Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.

const catsTot = [...catsFemale, ...catsMale];
// console.log(catsTot);

catsFemale.map((element) => {
    document.getElementById("gattiFinali").innerHTML += 
    `
        ${element.nome} <i class="fas fa-award" style="color:${element.fiocco.colore}; opacity:${element.fiocco.opacity}"></i> è una gattina <br>
    `
});

catsMale.map((element) => {
    document.getElementById("gattiFinali").innerHTML += 
    `
        ${element.nome} <i class="fas fa-award" style="color:${element.fiocco.colore}; opacity:${element.fiocco.opacity}"></i> è un gattino <br>
    `
});


//? Non funziona, vedere domani