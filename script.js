document.addEventListener('DOMContentLoaded', function () {
    const options = [
        {
            description: 'Ótimo',
            id: 'otimo',
        },
        {
            description: 'Bom',
            id: 'bom',
        },
        {
            description: 'Não gostei',
            id: 'nao-gostei',
        },
    ];

    const container = document.getElementById('enquete_options');

    options.forEach(option => {
        // Criando o input (radio button)
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'voto';
        input.id = options.id;
        input.value = options.id;
        input.required;

        // Criando o label
        const label = document.createElement('label');
        label.htmlFor = option.id;
        label.textContent = option.description;

        // Adicionando os elementos ao container
        container.appendChild(input);
        container.appendChild(label);
        container.appendChild(document.createElement('br'));
    });



function erroMessage() {
    const radioSelected = document.querySelectorAll('input[name="voto"]');
    const options = false;

    radioSelected.forEach((radio) => {
        if (radio.checked) {
            options = true;
        }
    });

    if (!options) {
        const strong = document.createElement('strong');
        const text = document.createTextNode('Selecione uma opção antes de enviar.');
        strong.appendChild(text);
        strong.classList.add('has-text-danger');
        document.querySelector('form').appendChild(strong);
    }
}

function unlockButton() {
    const activateButton = document.querySelector('.disabled');
    activateButton.classList.remove('disabled');
}

function checkSelection(radio) {

    if (radio.value) {
        const strong = document.querySelector('strong');
        if (strong) {
            document.querySelector('form').removeChild(strong);
        }
        unlockButton();
    }
}

function receiveURL() {
    const url = new URL(window.location.href);
    const parameter = url.searchParams.get('vote');

    const radio = document.getElementById(parameter);
    if (radio && radio.type === 'radio') {
        radio.checked = true;
        unlockButton();
    }
}

window.onload = receiveURL;

document.getElementById('btnSend').addEventListener('click', erroMessage);

document.querySelectorAll('input[name="voto"]').forEach(radio => {
    radio.addEventListener('change', () => {
        checkSelection(radio);
    });
});

});