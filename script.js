// script.js

// Troviamo gli elementi nel DOM
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

// Aggiungiamo un listener per il clic sul pulsante del menu
menuButton.addEventListener('click', function() {
    console.log('Menu button clicked'); // Verifica se il clic viene registrato
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

