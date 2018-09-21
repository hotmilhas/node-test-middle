# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

[Resposta]

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

```js
// Resposta
```

---

2\) Recursos

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.

[Resposta]

[Justificativa]

2.2) Quais recursos do <b>typescript</b> podem ser usados para definir um conjunto de possíveis valores para uma variável/parâmetro?

[Resposta]

---

3\) Existem threads em Node? Explique.

[Resposta]

[Explicação]

---

4\)

4.1) Quanto tempo vai demorar para o código a seguir imprimir "finished"? Justifique.
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

[Resposta]

[Justificativa]

4.2) O que o código a seguir imprime? Justifique.
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

[Resposta]

[Justificativa]

4.3\) Quais as vantagens/desvantagens da segunda função em relação a primeira?
```js
function doSomething(options) {
    return fetch(options.url).then(r => r.json())
}

async function doSomethingAsync(options) {
    return fetch(options.url).then(r => r.json())
}
```

[Resposta]

---

5\) Qual a vantagem da segunda função em relação a primeira?
```js
function doSomething(options) {
    return fetch(options.url).then(r => r.json())
}

async function doSomethingAsync(options) {
    return fetch(options.url).then(r => r.json())
}
```

[Resposta]

---

6\) Quais as vantagens de usar ES modules em vez de usar commonjs?

[Resposta]

---

7\) Cite um contexto onde a utilização do NodeJS não seria efetiva

[Resposta]
