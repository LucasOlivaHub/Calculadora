// DOM //
const btnsCalculadora = document.querySelectorAll("#calc-numpad .botones");
const numerosCalculadora = document.getElementById("numeros");
const resultadoCalculadora = document.getElementById("resultado");

const reset = document.getElementById("reiniciar");
const borrar = document.getElementById("borrar");

const operaciones = document.querySelectorAll(".operaciones");
const resultado = document.getElementById("resultado");
const btnIgual = document.getElementById("btnIgual");
//

let botonPresionado;
let numerosCalcArr;
//let ultimoResultado;

//Eventos:

operaciones.forEach(operador => {
    operador.addEventListener("click", (e) => {
        if(!isNaN(ultimoResultado)) {
            console.log(resultadoCalculadora.innerText)
            numerosCalculadora.innerText += ultimoResultado;
        } 
    });
}); 

btnsCalculadora.forEach(btn => {
    btn.addEventListener("click", (e) => {
        ultimoResultado = "";
        botonPresionado = e.target
        numerosCalculadora.classList.remove("inactive");
        numerosCalculadora.innerText += botonPresionado.value;
        numerosCalcArr = numerosCalculadora.innerText;
        controlarCaracteres();
    });   
});

btnIgual.addEventListener("click", (e) => {
    darResultado(numerosCalcArr);
    ultimoResultado = resultadoCalculadora.innerText;
})


borrar.addEventListener("click", () => {
    let arrBorrar = numerosCalcArr.split("");
    arrBorrar.pop();
    arrNuevo = arrBorrar.slice().join("");
    numerosCalculadora.innerText = arrNuevo;
    numerosCalcArr = arrNuevo;
});


reset.addEventListener("click", () => {
    resetearCalculadora();
    resultadoCalculadora.innerText = 0;
    ultimoResultado = "";
});

//

//Funciones

function resetearCalculadora() {
    numerosCalculadora.classList.add("inactive");
    numerosCalculadora.innerText = "";
}

function darResultado(res) {
    resultado.innerText = eval(res);
    resetearCalculadora();
    
    btnsCalculadora.forEach(btn => {
        btn.addEventListener("click", () => {
                resultado.innerText = 0;
            });
        });
};

function controlarCaracteres() {
    let limite = numerosCalculadora.innerText;
    if (limite.length > 10) {
        alert("Alcanzaste el limite de caracteres");
        resetearCalculadora();
    }
}
