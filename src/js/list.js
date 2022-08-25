// //搜索框部分定位
// let nav = document.querySelector('.nav-search')

// window.addEventListener('scroll',function(e){
//   if(window.pageYOffset > nav.offsetTop + 300){
//     nav.style.position = 'fixed'
//     nav.style.top = '0px'
//   }else{
//     nav.style.position = 'static'
//   }
// });


// //搜索框中，输入框失焦，下面div变化
// $(".btn").focus(function(){
//   $(".bto").css("backgroundColor","rgb(111, 76, 49)");
// });
// $(".btn").blur(function(){
//   $(".bto").css("backgroundColor","#e7e7e7");
// });

// //右侧导航，回到顶部
// $(".li5").click(function(){
//   $('html,body').animate({scrollTop : 0},100);
// });
//获取内容
$.getJSON('../data/goods.json', (data) => {
  // console.log(data);
  var $str = '';
  for (var i = 0; i < data.length; i++) {
    if (i < 15) {
      if (i < 9) {
        if (i > 3 && i <= 7 && i != 5) {
          $str += `<li>
              <a href="./detailGood.html?id=${data[i].proid}"
                ><img
                  src="${data[i].proImg}"
                  alt=""
              /></a><br>
              <img src="${data[i].gif}" alt="" class = "gif">
              <span class="sp1" >${data[i].tle}</span> 
              <span class="sp2" >${data[i].fr}</span> 
              <p class="con-name">${data[i].proName}</p>
              <p class="con-pri"><span>¥</span><span>${data[i].price}</span></p>
           </li>`
        } else {
          $str += `<li>
                <a href="./detailGood.html?id=${data[i].proid}"
                  ><img
                    src="${data[i].proImg}"
                    alt=""
                /></a><br>
                <span class="sp1" >${data[i].tle}</span> 
                <span class="sp2" >${data[i].fr}</span> 
                <p class="con-name">${data[i].proName}</p>
                <p class="con-pri"><span>¥</span><span>${data[i].price}</span></p>
            </li>`

        }
      } else {
        if (i == 9) {
          $str += `<li>
          <a href="./detailGood.html?id=${data[i].proid}"
            ><img
              src="${data[i].proImg}"
              alt=""
          /></a><br>
          <img src="${data[i].gif}" alt="" class = "gif">
          <span class="sp1" >${data[i].tle}</span> 
          <p class="con-name">${data[i].proName}</p>
          <p class="con-pri"><span>¥</span><span>${data[i].price}</span></p>
          </li>`
        } else if (i == 10) {
          $str += `<li>
           <a href="./detailGood.html?id=${data[i].proid}"
             ><img
               src="${data[i].proImg}"
               alt=""
           /></a><br>
           <img src="${data[i].me}" alt="" class = "me">
           <span class="sp1" >${data[i].tle}</span> 
           <p class="con-name">${data[i].proName}</p>
           <p class="con-pri"><span>¥</span><span>${data[i].price}</span></p>
         </li>`
        } else if (i == 11) {
          $str += `<li>
           <a href="./detailGood.html?id=${data[i].proid}"
             ><img
               src="${data[i].proImg}"
               alt=""
           /></a><br>
           <img src="${data[i].me}" alt="" class = "me">
           <span class="ske" >${data[i].ske}</span> 
           <span class="sp1" >${data[i].tle}</span> 
           <p class="con-name">${data[i].proName}</p>
           <p class="con-pri"><span>¥</span><span>${data[i].price}</span></p>
          </li>`

        } else if (i == 13) {
          $str += `<li>
          <a href="./detailGood.html?id=${data[i].proid}"
            ><img
              src="${data[i].proImg}"
              alt=""
          /></a><br>
          <span class="sp1" >${data[i].tle}</span> 
          <span class="sp2" >${data[i].fr}</span> 
          <p class="con-name">${data[i].proName}</p>
          <p class="con-pri"><span>¥</span><span>${data[i].price}</span></p>
          </li>`
        } else if (i == 14) {
          $str += `<li>
           <a href="./detailGood.html?id=${data[i].proid}"
             ><img
               src="${data[i].proImg}"
               alt=""
           /></a><br>
           <img src="${data[i].me}" alt="" class = "me">
           <span class="sp1" >${data[i].tle}</span> 
           <p class="con-name">${data[i].proName}</p>
           <p class="con-pri"><span>¥</span><span>${data[i].price}</span></p>
          </li>`
        } else {
          $str += `<li>
           <a href="./detailGood.html?id=${data[i].proid}"
             ><img
               src="${data[i].proImg}"
               alt=""
           /></a><br>
           <span class="sp1" >${data[i].tle}</span> 
           <p class="con-name">${data[i].proName}</p>
           <p class="con-pri"><span>¥</span><span>${data[i].price}</span></p>
         </li>`
        }
      }
    } else if (i >= 15) {
      if(i == 15){
        $str += `<li>
           <a href="./detailGood.html?id=${data[i].proid}"
             ><img
               src="${data[i].proImg}"
               alt=""
           /></a><br>
           <span class="sp1" >${data[i].tle}</span> 
           <p class="con-name">${data[i].proName}</p>
           <p class="con-pri"><span>¥</span><span>${data[i].price}</span></p>
         </li>`
      }else
      if(i == 16){
        $str += `<li>
         <a href="./detailGood.html?id=${data[i].proid}"
           ><img
             src="${data[i].proImg}"
             alt=""
         /></a><br>
         <span class="sal" >${data[i].sal}</span> 
         <span class="dly" >${data[i].dly}</span> 
         <p class="con-name">${data[i].proName}</p>
         <p class="con-pri"><span>¥</span><span>${data[i].price}</span></p>
       </li>`
      }else if(i == 18){
        $str += `<li>
         <a href="./detailGood.html?id=${data[i].proid}"
           ><img
             src="${data[i].proImg}"
             alt=""
         /></a><br>
         <span class="new" >${data[i].new}</span> 
         <span class="sp2" >${data[i].fr}</span> 
         <p class="con-name">${data[i].proName}</p>
         <p class="con-pri"><span>¥</span><span>${data[i].price}</span></p>
       </li>`
      }else if(i == 19){
        $str += `<li>
         <a href="./detailGood.html?id=${data[i].proid}"
           ><img
             src="${data[i].proImg}"
             alt=""
         /></a><br>
         <img src="${data[i].me}" alt="" class = "me">
         <span class="sal" >${data[i].sal}</span> 
         <p class="con-name">${data[i].proName}</p>
         <p class="con-pri"><span>¥</span><span>${data[i].price}</span></p>
       </li>`
      }else{
        $str += `<li>
         <a href="./detailGood.html?id=${data[i].proid}"
           ><img
             src="${data[i].proImg}"
             alt=""
         /></a><br>
         <p class="con-name">${data[i].proName}</p>
         <p class="con-pri"><span>¥</span><span>${data[i].price}</span></p>
       </li>`
      } 

    }
  }
  var $listObj = $('#con-list');
  $listObj.html($str);
})


