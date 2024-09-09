function send() {
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

function checkSelection(radio) {
    document.getElementById('btnSend').disabled = false;
    const strong = document.querySelector('strong');
    if (radio.value) {
        document.querySelector('form').removeChild(strong);
        document.getElementById('btnSend').disabled = false;
    }
}

function receiveURL() {
    const url = new URL(window.location.href);
    const parameter = url.searchParams.get('vote');
    const radios = document.querySelectorAll('input[name="voto"]');

    radios.forEach(radio => {
        if (radio.id === parameter) {
            radio.checked = true;
        }
    });
}

window.onload = receiveURL;

document.getElementById('btnSend').addEventListener('click', send);

document.querySelectorAll('input[name="voto"]').forEach(radio => {
    radio.addEventListener('change', () => {
        checkSelection(radio);
    });
});