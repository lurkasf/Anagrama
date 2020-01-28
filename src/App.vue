<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper color-change">
        <a href="#" class="brand-logo center">{{titulo}}</a>
      </div>
    </nav>
      <div class="container">
      <div class="row">
        
        <div class="col s12 m6 offset-m3" >
          <div id="cardGame" class="card-panel hoverable center">
            <form @submit.prevent="confirmaTentativa">
                <label><h5 class="capitalizar negrito" >{{palavraEmbaralhadaSave}}</h5></label>
                <input id="inputTentativa" class="capitalizar" type="text" placeholder="inserir palavra" v-model="palavra">
                <button class="waves-effect waves-light btn-small salvarPalavra">Salvar<i class="material-icons left">save</i></button>
            </form>
            <!-- <button @click="embaralha()" class="waves-effect waves-light btn-small">Embaralha</button> -->
            <button @click="novaPalavra()" class="waves-effect waves-light btn-small novaPalavra">Nova Palavra<i class="material-icons left">shuffle</i></button>
          </div>
        </div>

      </div>
      </div>
    <div id="fogos" class="">
      <div class="firework">
        <div class="explosion">
          <div class="spark green"></div>
        </div>
        <div class="explosion">
          <div class="spark blue"></div>
        </div>
        <div class="explosion">
          <div class="spark red"></div>
        </div>
        <div class="explosion">
          <div class="spark red"></div>
        </div>
        <div class="explosion">
          <div class="spark yellow"></div>
        </div>
        <div class="explosion">
          <div class="spark blue"></div>
        </div>
        <div class="explosion">
          <div class="spark green"></div>
        </div>
        <div class="explosion">
          <div class="spark yellow"></div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
  import words from './assets/words.json' //arquivo que contêm todas as palavras que rodam no programa
  export default{
    data(){
      return{
        titulo : 'A N A G R A M A', //titulo que fica na barra superior
        palavra : 'anagrama', //palavra atualmente escrita no input, muda de acordo com o que o user escreve
        palavraEmbaralhadaSave : 'gamarana', //salva a palavra embaralhada para não perder quando editar no input do usuario
        originalWord : 'anagrama',
        palavras : words["words"], //salva em 'palavras' todas as palavras contidas no arquivo de palavras (words.json)
        get console() { return window.console; } //pegar o console pra poder usar, sem isso ele não conhece console
      }
    },
    mounted(){
      
    },
    methods:{
      confirmaTentativa(){
        if(this.palavra === ''){
          this.console.log('%c Nenhuma Palavra Enviada!', 'color: orange;font-weight:bold');
          this.setAlertStyle()
        }else if(this.palavra.toLowerCase().trim() === this.originalWord){
          //alert("Acertou!")
          this.console.log('%c Tentativa Correta!', 'color: green;font-weight:bold');
          this.limpaStyle()
          this.setWinStyle()
        } else{
          //alert("Errou!")
          this.console.log('%c Tentativa Incorreta', 'color: red;font-weight:bold');
          this.limpaStyle()
          this.setLoseStyle()
        }
      },

      novaPalavra(){
        this.pickWord()
        this.embaralha()
        this.limpaStyle() 
      },

      ///metodo para embaralhar a palavra original
      embaralha(){
        //codigo que mistura
        this.palavra = this.originalWord.split('').sort(function(){return 0.5-Math.random()}).join('');
        if(this.palavra == this.originalWord){
          this.embaralha()
        }
        this.palavraEmbaralhadaSave = this.palavra // salva a palavra embaralhada para não perder
      },
      pickWord(){
        var randnum = Math.floor(Math.random() * this.palavras.length);
        this.originalWord = this.palavras[randnum]
      },
      setNewClass(itemId,novaClasse){ //metodo que pode adicionar uma classe de um elemento
        var element = document.getElementById(itemId);
        element.classList.add(novaClasse);
      },
      removeClass(itemId, classe){ //classe que pode remover uma classe de um elemento
        var element = document.getElementById(itemId);
        element.classList.remove(classe);
      },
      limpaStyle(){ //usada para remover todo o estilo dinâmico para vitorias e derrotas do #cardGame
        this.removeClass("cardGame", "vitoria")
        this.removeClass("cardGame", "derrota")
        this.removeClass("cardGame", "alert")
        this.removeClass("inputTentativa", "alert")
        this.removeClass("fogos", "fireworks")
      },
      setWinStyle(){ //Modifica o estilo dos elementos para vitória
        this.setNewClass("cardGame", "vitoria")
        this.setNewClass("fogos", "fireworks")
      },
      setLoseStyle(){ //Modifica o estilo dos elementos para derrota
        this.setNewClass("cardGame", "derrota")
      },
      setAlertStyle(){
        this.setNewClass("cardGame", "alert")
        this.setNewClass("inputTentativa", "alert")
      }
    },   
  }
//opções de icone: shuffle, loop, autorenew
</script>

<style scoped>
  .capitalizar{
    text-transform: capitalize
  }
  .container  {
    height: 100%;
    width: 100%;
  }
  .container .row {
    margin: 0 auto;
  }
  .vitoria{
    background-color: rgb(147, 255, 121)
  }
  .derrota{
    background-color: rgb(255, 121, 121)
  }
  .alert{
    background-color: rgb(255, 201, 121)
  }
  input.alert::placeholder{
    color: red;
  }
  .negrito{
    color: black;
    font-weight: bold;
  }
  ::placeholder{
    color: rgb(65, 65, 65);
  }
  button{
    min-width: 92px;
    max-width: 135px;
  }
</style>