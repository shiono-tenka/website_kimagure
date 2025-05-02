// ⬇︎querySelectorで.hamburgerクラスの要素を選択して、
// addEventListenerというのは、「こういうときに」の意で今回は「クリックした時に」、
// functionというのは、「何をしてください」の指令で今回は「activeのクラスを付け足してください」。
// toggleはスイッチ要員で1回押したらactiveのクラスをつけ（ON）、もう1回押したらactiveのクラスを外す（OFF)
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.hamburger').addEventListener
        ('click', function () {
            this.classList.toggle('active');
            // ⬇︎naviにも同様にactiveをつけたり外したりしてください。
            document.querySelector('.navi').classList.toggle('active')
        });
    // console.log("OKEN");
});



