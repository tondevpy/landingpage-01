const botao = document.getElementById('seta-esquerda');
const botao2 = document.getElementById('seta-direita');
const imagem = document.getElementById('foto1');
const imagem2 = document.getElementById('foto2');

let valor = 0;

botao.addEventListener('click', function() {
    if(valor == 0){
        imagem.style.display = 'block';
        imagem2.style.display = 'none';
        valor += 1
    }else if(valor == 1){
        imagem.style.display = 'none';
        imagem2.style.display = 'block';
        valor -= 1;
    }
    
});

botao2.addEventListener('click', function() {
    if(valor == 0){
        imagem.style.display = 'block';
        imagem2.style.display = 'none';
        valor += 1
    }else if(valor == 1){
        imagem.style.display = 'none';
        imagem2.style.display = 'block';
        valor -= 1;
    }
});