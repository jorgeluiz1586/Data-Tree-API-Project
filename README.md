# Projeto de api de árvore de dados

Esse projeto trata-se da api do projeto Data Tree Project essa API oferece servidor e cli, o repositório do front-end está no https://github.com/jorgeluiz1586/Data-Tree-Project.

Essa api está contruída em Bun.js, Typescript, Hono, esse repositório há um arquivo docker-compose que pode ser usado porém é necessário subi primeiro o container da api

# Passo para rodar o projeto usando Docker (uma vez que tenha feito up no container da API)
- entre na raíz do projeto
- docker-compose up -d --build ou docker compose up -d --build
- sua aplicação vai funcionar na porta 5000 em localhost

# Passo para rodar o servidor do projeto usando Bun.js
- Na raíz do projeto rode o comando "bun install"
- rode o comando "bun run dev"

# Passo para rodar os testes do cli do projeto usando Bun.js
- Na raíz do projeto rode o comando "bun install"
- rode o comando "bun test"

# Passo para rodar o cli do projeto usando Bun.js
- na pasta dicts tem os arquivos de dados em formato json, confira esses arquivos
- Na raiz do projeto rode o comando: *bun run ./cli.ts --deep 2 "leões"* (Esse comando vai procurar na lista e sublistas a palavra leões e vai retornar de acordo com o nível de hieráquia que foi definido no --deep e mostrar quantas vezes foi mensionado)
- Se quiser métrica use --verbose: *bun run ./cli.ts --deep 2 --verbose "leões"* (Aqui mostrará métricas do desempenho)

Esse projeto é open source

Ao avaliador técnico esse projeto foi feito corrido porém encontra-se testado e funcionando, o repositório não ficou padrão com vários commit e branches apenas foi feito um único commit porque foi desenvolvido primeiro e o repositório criado posteriormente.
