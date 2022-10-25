/*

creo un'array con una po di email all'interno
chiedo all'utente la sua email
IF l'email non è nell'array
    -chiedo se vuole registrarla
    IF dice si
        -aggiungo la nuova email all'array
    ELSE 
        -ricarica la pagina e ricomincia

*/

const arrEmails = ['domenicomonaco@gmail.com', 'francescoorazini@gmail.com', 'henrikapidani@gmail.com', 'marcomammi@gmail.com' ];
const userEmailLogin = document.querySelector('#userEmail');
const userEmail = userEmailLogin.value;
const userEmailFinder = arrEmails.includes(userEmail);
const sendBtn = document.querySelector('#sendBtn')
let registerQuestion;

sendBtn.addEventListener('click', function () {
    console.log(userEmail)
    

})

/*
if (userEmailFinder == false) {
    registerQuestion = prompt('Email errata o inesistente... Vuoi registrarti con questa email?').toLowerCase();
    if (registerQuestion == 'si') {
        arrEmails.push(userEmail)
        console.log('Sei stato registrato con successo... Benvenuto ' + userEmail + '!')
    } else {
        console.log('Che peccato! Ricarica la pagina e riprova...')
    }
} else {
    console.log('Bentornato ' + userEmail + '!')
}

*/