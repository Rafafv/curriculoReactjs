# Currículo com Nodejs e Reactjs

<strong>Node API/backend</strong>

Requisitos 

- Nodejs

Dependências necessárias backend

* Body-parser - é um módulos capaz de converter o body da requisição para vários formatos -- npm install body-parser

* Concurrently - rode multiplos comandos -- npm install concurrently

* Mysql - para conectar no banco de dados -- npm install mysql

* Cors - Para autorizar o get -- npm install cors 

  
Navegue até o arquivo dbConfig.js,
altere as variaveis para conectar no seu banco:
`````
    HOST: "localhost",
    USER: "",
    PASSWORD: "",
    DB: "curriculo"
`````

Crie o database no mysql, e insera dados na tabela.

````
  CREATE TABLE `curriculo`.`card` (
    `id` INT NOT NULL,
    `titulo` VARCHAR(45) NULL,
    `texto` LONGTEXT NULL,
    PRIMARY KEY (`id`));
````

<br>
<br>
<br>

<strong>React js/Frontend</strong>

Na pasta frontend rode o comando para instalar o axios

* axios  - get dados da API -- npm install axios

* Css com bootstrap -- npm install react-bootstrap 


<br>
<br>
<br>

<strong>Para testes</strong>

Navegue para a pasta backend e rode o comando -- npm run dev --
o comando ira iniciar o servidor e a aplicação Reactjs juntos, como configurado no package.json do backend

````
"scripts": {
    "client": "cd ./../frontend && npm start",
    "server": "node server.js",
    "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
  },
  ````
