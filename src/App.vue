<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">{{titulo}}</a>
      </div>
    </nav>
    
    <div>
      <form @submit.prevent="confirmaTentativa">
            <label>Palavra</label>
            <input type="text" placeholder="Palavra" v-model="palavra">
            <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>
        </form>
    </div>

  </div>
</template>

<script>

  export default{
    data(){
      return{
        titulo : 'A N A G R A M A',
        palavra : 'Anagrama',
        originalWord : 'Anagrama',
      }
    },
    mounted(){
      
    },
    methods:{
      confirmaTentativa(){
        if(this.palavra == this.originalWord){
          alert("Acertou!")
        }
      },
      ///metodo para embaralhar a palavra original
      embaralha(){
        //codigo que mistura
        this.palavra = "o-o"
      }
    }
  }

  /*function shuffle(o){
   for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
   return o;
  }
  function start() {
    var words = ['question', 'answer', 'guess', 'coach'];
    var splitWord = shuffle(words[Math.floor(Math.random() * words.length)].split(""));
    document.getElementById("box").innerHTML = splitWord.join("");
  }*/

</script>