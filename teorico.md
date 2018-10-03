# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

  O operador `==` compara somente o valor, já o operador `===` compara o tipo e o valor

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

```js

if( 2 == '2')//True

if( 2 === '2')//False

```

---

2\) Recursos

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.

O melhor recurso para tratar processamentos assincronos no javascript são as Promises. Esse recurso deixa o código visivelmente mais legivel evitando callbacks hell. 


2.2) Quais recursos do <b>typescript</b> podem ser usados para definir um conjunto de possíveis valores para uma variável/parâmetro?

Enums ou literal string types

---

3\) Existem threads em Node? Explique.

Não. Node é uma tecnologia assincrona onde as requisições são processadas em uma unica thread   

---

4\)

4.1) Quanto tempo vai demorar para o código a seguir imprimir "finished"? Justifique. (Levando em consideração que `somePromise()` vai retornar uma Promise resolvida)
```js
function doSomething() {
    return new Promise(resolve => {
        setTimeout(resolve, 1000)
    })
}

function doSomethingElse() {
    return new Promise(resolve => {
        setTimeout(resolve, 2000)
    })
}

somePromise()
    .then(() => {
        doSomething()
        doSomethingElse()
    })
    .then(() => {
        console.log('finished')
    })

```

O programa vai imprimir 'finish' imediatamente.
Isso irá acontecer porque as promises das funções doSomething e doSomethingElse não são aproveitadas 


4.2) O que o código a seguir imprime? Justifique. (Levando em consideração que `somePromise()` vai retornar uma Promise resolvida)
```js
somePromise()
    .then(() => {
        throw new Error('uh oh!')
    }, err => {
        console.log(err.message)
    })
    .then(() => {
        console.log('ok now!')
    })
```

O código vai retornar uma exceção não tratada com a mensagem "uh oh". O tratamento do erro passando um funcão de tratamento como segundo parâmetro na função then() não funciona. Para isso deveria ter sido utilizado o método catch()  

4.3\) Quais as vantagens/desvantagens da segunda função em relação a primeira?
```js
function doSomething(options) {
    return fetch(options.url).then(r => r.json())
}

async function doSomethingAsync(options) {
    return fetch(options.url).then(r => r.json())
}
```
Vantagens: 
    
   - A utilizaço de async-await deixa os callbacks implicitos.
   - O tratamento de erro pode ser feito em try catch 

Desvantagens: 

   - Alguns browsers no dão suporte total a esse recurso o que nos obriga a utilizar bibliotecas como babel para manter compatibilidade 

---

5\) Quais as vantagens de usar ES modules em vez de usar commonjs?

As vantagens são que o ES module é uma implementação nativa e é compativel tanto com dependências sincronas e assincronas

---

6\) Cite um contexto onde a utilização do NodeJS não seria efetiva

A utilizaço do nodeJS não é recomendável em serviços com pouco IO e/ou com muito processamento.
