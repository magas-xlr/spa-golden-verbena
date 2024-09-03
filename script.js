// Função reutilizável fora do escopo
function verificarSelecao(opcaoSelecionada, btnEnviar, mensagemErro) {
    const selecionada = Array.from(opcaoSelecionada).some(opcaoSelecionada => opcaoSelecionada.checked);
    btnEnviar.disabled = !selecionada; 
    if (selecionada) {
        mensagemErro.classList.add('is-hidden');
    } else {
        mensagemErro.classList.remove('is-hidden');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const btnEnviar = document.getElementById('btnEnviar');
    const opcaoSelecionada = document.querySelectorAll('input[name="voto"]');
    const mensagemErro = document.getElementById('mensagemErro');
    opcaoSelecionada.forEach(radio => {
        radio.addEventListener('change', function () {
            verificarSelecao(opcaoSelecionada, btnEnviar, mensagemErro);
        });
    });
    verificarSelecao(opcaoSelecionada, btnEnviar, mensagemErro);
});
