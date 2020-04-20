
<script type='text/javascript'>    
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1oANUf10vKh8iL8c1v6jcEctIMt7_bHqDfcq2OE3yyew/edit?usp=sharing';

  function init() {
    Tabletop.init( {
      key: publicSpreadsheetUrl,
      callback: showInfo,
      simpleSheet: true 
    } )
  }

  function showInfo(data, tabletop) {
    alert('Successfully processed!')
    console.log(data);
  }

  window.addEventListener('DOMContentLoaded', init)
</script>
