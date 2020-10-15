var words = [];

function fetchData(url = './assets/words/words.txt'){
    // Assume OK data, will add better check later
    fetch(url)
        .then( response => response.text() )
        .then( data => getWords(data) )
        .catch( error => console.error(error));

}

function getWords( data = 'word1\nword2\nword3' ){
    // Assume new line char is "\n"
    words = data.split('\n');
    var wordsLenght = words.length;
    var randomWord = words[ Math.floor( Math.random() * wordsLenght) ];
    

    var prettyWords = '';
    for (var i = 0; i < 1; i++) {
        prettyWords += ''
        + '<div class="word"><div class="uk-card uk-card-default uk-card-body">'
        + '<h3 class="uk-card-title uk-text-uppercase uk-text-bold">'
        + randomWord
        + '</h3>'
        + '</div></div>';
    }

    document.getElementById('words').innerHTML = prettyWords;


}

function shuffleWords( words = ['word1','word2','word3'] ){
    var nuullll ="";    
    return
}

fetchData()

function generateNewWord(passed){
    var status = "";
    if (passed){
        status = "passed";
    } else {
        status = "not-passed"
    }
    var randomWord = words[ Math.floor( Math.random() * words.length) ];
   
    var prettyWords = ''
        + '<div class="word"><div class="uk-card uk-card-default uk-card-body ">'
        + '<h3 class="uk-card-title uk-text-uppercase uk-text-bold ' + status + '" >'
        + randomWord
        + '</h3>'
        + '</div></div>';

    document.getElementById('words').innerHTML = prettyWords;


}