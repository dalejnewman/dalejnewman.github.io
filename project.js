var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1oxuKEnD_PkXitSlQZdu8ZaeXHdVc4STY_Rk38UBAIKo/edit?usp=sharing';

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
    body4.innerHTML = data.body4;
    body5.innerHTML = data.body5;
    body6.innerHTML = data.body6;
    
 });
    
  }

  window.addEventListener('DOMContentLoaded', init)
