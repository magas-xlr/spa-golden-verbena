
document.addEventListener('DOMContentLoaded', function () {

    const btnEnviar = document.querySelector('button');
    const radios = document.querySelectorAll('input[name="voto"]');
    const mensagemErro = document.getElementById('mensagemErro');
    function verificarSelecao() {
        const Selecionada = Array.from(radios).some(radio => radio.checked);
        if (Selecionada) {
            btnEnviar.disabled = false;
            mensagemErro.style.display = 'none'; // Esconde a mensagem de erro quando uma opção é selecionada
        } else {
            btnEnviar.disabled = true;
            mensagemErro.style.display = 'block'; // Mostra a mensagem de erro quando nenhuma opção é selecionada
        }
    }
    radios.forEach(radio => {
        radio.addEventListener('change', verificarSelecao);
    });
    verificarSelecao();
});
