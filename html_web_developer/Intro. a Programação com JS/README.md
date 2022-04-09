# O que é JavaScript?
É a linguagem de programação que usamos para adicionar interatividade aos sites, desde a troca de estilo dinâmico até a obtenção de atualizações do servidor, até gráficos 3D complexos. 

- linguagem de script e multiplataforma;
- pode atuar no front e no back;
- tipagem dinâmica;
- alto-nível.

### DOM - Document Object Model 
- JS pode alterar todos elementos do HTML e tambem os atributos e estilos de CSS de uma página.

### Como adicionar o JS no HTML
Há três maneiras:

- declarar dentro do da tag 'head' e escrever em outro arquivo;
- declarar dentro do body usando a tag 'script' e escrever dentro do HTML;
- declarar dentro do body usando a tag 'script' e escreve os scripts em outro arquivo. 

### alguns scripts do JS:

<p>var - variavel escopada</p>
<p>let - variavel global</p>
<p>alert() - pop-up na tela</p>
<p>console.log - mostra no console</p>
<p>replace( , ) - procura um elemento, e o substitui por outro</p>
<p>.toUpperCase - muda todas letras para maiusculas</p>
<p>.toLowerCase - muda todas letras para minusculas</p>
<p>[ ] - arrays servem para criar uma lista de dados</p>
<p>.pop() - apaga o dado anterior</p>
<p>.push() - acrescenta mais dados</p>
<p>.lenght() - conta quantos elementos há</p>
<p>.reverse() - retorna para o último estado</p>
<p>.toString() transforma em string</p>
<p>.join() - trasforma em string e é possivel retirar a virgula ou mudar e etc</p>
<p>new Date() - data do dia</p>
<p>.get - pegar algum elemento</p>
<p>// comentários</p>

### Função
São criadas quando uma instrução pode ser reaproveitada, sendo que está para ser executada necessita ser invocada, e se houver, com seus parâmetros definidos. Por exemplo uma função de soma:

    function soma (n1, n2){
        return n1 + n2;
    }
    soma();

Ou até mesmo uma função para validar algo, como a idade:

    function validaIdade (idade){
        var validar;
        if (idade >=18){
            validar=true
        }else{
            validar=false        
        }
        return validar;
    }


### Botão com JS
É possível manipular elementos da página com o uso do JS, com:

    >onclick - pode chamar uma função dentro de um elemento do HTML ao ser clicado.
    >onmouseover - ao passar o mouse gera uma ação.
    >onmouseout - ao tirar o mouse gera outra ação.
    >onload - ao carregar a pagina.
    >document.getElementById - busca um elemento no HTML pelo ID.
    >document.getElementsByClass - busca elementos no HTML pela classes.
    >inner.HTML - inserindo um HTML.
    >inner.text - trata como um texto o elemento.
    >window.open("") - abre uma outra janela pelo url.
    >.window.location.href = "" - abre na mesma janela.
    >.value - valor dentro de um elemento.

### onChange
onchange - quando ocorre uma mudança, por exemplo:

    <select onchange="funcao(this)>
        <option value='1'>olá</option>
        <option value='2'>hola</option>
        <option value='3'>hello</option>
    </select>
### Links úteis

* <a href="></a>
* <a href="></a>
