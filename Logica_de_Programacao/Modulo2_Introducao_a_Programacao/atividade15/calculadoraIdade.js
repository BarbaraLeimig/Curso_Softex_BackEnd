const readline = require('readline-sync');

let validYear = false;

while (validYear == false) {
    try {

        let name = readline.question("Digite o seu nome completo: ");
        let year = readline.questionInt("Digite o ano em que voce nasceu: ");

        if (isNaN(year) == false) {

            if (year >= 1922 && year <= 2021) {

                validYear = true;
                let age = 2022 - year;

                console.log(`\nNome completo: ${name}`);
                console.log(`Voce completou ou completará ${age} anos em 2022.`);

            } else {

                validYear = false;
                throw new Error("\nO ano informado não se encontra entre 1922 e 2021");

            }
        } else {

            throw new Error("\nO Valor digitado não é um numero. Digite novamente!");

        }
    } catch (error) {
        console.error(error.message);
    }
}
