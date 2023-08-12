const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    if (number <= 3) {
        return true;
    }

    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

function printPrimeStatus(number) {
    if (isPrime(number)) {
        console.log("1 - O número é primo.");
    } else {
        console.log("0 - O número não é primo.");
    }
}

rl.question("Digite um número: ", function(inputNumber) {
    const number = parseInt(inputNumber);
    printPrimeStatus(number);
    rl.close();
});
