var listaDePacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < listaDePacientes.length; ++i) {
    var paciente = listaDePacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 400) {
        pesoValido = false;
        tdPeso.textContent = "Peso Inválido";
        tdPeso.classList.add("paciente-invalido");

        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = "Erro"
    }

    if (altura <= 0 || altura >= 3) {
        alturaValida = false;
        tdAltura.textContent = "Altura Inválida";
        tdAltura.classList.add("paciente-invalido");

        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = "Erro"

    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);

        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = imc;
    }

}

function calculaImc(p, a) {
    var imc = 0;
    imc = p / (a * a);
    return imc.toFixed(2);
}
