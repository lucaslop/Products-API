## Sobre o projeto
API Backend para CRUD de produtos

## Guia de instalação

Para baixar o repositorio use o comando: `https://github.com/lucaslop/Products-API`


### Instalando com o Docker

1. Construir as images: `docker-compose build`

2. Subir os containers: `docker-compose up`

3. O projeto estará acessível em: `localhost:3001/`


## Rotas

Acessivel [aqui](https://products-api-lucaslop.herokuapp.com/).

Requisição get ('/')

Requisição  get('/:id') por id

Requisição post ('/')

Requisição delete ('/:id') por id


## Model para POST

Para enviar uma requisição POST, é necessario enviar um JSON do seguinte modelo: 

{

  title: "title",
  
  desc: "desc",
  
  url:"url"
  
}


