import { ItemInterface } from "./interfaces/ItemInterface";
import { textoEmArray, contabilizarRepeticoes } from "./helpers/Str";
import { obterChaveValorEmColunas } from "./helpers/Performance";
import { Query } from "./helpers/Query";

const path = "./dicts/data.json";
const file = Bun.file(path);

let contents = "";

(async () => file.json())()
  .then((response) => { contents = response; run(); });

let args = [...Bun.argv].slice(2);

let hasDeep = args.some((arg) => arg === '--deep');
let hasVerbose = args.some((arg) => arg === '--verbose');

let deep = {
  name: args.find((arg) => arg === '--deep'),
  value: hasDeep ? args[args.indexOf('--deep') + 1] : 1,
};

let verbose = {
  name: args.find((arg) => arg === '--verbose'),
  value: hasVerbose ? true : false,
}

let input = args.filter((arg) => (arg !== '--deep' && arg !== '--verbose') && (arg !== args[args.indexOf('--deep') + 1]))[0];


const run = () => {
  const t01 = performance.now();
  const palavras = textoEmArray(input);
  const repetidas = contabilizarRepeticoes(palavras);
  const t02 = performance.now();

  let dataThree = contents as unknown as ItemInterface[];
  let foundWords: string[] = [];
  const t0 = performance.now();
  const query = new Query();
  repetidas.forEach((item) => {
    let found = query.searchRecursively(item.palavra, dataThree, deep);
    if (found !== null && (`${found.item.id}` !== '0') && found.item.name.toLowerCase() === item.palavra.toLowerCase() && found?.deepItem !== undefined) {
      foundWords.push(found?.deepItem + " = " + item.replicas);
    }
  });
  const t1 = performance.now();
  
  console.log(foundWords!.length > 0 ? foundWords : "0");

  if (verbose.value) {
    let loadingTime = `${t02 - t01}`;
    loadingTime = loadingTime.split('.')[0] +'.'+ loadingTime.split('.')[1].slice(0,2)
    let phraseTerificationTimeInMilliseconds = `${t1 - t0}`;
    phraseTerificationTimeInMilliseconds = phraseTerificationTimeInMilliseconds.split('.')[0] +'.'+ phraseTerificationTimeInMilliseconds.split('.')[1].slice(0,2)
    console.log(obterChaveValorEmColunas("Tempo de carregamento", `${loadingTime}ms`)+obterChaveValorEmColunas("Tempo de verificação da frase", `${phraseTerificationTimeInMilliseconds}ms`));
  }
}

