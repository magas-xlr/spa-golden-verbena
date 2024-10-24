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
    const button = document.getElementById('btnSend');

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

        label.htmlFor = option.id;
        label.textContent = option.description;

        section.appendChild(input);
        section.appendChild(label);
        container.appendChild(section);

        const url = new URL(window.location.href);
        const checked = url.searchParams.get('vote') === option.id;

        input.id = option.id;
        input.checked = checked;
        input.classList.add('mr-2');

        const radioChecked = document.querySelector('input[name="voto"]:checked');
        if (radioChecked) {
            unlockButton();
            if (button.getAttribute('aria-disabled') === 'false') {
                button.click();
            }
        } else {
            button.setAttribute('aria-disabled', 'true');
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const radioSelected = document.querySelector('input[name="voto"]:checked');
            if (!radioSelected) {
                event.preventDefault();
                erroMessage();
            }
        }
    });

    button.addEventListener('click', erroMessage);

    document.querySelectorAll('input[name="voto"]').forEach(radio => {
        radio.addEventListener('change', () => {
            checkSelection(radio);
        });
    });
});

function erroMessage() {
    const radioSelected = document.querySelectorAll('input[name="voto"]');
    const urlQuery = Array.from(radioSelected).find(radio => radio.checked);
    const form = document.querySelector('form');

    const existingError = form.querySelector('strong');
    if (existingError) {
        form.removeChild(existingError);
    }

    if (!urlQuery) {
        const strong = document.createElement('strong');
        strong.textContent = 'Selecione uma opção antes de enviar.';
        strong.classList.add('has-text-danger');
        form.appendChild(strong);
    }
}

function unlockButton() {
    const activateButton = document.getElementById('btnSend');
    if (activateButton) {
        activateButton.setAttribute('aria-disabled', 'false');
        activateButton.disabled = false;
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
