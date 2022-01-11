// Função String.fromCharCode(), usamos números como parametros, para gerar carcteres aleatorios

// Vamos criar a função para gerar coisas aleatorias
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Função para gerar letras maiusculas
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));

// Função para gerar leras minusculas
const geraMinuscula = () => String.fromCharCode(rand(97, 123));

// Função para gerar números
const geraNumeros = () => String.fromCharCode(rand(49, 58));

// Variavel para armazenar os símbolos
const simbolo = ",.;~^[]{}!@#$%*()_+=-";

// Função para gerar os simbolos
// Onde pegamos um indice aleatorio, através da função rand, definindo '0' como inicio até o comprimento
const geraSimbolo = () => simbolo[rand(0, simbolo.length)];

// Funçao para gerar senha
// Iremos add flags para definir o que iremos gerar
// Iremos exportar a função, pois precisamos dela fora do modulo
export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  // Iremos criar uma variavel para embutir nesse array
  const senhaArray = [];
  // Iremos garantir que a flag 'qtd' será do tipo number
  qtd = Number(qtd);
  // Iremos criar um for para quantidade de vezes que pedir para as senhas serem geradas
  // Iremos embutir cada caractere gerado na ordem, conforme as funções criadas a cada volta do laço
  for (let i = 0; i < qtd; i++) {
    // Iremos fazer uma avaliação de curto circuito
    // Se a flag for 'true' irá executar o codigo, se for 'false' não vai executar o código
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumeros());
    simbolos && senhaArray.push(geraSimbolo());
  }
  // Usamos o metodo join() para unir o resultado sem nenhum espaçamento.
  // Juntamente com o metodo slice() para fatiar o resultado a partir de 0 até a 'qtd' passada como parametro
  return senhaArray.join("").slice(0, qtd);
}
