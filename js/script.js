'use strict';

/*===================================
# header

====================================*/
// >高さの分だけコンテンツを下げる
// $(function () {
//   var height = $(".MainVisual").height();
//   $("#js-header").css("margin-top", height + 10);//10pxだけ余裕をもたせる
// });
// $(function () {
//   var height = $(".head_banner").height();
//   $("#header").css("margin-top", height);
// })

// >ハンバーガーメニューを開く
// activeがなかったら追加,あれば削除する記述
const btn = document.querySelector('.hamburger');
const container = document.querySelector('.sp-nav');

btn.addEventListener('click',() => {
  btn.classList.toggle('active');
  container.classList.toggle('active');
});

/*===================================
# recipe
画像をクリックしたら切り替える設定
====================================*/
const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index) {
  item.onclick = function() {
    document.getElementById('mainimg').src = this.dataset.image;
    // console.log(this.dataset.image);
  }
});

/*===================================
# info
swiper.jsでスライダーを実装
====================================*/

  // 初期化
  const swiper = new Swiper(".swiper" , {
    direction: "horizontal",
    // ループ
    loop: true,
    autoplay: {
      delay: 2500,
    },
    // 動き方
    effect: "fade",
    // 速さ
    speed: 2000,
    // 画面にスライドを何枚表示させるか
    // slidesPerView: 1,
    // slidesPerViewと合わせて使う 左右に画像を少し表示するかしないか、デフォルトはfalse
    // centeredSlides: true,
    // ページネーションの記述
    pagination: {
      el: ".swiper-pagination"
    }
    // ナビボタンの記述
    // navigation: {
    //   nextEl: "swiper-button-next",
    //   prevEl: "swiper-button-prev"
    // }
  });




/*===================================
#
====================================*/


/*===================================
#
====================================*/
