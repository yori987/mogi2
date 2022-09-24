"use strict";

//スクロールすると左から背景色が伸びる

function fadeAnime(){ 
  $('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
    }
  }); 

	$('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
    }
  }); 
}

	$(window).scroll(function () {  // スクロールしたら 
		fadeAnime();  // 関数を実行 
	});

	// フェードイン
function fadeIn(){ 
  // フェードアップ 
  $('.fadeUpTrigger').each(function(){  // fadeUpTriggerクラスの各要素に対して 
    let scroll = $(window).scrollTop();  // スクロール位置を取得する 
    let triTop = $(this).offset().top + 100;  // 要素の上部より100px下の位置を取得 
    let winHeight = $(window).height();  // ウィンドウの高さを取得 
    if (scroll >= triTop - winHeight){  // 画面内に要素が入ったかを判断 
      $(this).addClass('fadeUp');  // fadeUpクラスを付与 
    } else { 
      $(this).removeClass('fadeUp');  // fadeUpクラスを削除 
    } 
  }); 
} 

$(window).scroll(function () {  // スクロールしたら 
  fadeIn();  // 関数を実行 
});

//ハンバーガーメニュー


$(".hamburger").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".gnav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$(".gnav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $(".gnav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});