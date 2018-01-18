$(document).ready(function() {

const c = {
  l : function(log){
    console.log(log);
  }
};

const getImg = () => {
  let imgs = ['images/447H.jpg', 'images/cow.jpg', 'images/icecreammm.jpg', 'images/icecream.jpg', 'images/icecreammmm.jpg', 'images/icecreammmmm.jpg', 'images/icecream6.jpg', 'images/icecream7.jpg', 'images/icecream8.jpg'];

  for(var i = 0; i < imgs.length; i++) {
    let imageVar = ".gallery .image:eq(" + i + ")";
    let url = "url('" + imgs[i] + "')";
    $(imageVar).css('background-image', url);
  }
};
getImg();


const scroll = () => {
  let doc = $(document).scrollTop();
  let nav = $('#mainnav');
 if (doc > 100) {
    nav.css('background-color', 'rgba(245,245,245 , 0.9)');
  } else {
    nav.css('background-color', 'rgba(38, 50, 56, 1)');
  }
};
scroll();
$(document).scroll(function () {scroll();});



});
