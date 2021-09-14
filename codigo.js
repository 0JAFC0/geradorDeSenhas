
// verifica os inputs checks e retorna uma lista com as opções escolhidas.
function verificaChecks(){

    let minusculas = document.forms[0].minusculas;
    let maiusculas = document.forms[0].maiusculas;
    let numeros = document.forms[0].numeros;
    let especiais = document.forms[0].especiais;
    const listas = [];

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

    if(listas === null){
        listas.push("abcdefghijklmnopqrstuvwxyz");
    }
    console.log(listas)
    return listas;
}

// gera a senha com as opções escolhidas.
function geraSenha(){
    //variaveis
    let divAreaSenhas = document.getElementById("divAreaSenhas");
    let campoDeSenha = "";
    let areaDeSenhas;
    let tamanho = parseInt(document.forms[0].campo2.value);
    let listas = verificaChecks();

    campoDeSenha = "";
    for(var i = 0;i < tamanho;i++){
        let opcoes = Math.floor(Math.random() * listas.length);
        campoDeSenha += listas[opcoes].charAt(Math.floor(Math.random()*listas[opcoes].length));
    }

    //configurações dos atributos da textarea de senhas
    areaDeSenhas = document.createElement("textarea");
    areaDeSenhas.setAttribute("id","areaDeSenhas");
    areaDeSenhas.setAttribute("cols",tamanho);
    areaDeSenhas.setAttribute("rows","10");

    if(document.getElementById("areaDeSenhas") !== null){
        document.getElementById("areaDeSenhas").textContent += " " + campoDeSenha;
    }else{
        areaDeSenhas.textContent = campoDeSenha + " ";
        divAreaSenhas.appendChild(areaDeSenhas);
    }
    document.getElementById("areaDeSenhas").textContent.replace(/\s/g,"\n");
    
}

//main
document.addEventListener("submit", function(){
    geraSenha();
});