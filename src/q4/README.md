## Questão 4

### Instruções

Antes de rodar a aplicação, crie um arquivo ".env" baseado no arquivo ".env.example"

```sh
$ cp .env.example .env
```

### Modo desenvolvimento

Para rodar a aplicação no modo desenvolvimento, execute o comando abaixo :

```sh
$ sudo docker-compose -f docker-compose.development.yml up --build
```

#### Mongo Express (Mongo GUI)

http://0.0.0.0:8081/

#### Rebrow (REDIS GUI)

http://0.0.0.0:8082/

### Testes

Para realizar os testes, execute o comando abaixo :

```sh
$ sudo docker-compose -f docker-compose.test.yml up --build
```