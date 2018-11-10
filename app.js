var app = {
  init: function() {
    console.log('salut');
    $('#generate').on('click', app.generateQuote);
  },
  generateQuote: function() {

    var randomIndex = Math.floor(Math.random() * (100 - 1) + 1);

    $.ajax(
     {
       url: 'https://talaikis.com/api/quotes/', // Si api.okanban.local configuré
       method: 'GET',
       dataType: 'json'
     }
   ).done(function(response) {

     var citation = response[randomIndex];

$('#citation').text(citation.quote);
$('#author').text(citation.author);



   }).fail(function() {
     alert('Ajax failed');
   });
  }
};

$(app.init);
