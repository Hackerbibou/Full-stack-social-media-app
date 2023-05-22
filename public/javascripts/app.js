$(".logo").on('click',()=>{
    console.log('it worked')
    $(".ml").toggle()
})
$(".logo2").on('click',()=>{
    console.log('it worked')
    $(".editPopup").toggle()
})
$(".ap").click(function() {
    console.log('it worked')
    localStorage.setItem('scrollPosition', window.scrollY);
  });
$(".likebtn").click(function() {
    localStorage.setItem('scrollPosition', window.scrollY);
  });
window.addEventListener('load', function() {
    if(localStorage.getItem('scrollPosition') !== null){
      window.scrollTo(0, localStorage.getItem('scrollPosition'));
      localStorage.setItem('scrollPosition', null);
    }
  }, false);
