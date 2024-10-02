const readline = require('readline');

// Configuração do readline para capturar as entradas do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular saldo e   nível
function calcularSaldo(vitorias, derrotas, nome) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Define o nível baseado na quantidade de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Exibe o resultado com o saldo de vitórias e o nível
    console.log(`O Herói ${nome} tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Captura o nome do herói
rl.question('Qual é o nome do herói? ', (nome) => {
    // Captura as vitórias e derrotas
    rl.question('Quantas vitórias e derrotas (separadas por espaço)? ', (input) => {
        const [vitorias, derrotas] = input.split(' ').map(Number); // Divide a entrada e converte para números

        // Chama a função calcularSaldo com os valores capturados
        calcularSaldo(vitorias, derrotas, nome);

        // Fecha a interface de leitura
        rl.close();
    });
});
