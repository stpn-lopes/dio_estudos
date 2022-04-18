<img align="right" src="https://github.com/stpn-lopes/dio_estudos/blob/main/html_web_developer/Projetos/recriando-jogo-cobrinha-js/assets/img/snake.png"/>

# Projeto Snake Game

<p>Este projeto serviu para aplicar os conhecimentos adquiridos ao decorrer dessa trilha de cursos, foi criado com o uso de HTML, CSS e JavaScript para desenvolver um jogo que faz alusão àqueles famosos games antigos da cobrinha. No qual, por hora considero finalizado, mas pretendo aprimorar alguns detalhes mais para frente quando obtiver conhecimento para isso.</p>


## Sumário

<ul>
  <li><a href="https://github.com/stpn-lopes/dio_estudos/tree/main/html_web_developer/Projetos/recriando-jogo-cobrinha-js#sum%C3%A1rio">Sumário</a></li>
  <li><a href="https://github.com/stpn-lopes/dio_estudos/tree/main/html_web_developer/Projetos/recriando-jogo-cobrinha-js#sobre-seu-funcionamento">Sobre seu funcionamento</a></li>
  <li><a href="https://github.com/stpn-lopes/dio_estudos/tree/main/html_web_developer/Projetos/recriando-jogo-cobrinha-js#responsividade">Responsividade</a></li>
  <li><a href="https://github.com/stpn-lopes/dio_estudos/tree/main/html_web_developer/Projetos/recriando-jogo-cobrinha-js#como-fazer-para-rodar">Como fazer para rodar</a></li>
  <li><a href="https://github.com/stpn-lopes/dio_estudos/tree/main/html_web_developer/Projetos/recriando-jogo-cobrinha-js#links-%C3%BAteis">Links úteis</a></li>
</ul>

## Sobre seu funcionamento
Se fez uso do elemento "canvas" do HTML5, pois este permite desenhar gráficos com o uso de uma linguagem de script, neste caso é usado a linguagem JavaScript, sendo possível ser realizado estes desenhos por meio de definições de tamanho do espaço que será usado no canvas e de "coordenadas" que especificam o local onde se fará uso, como uma espécie de plano cartesiano com os eixos 'x' e 'y'.

![snakegame](https://user-images.githubusercontent.com/91392505/163768430-204b278d-f78e-4644-b8c9-41de5aa6c09e.gif)

A cobra ao tocar seu corpo, ativa uma função que gera uma caixa de alerta com uma mensagem avisando que houve 'game over' junto de um botão de confirmação, no qual quando este é apertado, a página é recarregada e reinicia-se o game.

## Responsividade
O background muda de imagem quando alcança determinada largura, a responsividade em grande parte deve-se ao uso do FlexBox que facilitou na hora da criação do Media Query no CSS3.

<img src="https://github.com/stpn-lopes/dio_estudos/blob/main/html_web_developer/Projetos/recriando-jogo-cobrinha-js/assets/img/responsivo.gif"/>

## Como fazer para rodar

<h4> Requisitos </h4>

<ul>
    <li> Uma conta do GitHub. </li>
    <li> Git instalado no seu computador. <a href="https://git-scm.com/downloads">(Instale o Git)</a> </li>
    <li> Visual Studio Code instalado em seu computador. <a href="https://code.visualstudio.com/download">(Instale o VS Code)</a> </li>
</ul>

<h4> Passos para ter acesso em seu computador <h4>

<ol>
   <li>É possível realizar o clone do repositório, para isso basta pegar o comando abaixo e adicionar no Git para ter o repositório em seu dispositivo.</li>
  
        git clone https://github.com/stpn-lopes/dio_estudos.git

    
   <li>Para visualizar o game abra seu navegador em 127.0.0.1:5500 </li>
</ol>
 
 * Ou você pode dar um Fork do projeto no GitHub, se acaso quiser manter o codigo inicial e quiser ter uma visualização mais clara de suas implementações e mudanças. Depois do Fork é só dar continuidade com os mesmos passos acima.
  
  ##  ℹ️  Links úteis
  
  <ul>
    <li><a href="https://convertio.co/pt/mp4-gif/">Conversor de mp4 em gif</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/canvas">O que é o elemento Canvas?</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API/Tutorial/Basic_usage">Como usar o elemento Canvas?</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes">Como desenhar no elemento canvas?</a></li>
  </ul>
  
  
