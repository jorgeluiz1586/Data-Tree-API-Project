export  const obterChaveValorEmColunas = (key: string, value: string) => {
  let line = "--------------------------------";
  let space = "                              ";
  let wall = "|";
  return line+line+"\n"+wall+(" "+key + space.slice(key.length+1))+wall+" "+(value + space.slice(value.length))+wall+"\n"+line+line+"\n"
}
