
setInterval(function(){
    $("#mindBlown").style.backgroundColor = getColor();
  });
  
  //bind clicks to buttons...
  $("#mindBlown").addEventListener('click', function() {
      $("#mindBlown").style.backgroundColor = getColor();
  }, false);
  
  
  function getColor(){
    var hue = 'rgb('
              + (Math.floor(Math.random() * 256)) + ','
              + (Math.floor(Math.random() * 256)) + ','
              + (Math.floor(Math.random() * 256)) + ')';
    return hue;
  }
  
  //TAKE THAT jQuery!!
  function $(selector){
      return document.querySelector(selector);
  }
  