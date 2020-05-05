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
  export default {
    name: 'CardGame',
    props:['name', 'description', 'icon', 'url'],
    data: () => ({
    }),
    methods:{

    }
  }
</script>