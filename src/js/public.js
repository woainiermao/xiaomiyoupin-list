//搜索框部分定位
let nav = document.querySelector('.nav-search')

window.addEventListener('scroll',function(e){
  if(window.pageYOffset > nav.offsetTop + 300){
    nav.style.position = 'fixed'
    nav.style.top = '0px'
  }else{
    nav.style.position = 'static'
  }
})


//搜索框中，输入框失焦，下面div变化
$(".btn").focus(function(){
  $(".bto").css("backgroundColor","rgb(111, 76, 49)");
});
$(".btn").blur(function(){
  $(".bto").css("backgroundColor","#e7e7e7");
});

//右侧导航，回到顶部
$(".li5").click(function(){
  $('html,body').animate({scrollTop : 0},100);
});