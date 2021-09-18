
function removeAtributosDisabled(){
    if(maiusculas.getAttribute("disabled") !== null){
        maiusculas.removeAttribute("disabled");
    }
    if(minusculas.getAttribute("disabled") !== null){
        maiusculas.removeAttribute("disabled");
    }
    if(numeros.getAttribute("disabled") !== null){
        numeros.removeAttribute("disabled");
    }
    if(especiais.getAttribute("disabled") !== null){
        especiais.removeAttribute("disabled");
    }
}

function todosOsCaracteres(){
    let minusculas = document.getElementById("minusculas");
    let maiusculas = document.getElementById("maiusculas");
    let numeros = document.getElementById("numeros");
    let especiais = document.getElementById("especiais");

    removeAtributosDisabled();

    minusculas.checked = true;
    maiusculas.checked = true;
    numeros.checked = true;
    especiais.checked = true;
}

function alteraCampoSenha(senha){
    document.getElementById("campoSenha").value = senha;
}

function facilDePronunciar(){
    let numeros = document.getElementById("numeros");
    let especiais = document.getElementById("especiais");

    numeros.checked = false;
    especiais.checked = false;

    numeros.setAttribute("disabled", "");
    especiais.setAttribute("disabled","");
}

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
function geraSenha(querRepetidos){
    let tamanho = parseInt(document.getElementById("inputTamanho").value);
    let listas = verificaChecks();
    let senha = "";

    if(querRepetidos === true){
        for(let i = 0;i < tamanho;i++){
            let opcoes = Math.floor(Math.random() * listas.length);
            
            if(listas[opcoes].length===0 || listas[opcoes] === null || listas[opcoes] === NaN){
                listas.splice(opcoes,1);
                console.log(listas);
            }else{
                let caractere = listas[opcoes].charAt(Math.floor(Math.random()*listas[opcoes].length));
                let parte = listas[opcoes].split(caractere);
                removeAtributosDisabled();
                listas[opcoes] = parte[0] + parte[1];
                senha += caractere;
            }
        }
    
        return senha;
    }else{
        for(let i = 0;i < tamanho;i++){
            let opcoes = Math.floor(Math.random() * listas.length);
            senha += listas[opcoes].charAt(Math.floor(Math.random()*listas[opcoes].length));
        }
    
        return senha;
    }
};

//inicializador
window.onload = function(){
    let rangeTamanho = document.getElementById("rangeTamanho");
    let inputTamanho = document.getElementById("inputTamanho");
    let todosOsCar = document.getElementById("todosOsCaracteres");
    let facilDeP = document.getElementById("facilDePronunciar");
    let semCaracteresR = document.getElementById("semCaracteresRepetidos");
    
    todosOsCar.addEventListener("change",function(){
        todosOsCaracteres();
        alteraCampoSenha(geraSenha(false));
    });

    facilDeP.addEventListener("change", function(){
        facilDePronunciar()
        alteraCampoSenha(geraSenha(false));
    });

    semCaracteresR.addEventListener("change", function(){
        alteraCampoSenha(geraSenha(true));
    });

    document.getElementById("minusculas").addEventListener("click",function(){
        alteraCampoSenha(geraSenha(false));
    });
    document.getElementById("maiusculas").addEventListener("click",function(){
        alteraCampoSenha(geraSenha(false));
    });
    document.getElementById("numeros").addEventListener("click",function(){
        alteraCampoSenha(geraSenha(false));
    });
    document.getElementById("especiais").addEventListener("click",function(){
        alteraCampoSenha(geraSenha(false));
    });
    
    document.getElementById("botao").addEventListener("click", function(){
        if(facilDeP.checked === true){
            facilDePronunciar();
            alteraCampoSenha(geraSenha(false));
        }else if(todosOsCar.checked === true){
            todosOsCaracteres();
            alteraCampoSenha(geraSenha(false));
        }else if(semCaracteresR.checked === true){
            alteraCampoSenha(geraSenha(true));
        }else{
            alteraCampoSenha(geraSenha(false));
        }
    });

    rangeTamanho.addEventListener("change", function(){
        inputTamanho.value = rangeTamanho.value;
        alteraCampoSenha(geraSenha(false));
    });

    inputTamanho.addEventListener("change", function(){
        rangeTamanho.value = inputTamanho.value;
        alteraCampoSenha(geraSenha(false));
    });

    todosOsCaracteres();
    alteraCampoSenha(geraSenha(false));
};