# Estruturas de repetição
É uma lógica de programação que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou com um contador.
### Enquanto / WHILE DO
Repete um bloco de código enquanto permanecer verdadeira. Mas para que esse comando funcione corretamente é necessário que a variável sendo verificada ocorra uma alteração dentro ENQUANTO/WHILE.

ENQUANTO condição for verdadeira
FAÇA a repetição do trecho do código

### Faça enquanto / DO WHILE
É executado o bloco de comandos e só depois verifica se há a necessidade de repetição.


### Para 
O ciclo para incrementa ou decrementa uma variável (contador) dentro do inntervalo e passos especificos. E é usado frequentemente na manipulação de matrizes.

PARA <variavel contadora>
DE <valor inicial>
ATÉ <valor final>
PASSO <valor que altera>
FAÇA <instruções a serem executadas até a PARA atingir o ATÉ>

#### Importante:
* É usada quando se sabe com certeza a quantidade de repetições necessárias.
* E essas repetições são controladas por uma variável que será definido seu valor inicial e final.
* Quando a condiçãoo não depende do resultado obtido no processo da repetição.
* No PARA há a possibilidade de 2 ou + variáveis só separar com vírgulas.
* Já no caso de testes codependentes é necessário usar o operador condicional e cada um em ().
* O PASSO só altera ao final de cada ciclo;

    FOR (nomevariavel = valorinicial; nomevar valor final; nomevariavel = nomevar+1){ação que fará};
    FOR (inicialização;teste;incremento){sentença};

### PARA CADA ... EM
Uma simplificação do FOR/PARA, permite acessar cada elemento de forma individual e aplicar o loop em cada um da coleção sem a necessidade de especificar um por um.

    FOR <elemento> IN <coleção> {DO}

### SWITCH CASE
É uma gama de respostas que se pode dar para uma condição. Assim ao invês de voê escrever vários IF ELSE, você pode fazer um SWITCH CASE que vai analisar cada caso que você fizer algo diferente.

Atenção: Todo switch case é necessário um caso "default", pois o programa necessita respondê-lo caso você caia em algo que não seja nenhum caso anterior.
 
 SWITCH <nome> {case.<teste>:<intruções>; case.<teste>:<intruções>; case.:default:<intruções>}

