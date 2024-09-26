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
    const container = document.getElementById('enquete-options');

    options.forEach(option => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'voto';
        input.id = option.id;
        input.value = option.id;
        input.setAttribute('required', option.id === 'otimo' ? 'true' : '');

        const label = document.createElement('label');
        label.htmlFor = option.id;
        label.textContent = option.description;
        container.appendChild(input); 
        container.appendChild(label);

        const url = new URL(window.location.href);
        const parameter = url.searchParams.get('vote');
        const radio = document.getElementById(parameter);

        if (radio && radio.type === 'radio') {
            radio.checked = true;
            unlockButton();
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

    document.getElementById('btnSend').addEventListener('click', erroMessage);

    document.querySelectorAll('input[name="voto"]').forEach(radio => {
        radio.addEventListener('change', () => {
            checkSelection(radio);
        });
    });

});