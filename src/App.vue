<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">{{titulo}}</a>
      </div>
    </nav>

      <div class="container">
      <div class="row">
        
        <div class="col s4 offset-s4" >
          <div id="cardGame" class="card-panel hoverable center">
            <form @submit.prevent="confirmaTentativa">
                <label><h5 class="capitalizar negrito" >{{palavraSave}}</h5></label>
                <input class="capitalizar" type="text" placeholder="Palavra" v-model="palavra">
                <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>
            </form>
            <!-- <button @click="embaralha()" class="waves-effect waves-light btn-small">Embaralha</button> -->
            <button @click="novaPalavra()" class="waves-effect waves-light btn-small">Nova Palavra<i class="material-icons left">shuffle</i></button>
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
  import words from './assets/words.json'
  export default{
    data(){
      return{
        titulo : 'A N A G R A M A',
        palavra : 'anagrama',
        palavraSave : 'gamarana',
        originalWord : 'anagrama',
        palavras : words["words"],
      }
    },
    mounted(){
      
    },
    methods:{
      confirmaTentativa(){
        if(this.palavra.toLowerCase().trim() == this.originalWord){
          //alert("Acertou!")
          this.setNewClass("cardGame", "vitoria")
          this.removeClass("cardGame", "derrota")
          this.setNewClass("fogos", "fireworks")
        }else{
          //alert("Errou!")
          this.setNewClass("cardGame", "derrota")
          this.removeClass("cardGame", "vitoria")
          this.removeClass("fogos", "fireworks")
        }
      },

      novaPalavra(){
        this.pickWord()
        this.embaralha()
        this.palavraSave = this.palavra
      },

      ///metodo para embaralhar a palavra original
      embaralha(){
        //codigo que mistura
        this.palavra = this.originalWord.split('').sort(function(){return 0.5-Math.random()}).join('');
        if(this.palavra == this.originalWord){
          this.embaralha()
        }
      },
      pickWord(){
        var randnum = Math.floor(Math.random() * this.palavras.length);
        this.originalWord = this.palavras[randnum]
      },
      setNewClass(itemId,novaClasse){
        var element = document.getElementById(itemId);
        element.classList.add(novaClasse);
      },
      removeClass(itemId, classe){
        var element = document.getElementById(itemId);
        element.classList.remove(classe);
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
  .negrito{
    color: black;
    font-weight: bold;
  }
</style>