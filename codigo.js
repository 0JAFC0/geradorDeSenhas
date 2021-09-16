
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

//inicializador
window.onload = function(){
    let rangeTamanho = document.getElementById("rangeTamanho");
    let inputTamanho = document.getElementById("inputTamanho");
    
    document.getElementById("minusculas").addEventListener("click",function(){
        geraSenha();
    });
    document.getElementById("maiusculas").addEventListener("click",function(){
        geraSenha();
    });
    document.getElementById("numeros").addEventListener("click",function(){
        geraSenha();
    });
    document.getElementById("especiais").addEventListener("click",function(){
        geraSenha();
    });
    
    document.getElementById("botao").addEventListener("click", function(){
        geraSenha();
    });

    rangeTamanho.addEventListener("change", function(){
        inputTamanho.value = rangeTamanho.value;
        geraSenha();
    });

    inputTamanho.addEventListener("change", function(){
        rangeTamanho.value = inputTamanho.value;
        geraSenha();
    });

    geraSenha();
};