let pessoa = {
    nome: "Fernando",
    idade: 36,
    time: "Inter",
    casado: true,
    endereco: {

        referencias: ["ref 1", "ref 2"]
    }
};

let pessoa2 = {
    nome: "Guê",
    idade: 36,
    time: "Inter",
    casado: true
};

let pessoas = [pessoa, pessoa2];

function imprimeReferencias(pessoas) {
    for (const pessoa of pessoas) {

        if (pessoa && pessoa.endereco && pessoa.endereco.referencias && pessoa.endereco.bairro && pessoa.endereco.bairro.trim()) {
            for (const referencia of pessoa.endereco.referencias) {
                console.log(referencia);   
            }
        }
    }
}

imprimeReferencias(pessoas);