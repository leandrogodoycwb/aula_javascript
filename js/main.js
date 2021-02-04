
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("agradecimento"));
    //alert("obrigado por clicar")
}
function redirecionar(){
    window.open("https://www.linkedin.com/in/leandrogodoycwb/");
   // window.location.href = "https://www.linkedin.com/in/leandrogodoycwb/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar testo");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function FuncaoChange(elemento){
    console.log(elemento.value)
}
/*
function validaIdade(n1, n2){
    return n1 + n2;
}*/
/*
var validar = 0;

function validaIdade(idade){
    if ( idade>= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);*/

//alert(soma(5, 10));

/*var d = new Date();
alert|(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/



/*var count = 0;
for(count=0; count <=5; count++){
    alert(count);
};*/




/*var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count = count + 1;
};*/


/*var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/


/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/



//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));







/*var nome = "Leandro Godoy";
var n1= 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
*/