
function verificarSelecao(opcoesSelecionadas, btnEnviar, mensagemErro) {
    const selecionada = Array.from(opcoesSelecionadas).some(opcao => opcao.checked);
    btnEnviar.disabled = !selecionada;

    if (selecionada) {
        mensagemErro.classList.add('is-hidden'); 
    } else {
        mensagemErro.textContent = 'Selecione uma opção antes de enviar.';
        mensagemErro.classList.remove('is-hidden'); 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btnEnviar = document.getElementById('btnEnviar');
    const opcoesSelecionadas = document.querySelectorAll('input[name="voto"]');
    const mensagemErro = document.getElementById('mensagemErro');

    verificarSelecao(opcoesSelecionadas, btnEnviar, mensagemErro);

    opcoesSelecionadas.forEach(radio => {
        radio.addEventListener('change', () => {
            verificarSelecao(opcoesSelecionadas, btnEnviar, mensagemErro);
        });
    });
});
