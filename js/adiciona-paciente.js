var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    console.log(paciente);

    var pacienteTr = montaTr(paciente);
    console.log(pacienteTr);

    var tbody = document.querySelector("#tabela-pacientes");
    tbody.appendChild(pacienteTr);
    form.reset();


});

function montaTr(p) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(p.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(p.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(p.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(p.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(p.imc, "info-imc")); return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}
