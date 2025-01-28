function toggleTheme() {
    const body = document.body;
    const img = document.getElementById('floatingImage');
    const icon = document.getElementById('themeIcon');

    body.classList.toggle('light');
    if (body.classList.contains('light')) {
        img.src = ''; // Imagem para o tema claro
        icon.src = "fa-solid fa-sun"; // Ícone para o tema claro
    } else {
        img.src = 'Fadel.png'; // Imagem para o tema escuro
        icon.src = 'icon-dark.png'; // Ícone para o tema escuro
    }
}

function startCalculator() {
    // Redirecionar para a página da calculadora
    window.location.href = "Calculadora.html"; // Exemplo de redirecionamento
}
