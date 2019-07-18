 /*
  **********************************************************
  * OPAQUE NAVBAR SCRIPT
  **********************************************************
  */

  // Toggle tranparent navbar when the user scrolls the page

  //toggle tranparent navbar when the user scrolls the page
if($(window).width() <= 1400){
    $('.opaque-navbar').addClass('ddd');
    
}


$(window).scroll(function() {
  if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
  {
      $('.opaque-navbar').addClass('opaque');
  } else {
      $('.opaque-navbar').removeClass('opaque');
  }
});
var s=0;
$('#kk').on('click',function(){
  s=s+1;
  if(s%2==0){
      $('.collapse').removeClass('dd');
      
  }
  else{
      $('.collapse').addClass('dd');
  }
})