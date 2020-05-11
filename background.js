var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1UK3tC3_Wn5ufVYccTNOY1kj5AREe4NPwMpWH3qY9APQ/edit?usp=sharing';

  function init() {
    Tabletop.init( {
      key: publicSpreadsheetUrl,
      callback: showInfo,
      simpleSheet: true 
    } )
  }

  function showInfo(data, tabletop) {
    data.forEach(function(data) {
    header.innerHTML = data.header;
    header2.innerHTML = data.header2;
    body.innerHTML = data.body;
    body2.innerHTML = data.body2;
    body3.innerHTML = data.body3;
    
 });

  rect(0,350,400,70);
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);
line(160,200,50,50);
line(240,200,350,50);
    
  }

  window.addEventListener('DOMContentLoaded', init)
