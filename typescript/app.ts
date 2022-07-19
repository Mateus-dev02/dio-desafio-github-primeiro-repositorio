let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumero(numero1: Number, numero2: Number, devePrintar: Boolean, frase: String) {
    let resultado = Number(numero1) + Number(numero2)
    if (devePrintar) {
         console.log((frase) + (resultado))
    }
    return Number(numero1) + Number(numero2)
}

let devePrintar = true;
let frase = 'O valor é: '

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase))
        }
    })
}