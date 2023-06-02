$(document).ready(function(){
  var count=60;
  var interval=setInterval(function(){
    count--;
    $('#timer').html(count);
    if(count==0){
      clearInterval(interval);
      onclick=window.location.href='10.html';

    }
  },1000)
})
