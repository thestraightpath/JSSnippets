var englishConfig = {
    "lang": "EN"
  },
  spanishConfig = {
    "lang": "ES"
  },
  germanConfig = {
    "lang": "DE"
  }


var greetings = [
  ["EN", "Hello"],
  ["ES", "Hola"],
  ["DE", "Hallo"]
]

console.log(greetings.find(function(element) {
  return this.lang == element[0] //'this' is englishConfig object
}, englishConfig)[1]); // 'Hello'
