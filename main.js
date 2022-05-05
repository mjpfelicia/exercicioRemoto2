// Considere a quantidade de alunos presentes na sala,
// percorra do zero até o número total de alunos e retornar os seguintes resultados:
// se o número for par, escreva 'par' e o número correspondente.
// se o número for ímpar, escreva 'ímpar' e o número correspondente.
// se o número for zero, escreva 'zero' e o número correspondente.



for (let alunos = 0; alunos <= 17; alunos++) {

    if (alunos % 2 == 0 && alunos != 0) {
        console.log(`${alunos} Números Par`);
    } else if (alunos % 2 == 1) {
        console.log(`${alunos}  Números Impar`);
    } else if (alunos == 0) {
        console.log(`${alunos} e zero`);
    }
}