# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

O "==" verifica se os dois valores são equivalentes
O "===" verifica se os dois valores são do mesmo tipo e são equivalentes

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

```js

// Exemplo 1
false == '0' // true
false === '0' // false

// Exemplo 2
null == undefined // true
null === undefined // false

```

---

2\) Recursos

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.

A utilização de promises.

Com as promises, conseguimos reduzir (ou até mesmo eliminar por completo) as "callback hells". É possível tratar
as exceções com o método "catch" de forma bem simples e ainda utilizar os recursos "async" e "await" para aumentar ainda mais a legibilidade do código, dando ao processamento assíncrono um "approach" síncrono.  

2.2) Quais recursos do <b>typescript</b> podem ser usados para definir um conjunto de possíveis valores para uma variável/parâmetro?

* Default Parameters
* Optional Parameters
* REST Parameters
* Tuple (Tipo)

---

3\) Existem threads em Node? Explique.

Sim. Essa feature foi incluída no release da versão 10.5.0, através do módulo "worker_threads"

O módulo "worker_threads" ainda é experimental, mas já é possível realizar alguns testes com ele utilizando a flag "--experimental-worker" na chamada do script. 

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

0.003 segundos.

O "finished" foi impresso antes do término da resolução das outras promises. Todo o processamento é assíncrono, e o código que imprime a mensagem não espera as outras promises serem resolvidas para ser executado.  

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
    .catch((err) => console.log('oi'))
```

uh oh!

O "throw" irá terminar o fluxo de execução. Desconsiderando tudo o que vier depois. Com o "reject" isso não iria ocorrer.

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

Vantagens

* A utilização dos recursos "async/await" tornam o código mais legível
* Será possível simular uma execução "síncrona" utilizando "async/await" 

[Resposta]

* Os navegadores mais antigos não suportam esses novos recursos nativamente, sendo necessário realizar a "transpilação" do código para prover compatibilidade com esses browsers

---

5\) Quais as vantagens de usar ES modules em vez de usar commonjs?

* Melhor organização do código, dentro de uma estrutura modular
* ES modules sempre são executados em "strict mode"
* As variáveis nos ES modules, não se tornam "globais", portanto não há necessidade em delimitar o escopo do arquivo dentro de uma função anônima

---

6\) Cite um contexto onde a utilização do NodeJS não seria efetiva

A adoção de multi-threads por parte do NodeJS ainda é muito recente, e ainda se encontra em fase experimental. Para o desenvolvimento de aplicações com alta demanda computacional (processamento), eu acredito que o NodeJS não seja a melhor opção.
