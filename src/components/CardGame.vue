<template>  
  <div id="cardGame" class="card-panel hoverable center">
    <div style="position:relative">
        <!--<a class="waves-effect waves-light btn-small pos-top-right"><i class="material-icons"></i></a>
        <a class="btn-floating btn-large waves-effect waves-light red pos-top-right"><i class="material-icons">add</i></a>-->
        
        <!--<a class="pos-top-right"><i class="material-icons">more_vert</i></a>--> 
        <span @click="switchLanguage()" class="pos-top-right" id="select-lang">{{language}}</span>
    </div>
    <div class="buttons">
        <form @submit.prevent="confirmaTentativa">
            <label><h5 class="capitalizar negrito" >{{palavraEmbaralhadaSave}}</h5></label><span v-if="showPercentage" class="percent">{{percent}}%</span>
            <input id="inputTentativa" class="capitalizar" type="text" placeholder="inserir palavra" v-model="palavra">
            <button class="waves-effect waves-light btn-small salvarPalavra">Salvar<i class="material-icons left">save</i></button>
        </form>
        <!-- <button @click="embaralha()" class="waves-effect waves-light btn-small">Embaralha</button> -->
        <button @click="novaPalavra()" class="waves-effect waves-light btn-small novaPalavra">Nova Palavra<i class="material-icons left">shuffle</i></button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'CardGame',
    props:['ops'],
    data: () => ({
      palavra : 'anagrama', //palavra atualmente escrita no input, muda de acordo com o que o user escreve
      palavraEmbaralhadaSave : 'gamarana', //salva a palavra embaralhada para não perder quando editar no input do usuario
      originalWord : 'anagrama',
      palavras : [], //variabel contendo as palavras buscadas pela api
      showPercentage: true,
      languages: ['PT-BR','EN','ES'],
      language: 'PT-BR',
      get console() { return window.console; } //pegar o console pra poder usar, sem isso ele não conhece console
    }),
    methods:{
      editDistance(longer, shorter) {
        longer = longer.toLowerCase();
        shorter = shorter.toLowerCase();

        var costs = new Array();
        for (var i = 0; i <= longer.length; i++) {
          var lastValue = i;
          for (var j = 0; j <= shorter.length; j++) {
            if (i == 0)
              costs[j] = j;
            else {
              if (j > 0) {
                var newValue = costs[j - 1];
                if (longer.charAt(i - 1) != shorter.charAt(j - 1))
                  newValue = Math.min(Math.min(newValue, lastValue),
                    costs[j]) + 1;
                costs[j - 1] = lastValue;
                lastValue = newValue;
              }
            }
          }
          if (i > 0)
            costs[shorter.length] = lastValue;
        }
        return costs[shorter.length];
      },
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
      },
      buscarAPI(){
        if(this.language==undefined || this.language == null){
          this.language = "PT-BR"
        }
        axios.get(`https://lurkasf.github.io/WordsAPI/${this.language}/words.json`)
        .then(response => (this.palavras = response.data.words, this.console.log(`API ${this.language} OK`)),
              error => {
                  this.console.log
                  this.console.error(error);
                  this.console.log("DEFAULT WORDS LOADED")
                  this.getDefaultWords();
              })
      },
      getDefaultWords(){
        switch (this.language) {
          case 'PT-BR':
            this.palavras = ["bola", "carro", "manga", "uva", "sapo", "macaco", "abacate", "acerola", "garrafa", "anagrama", "helicóptero", "mingau", "canguru"]
            break;
          case 'EN':
            this.palavras = ["car", "man", "boy", "girl"]
            break;
          default:
            this.palavras = ["NoWord?"]
            break;
        }
      },
      switchLanguage(){
        let pos = this.languages.indexOf(this.language)
        if(pos == this.languages.length -1){
          this.language = this.languages[0]
        }else{
          this.language = this.languages[pos+1]
        }
        this.buscarAPI()
        this.novaPalavra()
      },
      //acho que nem vou usar isso
      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>