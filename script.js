// Seleciona o botão e o menu
const menuButton = document.querySelector('.menu-button');
const menu = document.getElementById('menu');

// Adiciona o evento de clique ao botão
menuButton.addEventListener('click', () => {
    // Alterna a exibição do menu
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex'; // Mostra o menu
    } else {
        menu.style.display = 'none'; // Esconde o menu
    }
});