let altura = document.querySelector("#altura");
let peso = document.querySelector("#peso");
let imc = document.querySelector(".imc");
const calcularIMC = () => {
  if (altura.value != "" && peso.value != "") {
    let _altura = altura.value;
    let _peso = peso.value;
    let _imc = _peso / (_altura * _altura);
    imc.innerHTML = `Altura = ${_altura}, Peso = ${_peso} e o seu IMC é ${_imc.toFixed(
      2
    )}`;
  }
};
