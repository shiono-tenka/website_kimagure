// ⬇︎querySelectorで.hamburgerクラスの要素を選択して、
// addEventListenerというのは、「こういうときに」の意で今回は「クリックした時に」、
// functionというのは、「何をしてください」の指令で今回は「activeのクラスを付け足してください」。
// toggleはスイッチ要員で1回押したらactiveのクラスをつけ（ON）、もう1回押したらactiveのクラスを外す（OFF)
// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector('.hamburger').addEventListener
//         ('click', function () {
//             this.classList.toggle('active');
//             ⬇︎naviにも同様にactiveをつけたり外したりしてください。
//             document.querySelector('.header__hamburger-content').classList.toggle('active')
//         });
// });

// 画面読み込んだ時に動く＝DOMContentLoaded
// DOMContentLoadedの中でaddEventListener（今回はクリック）のときに、を定義
// 変数を定義してるのが18行〜19行、document.querySelectorはhtmlの要素を指定してる（何を=hamburger、どこが=nav、の部分）
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header__hamburger-content');
    const menuItems = document.querySelectorAll('.header__hamburger-content--menu li'); 

    // ハンバーガーボタンのクリックで開閉

    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // メニューのリンククリックでメニューを閉じる
    // forEach ループ処理　で検索
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
});




