// Busca da API 
function buscarCep() {
  const cep = document.getElementById("cep").value;

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json())
    .then(dados => {
      document.getElementById("rua").value = dados.logradouro;
      document.getElementById("bairro").value = dados.bairro;
      document.getElementById("cidade").value = dados.localidade;
      document.getElementById("estado").value = dados.uf;
    })
    .catch(erro => console.log("Erro ao buscar CEP:", erro));
}

// Modo Escuro/Claro
    const botao = document.querySelector('#meuBotao');

    // Alternar modo escuro (aplica classe no body)
    botao.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// Efeito de escrita no titulo 
const titulo = document.querySelector(".titulo");

const texto = "ViaCep";
let i = 0;
let escrevendo = true;

function animarTitulo(){

    if(escrevendo){
        if(i < texto.length){
            titulo.textContent = texto.substring(0, i + 1) + "|";
            i++;
        }else{
            escrevendo = false;
        }
    } 
    
    else{
        if(i > 0){
            titulo.textContent = texto.substring(0, i - 1) + "|";
            i--;
        }else{
            escrevendo = true;
        }
    }

    setTimeout(animarTitulo,200);
}

animarTitulo();