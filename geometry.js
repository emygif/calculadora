const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
const inputsContainer = document.getElementById('inputs');

function updateFields() {
    const lados = document.getElementById('lados').value;
    inputsContainer.innerHTML = '';

    if (lados == 3) {
        inputsContainer.innerHTML = `
            <div class="input">
                <label for="base">Base:</label>
                <input type="number" id="base" placeholder="Digite a base">
            </div>
            <div class="input">
                <label for="altura">Altura:</label>
                <input type="number" id="altura" placeholder="Digite a altura">
            </div>
        `;
    } else if (lados == 4) {
        inputsContainer.innerHTML = `
            <div class="input">
                <label for="lado">Lado:</label>
                <input type="number" id="lado" placeholder="Digite o lado">
            </div>
        `;
    } else if (lados == 5) {
        inputsContainer.innerHTML = `
            <div class="input">
                <label for="apotema">Apótema:</label>
                <input type="number" id="apotema" placeholder="Digite o apótema">
            </div>
            <div class="input">
                <label for="lado">Lado:</label>
                <input type="number" id="lado" placeholder="Digite o lado">
            </div>
        `;
    }
}

function calcularArea() {
    const lados = document.getElementById('lados').value;
    let area = 0;

    if (lados == 3) {
        const base = parseFloat(document.getElementById('base').value);
        const altura = parseFloat(document.getElementById('altura').value);
        if (!isNaN(base) && !isNaN(altura)) {
            area = 0.5 * base * altura;
        }
    } else if (lados == 4) {
        const lado = parseFloat(document.getElementById('lado').value);
        if (!isNaN(lado)) {
            area = lado * lado;
        }
    } else if (lados == 5) {
        const apotema = parseFloat(document.getElementById('apotema').value);
        const lado = parseFloat(document.getElementById('lado').value);
        if (!isNaN(apotema) && !isNaN(lado)) {
            area = 5 * lado * apotema / 2;
        }
    }

    resultado.textContent = area ? `Área: ${area.toFixed(2)}` : 'Preencha todos os campos corretamente!';
}

calcular.addEventListener('click', calcularArea);
updateFields();
