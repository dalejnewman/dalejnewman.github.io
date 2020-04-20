function init() {
  Tabletop.init( {
    key: 'https://docs.google.com/spreadsheets/d/1oANUf10vKh8iL8c1v6jcEctIMt7_bHqDfcq2OE3yyew/edit?usp=sharing',
    simpleSheet: true }
  ).then(function(data, tabletop) { 
    console.log(data)
  })
}
window.addEventListener('DOMContentLoaded', init) 





