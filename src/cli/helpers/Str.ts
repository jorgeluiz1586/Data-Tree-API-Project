import { PalavraRepetidaInterface } from "../interfaces/PalavraRepetidaInterface";

export function textoEmArray(texto: string): string[] {
  return texto.split(/\s+/);
}

export function contabilizarRepeticoes(palavras: string[]): PalavraRepetidaInterface[] {
  const repetidas: PalavraRepetidaInterface[] = [];
  
  palavras.forEach((palavra, indice) => {
    if (repetidas.some((repetida) => repetida.palavra === palavra)) {
      const repetida = repetidas.find((repetida) => repetida.palavra === palavra);
      repetida!.replicas++;
      repetida!.posicoes.push(indice);
    } else {
      repetidas.push({
        palavra,
        replicas: 1,
        posicoes: [indice],
      });
    }
  });
  
  return repetidas;
}
