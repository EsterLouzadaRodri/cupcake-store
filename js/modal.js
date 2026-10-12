//entrada de dados
const modal = document.getElementById('modal');

//PROCESSAMENTO
function abrirModal(){
    modal.classList.add('visivel');
}
function fecharModal(){
    //remove classe "visivel" ao elemento modal
    modal.classList.remove('visivel')
}

//saida
//executa fecharModal ao clicar no elemento "modal" 
window.addEventListener('click', (event) => {
    //verifica se o alvo do clique é o elemento moldal
    if(event.target === modal){
        fecharModal();
    }
});