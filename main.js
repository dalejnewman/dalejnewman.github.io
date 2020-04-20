function init() {
  Tabletop.init( {
    key: 'https://docs.google.com/spreadsheets/d/2PACX-1vQha3Sn6AAsnZsQwwqmSTgGxbZe4pEl-lGcdxjrGXsVgOFfekIXjNQcXsoJtYlWabXUVA6fhE8n8Zdf/pubhtml',
    simpleSheet: true }
  ).then(function(data, tabletop) { 
    console.log(data)
  })
}
window.addEventListener('DOMContentLoaded', init) 





