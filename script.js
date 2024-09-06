function enviar() {
    const valores = document.querySelectorAll('input[value=""]');
    
    if (valores) {
        const strong = document.createElement('strong');
        const text = document.createTextNode('Selecione uma opção antes de enviar.');
        strong.appendChild(text);
        strong.classList.add('has-text-danger');
        document.querySelector('form').appendChild(strong);
    }
}

function verificarSelecao(radio) {
    document.getElementById('btnEnviar').disabled = false;
    const strong = document.querySelector('strong');
    if (radio.value) {
        document.querySelector('form').removeChild(strong);
    }
}

function recebeURL() {
    const url = new URL(window.location.href);
    const parametro = url.searchParams.get('value');
    let valores = document.querySelectorAll('input[type="radio"]');
    document.getElementById('btnEnviar').disabled = false;

    valores.forEach(radio => {
        if (radio.value === parametro) {
            radio.checked = true;
            document.querySelector('form').removeChild(strong);
        }
    });
}

document.getElementById('btnEnviar').addEventListener('click', recebeURL(), enviar());

document.querySelectorAll('input[name="voto"]').forEach(radio => {
    radio.addEventListener('change', () => {
        verificarSelecao(radio);
    });
});






