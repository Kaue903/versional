// Selecionando o botão via JS (Vamos usar ID "myButton")
// const button = document.getElementById('myButton');
const button = document.getElementsByClassName('botao');



// Selecionando o botão via JS (Vamos usar ID "myText")
// const text = document.getElementById('myText');
const text = document.getElementsByTagName ('p');

// Adicionando um "ouvinte" de evento para disparar uma ação
button[0].addEventListener ('mouseover', () => {
    // Troca o texto pra "Hello, World"
    text [0].textContent = 'Hello, World';
})

// Adicionando um "ouvinte" de evento para disparar uma ação
button[0].addEventListener ('mouseout', () => {
    // Troca o texto pra "Hello, World"
    text [0].textContent = 'Texto inicial'; 
})

// Adicionando um "ouvinte" de evento para disparar uma ação
button[0].addEventListener ('dblclick', () => {
    // Troca o texto pra "Hello, World"
    text [0].textContent = 'Clique Duplo';
})