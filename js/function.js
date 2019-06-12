//
//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                           O\  =  /O
//                        ____/`---'\____
//                      .'  \\|     |//  `.
//                     /  \\|||  :  |||//  \
//                    /  _||||| -:- |||||-  \
//                    |   | \\\  -  /// |   |
//                    | \_|  ''\---/''  |   |
//                    \  .-\__  `-`  ___/-. /
//                  ___`. .'  /--.--\  `. . __
//               ."" '<  `.___\_<|>_/___.'  >'"".
//              | | :  `- \`.;`\ _ /`;.`/ - ` : | |e
//              \  \ `-.   \_ __\ /__ _/   .-` /  /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                      佛祖保佑       永无BUG
//

//当DOM元素加载完后执行
window.onload = function () {
    $(".animateFadeIn>img").fadeIn(500);


    // 点击回到最顶端
    $("#toTopBtn").click(function () {
        // console.log("click");
        $("body,html").animate({scrollTop:0},"linear");
    })
};


// page init config
$(".tabbar").load("tabbar.html");
$(".footer").load("footer.html");
$(".functionindex").load("function.html");

// add box shadow
$('ul .inforBox').hover(
    function () {
        $(this).addClass("boxShadow");
    },
    function () {
        $(this).removeClass("boxShadow");
    }
)

//select model
$(".unline").on("click", function (e) {
    // console.log("runing");
    var sid = '';
    if ($(this).hasClass('RQ900')) {
        sid = 'RQ900';
        $('#RQ900').fadeIn().siblings().fadeOut();
    } else if ($(this).hasClass('RQ650')) {
        sid = 'RQ650';
        $('#RQ650').fadeIn().siblings().fadeOut();
    } else if ($(this).hasClass('mitsubishi')) {
        sid = 'mitsubishi';
        $('#mitsubishi').fadeIn().siblings().fadeOut();
    }
})


//  判断滚动高度显示top按钮
$(document).scroll(function () {
    var scrollH = $(document).scrollTop();
    if (scrollH > 100) {
        $(".toTopBtn").fadeIn(100);
    } else {
        $(".toTopBtn").fadeOut(100);
    }
})