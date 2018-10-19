# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

[A diferença é que o operador "==" compara apenas o valor da variavel, ignorando o seu tipo, enquanto o operador
    "===" compara tanto o valor da variavel, quanto o tipo dela. Assim 2 valores iguais mas de tipos diferentes
    retornara um resultado false para "===", mas retornara true para "==".]

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

```js
0 == "0", resultado: true
0 === "0", resultado: false
```

---

2\) Recursos

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.

[Promise]

[Com a promise é possivel criar varios processos assincronos de maneira simples, uma vez que possui tratamento para um retorno esperado, assim como para um erro.
    Alem disso é possivel passar funções de callback para as funções da promise, de maneira a simplificar o codigo em caso de promises com o mesmo tratamento.
    Tambem é possivel controlar quando a promise será retornada e se o resultado vai ser um sucesso ou um erro, apenas usando o resolve ou o reject.]

2.2) Quais recursos do <b>typescript</b> podem ser usados para definir um conjunto de possíveis valores para uma variável/parâmetro?

[A tipagem da variavel, uma vez que a variavel é tipada, como "let nome: string", ela só podera receber valores daquilo tipo, assim impedindo de receber 
    valores como number ou array.]

---

3\) Existem threads em Node? Explique.

[Sim.]

[Em node é possivel definir quantas threads a aplicação ira utilizar, assim a aplicação rodará utilizando multi-threads, de maneira a criar varios processos para executar
    a aplicação.]

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

[2 segundos.]

[A impressão está no segundo then, para passar de um then para o outro é necessário que o primeiro ja tenha sido resolvido. Dentro do primeiro existem 2 funções
    que possuem uma função assincrona dentro, a função possui um setTimeout que executara o resolve assim que passar o tempo passado como segundo paramentro,
    a primeira função será resolvida depois de 1 segundo, a segunda função será resolvida depois de 2 segundos. Se elas fossem sincronas o then que engloba as duas 
    seria resolvido em 3 segundos, mas ja que as duas executam em paralelo, pois são assincronas, o then será resolvido depois do termino da que possui um tempo maior,
    no caso, 2 segundos.]

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

["uh oh"
"ok now!"]

[O throw new error enviara um erro com a mensagem passada por parametro, para o callback de erro que é passado como segundo parametro da função then, que no caso é o err => {},
    o err => {}, seria a mesma coisa de function(err){}, então o erro enviado da função then, será passado para a variavel err, que exibira a mensagem dela na console.
    Logo apos isso, a função then estara resolvida e então será executado o segundo then, que exibira a mensagem "ok now!".]

4.3\) Quais as vantagens/desvantagens da segunda função em relação a primeira?
```js
function doSomething(options) {
    return fetch(options.url).then(r => r.json())
}

async function doSomethingAsync(options) {
    return fetch(options.url).then(r => r.json())
}
```

[A segunda função executara uma promise assincrona, assim o programa pode executar outras coisas enquanto ela é executada.
A desvantagem é que se for precisar do resultado do fetch para poder executar algo, terá que ser colocado um interval para ir checando se o valor ja foi retornado
o que no caso é bem desnecessario, pois se for fazer isso, é melhor deixar sincrono.]

---

5\) Quais as vantagens de usar ES modules em vez de usar commonjs?

[Os ES modules são atualizados frequentemente(de anos em anos), mas os browsers dão suporte para eles em pouco tempo, além de possuir diversas funções das quais
    facilitam muito a leitura de codigo e suas funcionalidades.
    Como o ``, que atraves dele é possivel colocar variaveis na string. Um exemplo da sua utilização:
    `Usuario: ${usuario.nome} \nCPF: ${usuario.cpf}`;
    Enquanto sem o ES modules:
    "Usuario: " + usuario.nome + " \n" + usuario.cpf;]

---

6\) Cite um contexto onde a utilização do NodeJS não seria efetiva

[Resposta]
