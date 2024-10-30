let somar=(a,b)=>a+b;
let subtrair = (a,b) =>a-b;
let dividir = (a,b) => a/b;
let multiplicar = (a,b) => a*b;


let verificaOperador =(op,a,b) =>{
    let resultado = null;
    if (op == "+"){
        resultado = calcular(somar,a,b)
    }else if (op == "-"){
        resultado = calcular(subtrair,a,b)
    }else if (op == "/"){
        resultado = calcular(dividir,a,b);
    }else if (op == "*"){
        resultado = calcular(multiplicar,a,b);
    }
    return resultado;
}

let calcular = (funcao,a,b)=>{
    let resultado = funcao(a,b);
    return resultado;
}

let botao = document.getElementById("botao");
botao.addEventListener("click",()=>{

    document.getElementById("divResultado").innerHTML="";
    let valor1 = Number.parseInt(document.querySelector("#input1").value); 
    let valor2 = Number.parseInt(document.querySelector("#input2").value);
    let op = document.querySelector("#input3").value;

 // verificar e testar condições
    if(isNaN(valor1) || isNaN(valor2)){
        window.alert("[ERRO]: Verifique se você está passando os números corretamente");
        document.querySelector("#input1").value= "";
        document.querySelector("#input2").value = "";
        document.querySelector("#input3").value="";
        return;

    }else if(!(op === "+"|| op === "-" || op === "/" || op === "*")){
        window.alert("[ERRO]: Verifique se você está usando operado correto (+, -, /, *)");
        document.querySelector("#input3").value="";
        return;

    }else if(op =="/" && valor2 == 0){
        window.alert("[ERRO]: Não existe divisão por zero");
        document.querySelector("#input1").value= "";
        document.querySelector("#input2").value = "";
        document.querySelector("#input3").value="";
        return;
        
    }else{
    
    let resultado= verificaOperador(op,valor1,valor2);
    adicionarTag(valor1,op, valor2, resultado)
    document.querySelector("#input1").value= "";
    document.querySelector("#input2").value = "";
    document.querySelector("#input3").value="";
    }
})


let adicionarTag = (...args)=>{
    let tagP = `<h5 class ="mt-5 text-center">Resultado de ${args[0]} ${args[1]} ${args[2]} = ${args[3]}.</h5>`;
    let divResultado = document.getElementById("divResultado");
    divResultado.insertAdjacentHTML('afterbegin', tagP);
}




