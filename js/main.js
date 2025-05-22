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


  document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('menu-select');
    const contents = document.querySelectorAll('.menu__content');

    select.addEventListener('change', function () {
      // すべてのコンテンツを非表示にする
      contents.forEach(function (content) {
        content.style.display = 'none';
      });

      // 選択されたオプションに対応するコンテンツを表示する
      const selectedId = this.value + '_content';
      const selectedContent = document.getElementById(selectedId);
      if (selectedContent) {
        selectedContent.style.display = 'block';
      }
    });

    // 初期表示として、最初のオプションに対応するコンテンツを表示する
    const initialId = select.value + '_content';
    const initialContent = document.getElementById(initialId);
    if (initialContent) {
      initialContent.style.display = 'block';
    }
  });
// id="js_selectToggle"が指定されたselect要素を取得
const selectToggle = document.getElementById('js_selectToggle');
if (selectToggle) {
  // valueが空のセレクトメニューを初期表示に設定
  // selectToggle.value = "selectCont01"; ←削除もしくは、初期表示したい値を指定すればOK
  // セレクトメニューが変更されたら実行
  selectToggle.addEventListener('change', () => {
    // 変更されたセレクトメニューのvalueを取得
    const toggleVal = selectToggle.value;
    document.querySelectorAll('.bl_selectCont').forEach(selectCont => {
      // 各コンテンツのIDがtoggleValと一致するかを確認し、条件に応じてis_activeクラスを制御
      const isActive = selectCont.id === toggleVal;
      // isActiveがtrueならis_activeクラスを追加し、falseなら削除
      selectCont.classList.toggle('is_active', isActive);
    });
  });
}






