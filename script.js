
document.addEventListener('DOMContentLoaded', function () {

    const btnEnviar = document.querySelector('button');
    const radios = document.querySelectorAll('input[name="voto"]');
    function verificarSelecao() {
        const Selecionada = Array.from(radios).some(radio => radio.checked);
        if (Selecionada) {
            btnEnviar.disabled = false;
        } else {
            btnEnviar.disabled = true;
        }
    }
    radios.forEach(radio => {
        radio.addEventListener('change', verificarSelecao);
    });
    verificarSelecao();
});
