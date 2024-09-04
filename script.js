function enviar() {
    const strong = document.createElement('strong');
    const text = document.createTextNode('Selecione uma opção antes de enviar.');
    strong.appendChild(text);
    strong.classList.add('has-text-danger');
    document.querySelector('form').appendChild(strong);
}

function verificarSelecao(radio) {
    document.getElementById('btnEnviar').disabled = false;
    const strong = document.querySelector('strong');
    if (radio.value) {
        document.querySelector('form').removeChild(strong);
    }
}

document.getElementById('btnEnviar').addEventListener('click', enviar());

document.querySelectorAll('input[name="voto"]').forEach(radio => {
    radio.addEventListener('change', () => {
        verificarSelecao(radio);
    });
});