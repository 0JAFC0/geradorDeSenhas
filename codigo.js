
// verifica os inputs checks e retorna uma lista com as opções escolhidas.
function verificaChecks(){

    let minusculas = document.getElementById("minusculas");
    let maiusculas = document.getElementById("maiusculas");
    let numeros = document.getElementById("numeros");
    let especiais = document.getElementById("especiais");
    let listas = [];

    if(minusculas.checked === true){
        listas.push("abcdefghijklmnopqrstuvwxyz");
    }
    if(maiusculas.checked === true){
        listas.push("abcdefghijklmnopqrstuvwxyz".toUpperCase());
    }
    if(numeros.checked === true){
       listas.push("123456789");
    }
    if(especiais.checked === true){
        listas.push("!@#$%*()_+=^~?");
    }

    return listas;
};

// gera a senha com as opções escolhidas.
function geraSenha(){
    //variaveis
    let campoDeSenha = document.getElementById("campoSenha");
    let tamanho = parseInt(document.getElementById("inputTamanho").value);
    let listas = verificaChecks();
    let senha = "";

    for(let i = 0;i < tamanho;i++){
        let opcoes = Math.floor(Math.random() * listas.length);
        senha += listas[opcoes].charAt(Math.floor(Math.random()*listas[opcoes].length));
    }
    campoDeSenha.value = senha;
};

//main
window.addEventListener("submit", function(){
    geraSenha();
});

//inicializador
window.onload = function(){
    let inputRange = document.getElementById("rangeTamanho");
    let inputTamanho = document.getElementById("inputTamanho");
    inputRange.addEventListener("change", function(){
        inputTamanho.value = inputRange.value;
    });

    inputTamanho.addEventListener("change", function(){
        inputRange.value = inputTamanho.value;
    });

    geraSenha();
};