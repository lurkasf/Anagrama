const anagrama_database = {};

(function () {
    let id = 'languages';
    let words = {};
    let lang = 'EN';
    let difficulty = 'easy';

    function add_word(words){
        const data = {
            words: words,
            difficulty: difficulty,
            updated: firebase.database.ServerValue.TIMESTAMP,
        };
        
        if(!id){
            id = firebase.database().ref().child(lang).push().key;
        }
        
        updates = {};
        updates['/languages/' + lang] = data;

        let anagrama_ref = firebase.database().ref();



        anagrama_ref.update(updates)
            .then(function(){
                return {success: true, message: 'Word created'};
            })
            .catch(function(error){
                return{success:false, message: `Cration failed ${error.message}`}
            })
    }

    /*function find_words(lang){
        return firebase.database().ref('/languages/' + lang).on('easy').then(function(snapshot){
        var dados = (snapshot.val()) || 'Error';
        });
        console.log(dados);
    }*/
    function find_words(lang){
        let anagrama_ref = firebase.database().ref('/languages/' + lang);
        
        anagrama_ref.on("value", function(snapshot) {
        console.log(snapshot.val());
        }, function (error) {
        console.log("Error: " + error.code);
        });
    }

    function remove_word(){}

    anagrama_database.add = add_word;
    anagrama_database.find = find_words;

})()