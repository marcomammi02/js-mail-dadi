/*
MAIL
creo un'array con una po di email all'interno
chiedo all'utente la sua email
IF l'email non è nell'array
    -chiedo se vuole registrarla
    IF dice si
        -aggiungo la nuova email all'array
    ELSE 
        -ricarica la pagina e ricomincia
*/


const arrEmails = ['domenicomonaco@gmail.com', 'francescoorazini@gmail.com', 'henrikapidani@gmail.com', 'marcomammi@gmail.com', 'prova'];
const sendBtn = document.querySelector('#sendBtn');
const numberBtn = document.querySelector('#numberBtn')
let registerQuestion;



sendBtn.addEventListener('click', function () {
    const userEmailLogin = document.querySelector('#userEmail');
    const userEmail = (userEmailLogin.value);
    const userEmailFinder = arrEmails.includes(userEmail);
    const loginResult = document.querySelector('.loginResult');

    if (userEmailFinder == false) {
        registerQuestion = prompt('Email errata o inesistente... Vuoi registrarti con questa email?').toLowerCase();
        if (registerQuestion == 'si') {
            arrEmails.push(userEmail);
            loginResult.innerHTML = ('Sei stato registrato con successo... Benvenuto ' + `<span class="marker">${userEmail}</span> ` + '! Buon divertimento...');
            numberBtn.addEventListener('click', function (){
                const userNumber = Math.floor(Math.random() * 7);
                const pcNumber = Math.floor(Math.random() * 7);
                const userResult = document.querySelector('.userResult');
                const pcResult = document.querySelector('.pcResult');
                const totResult = document.querySelector('.totResult');
            
                userResult.innerHTML = ('Il tuo numero è: ' + userNumber)
                pcResult.innerHTML = ('Il numero del PC è: ' + pcNumber)
                if (userNumber == pcNumber) {
                    totResult.innerHTML = 'Pareggio!'
                }else if (userNumber > pcNumber) {
                    totResult.innerHTML = 'Hai vinto!'
                }else if (userNumber < pcNumber) {
                    totResult.innerHTML = 'Hai perso!'
                }
            })
        } else {
            loginResult.innerHTML = ('Che peccato! Ricarica la pagina e riprova...');
        }
    } else {
        loginResult.innerHTML = ('Bentornato ' + `<span class="marker">${userEmail}</span> ` + '! Buon divertimento...');
        numberBtn.addEventListener('click', function (){
            const userNumber = Math.floor(Math.random() * 7);
            const pcNumber = Math.floor(Math.random() * 7);
            const userResult = document.querySelector('.userResult');
            const pcResult = document.querySelector('.pcResult');
            const totResult = document.querySelector('.totResult');
        
            userResult.innerHTML = ('Il tuo numero è: ' + userNumber)
            pcResult.innerHTML = ('Il numero del PC è: ' + pcNumber)
            if (userNumber == pcNumber) {
                totResult.innerHTML = 'Pareggio!'
            }else if (userNumber > pcNumber) {
                totResult.innerHTML = 'Hai vinto!'
            }else if (userNumber < pcNumber) {
                totResult.innerHTML = 'Hai perso!'
            }
        })
        
    }
    

})




