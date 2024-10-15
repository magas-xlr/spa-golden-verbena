document.addEventListener('DOMContentLoaded', () => {

    const options = [
        {
            description: 'Ótimo',
            id: 'otimo',
        },
        {
            description: 'Bom, mas pode melhorar',
            id: 'bom',
        },
        {
            description: 'Não gostei',
            id: 'nao-gostei',
        },
    ];
    const container = document.getElementById('package-options');

    options.forEach((option, index) => {

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'voto';
        input.value = option.description;

        if (index === 0) {
            input.setAttribute('required', 'true');
        }

        const label = document.createElement('label');
        const section = document.createElement('section');
        const button = document.getElementById('btnSend');

        label.htmlFor = option.id;
        label.textContent = option.description;

        section.appendChild(input);
        section.appendChild(label);
        container.appendChild(section);

        const url = new URL(window.location.href);
        const id = option.id;
        input.type = 'radio';
        input.id = id;
        input.checked = url.searchParams.get('vote') === id;
        input.classList.add('mr-2');

        button.setAttribute('aria-disabled', 'true');
        if (input.checked) {
            unlockButton();
        }

        document.addEventListener('keydown', (event) => {

            if (event.key === 'Enter') {
                event.preventDefault();
                button.click();
            }
        });

    });

    document.getElementById('btnSend').addEventListener('click', erroMessage);

    document.querySelectorAll('input[name="voto"]').forEach(radio => {
        radio.addEventListener('change', () => {
            checkSelection(radio);
        });
    });

});
botao.addEventListener('click', (e) => {
    if (botao.getAttribute('aria-disabled') === 'true') {
        e.preventDefault();
        console.log('Botão está desativado.');
    }
});
function erroMessage() {
    const radioSelected = document.querySelectorAll('input[name="voto"]');
    const urlQuery = Array.from(radioSelected).find(radio => radio.checked);

    if (!urlQuery) {
        const strong = document.createElement('strong');
        const text = document.createTextNode('Selecione uma opção antes de enviar.');
        strong.appendChild(text);
        strong.classList.add('has-text-danger');
        document.querySelector('form').appendChild(strong);

    }
}

function unlockButton() {
    const activateButton = document.getElementById('btnSend')

    if (activateButton) {
        activateButton.setAttribute('aria-disabled', 'false');
    }
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
