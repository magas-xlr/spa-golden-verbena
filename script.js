function erroMessage() {
    const radioSelected = document.querySelectorAll('input[name="voto"]');
    const option = false;

    radioSelected.forEach((radio) => {
        if (radio.checked) {
            option = true;
        }
    });

    if (!option) {
        const strong = document.createElement('strong');
        const text = document.createTextNode('Selecione uma opção antes de enviar.');
        strong.appendChild(text);
        strong.classList.add('has-text-danger');
        document.querySelector('form').appendChild(strong);
        document.getElementById('btnSend').disabled = true;
    }
}

function send() {
    const strong = document.createElement('strong');
    const text = document.createTextNode('Selecione uma opção antes de enviar.');
    strong.appendChild(text);
    strong.classList.add('has-text-danger');
    document.querySelector('form').appendChild(strong);

}

function checkSelection(radio) {

    if (radio.value) {
        const strong = document.querySelector('strong');
        document.querySelector('form').removeChild(strong);
        document.getElementById('btnSend').disabled = false;
    }
}

function receiveURL() {
    const url = new URL(window.location.href);
    const parameter = url.searchParams.get('vote');
    const radios = document.querySelectorAll('input[name="voto"]');

    if (parameter) {
        const radio = document.getElementById(parameter);

        if (radio && radio.type === 'radio') {
            radio.checked = true;
        }
    }
}

window.onload = receiveURL;

document.getElementById('btnSend').addEventListener('click', send);

document.querySelectorAll('input[name="voto"]').forEach(radio => {
    radio.addEventListener('change', () => {
        checkSelection(radio);
    });
});