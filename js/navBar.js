$('.navBar li').hover(
    function(){
        console.log($(this).children('div').siblings().html());
        $(this)
            .children('div')
                .addClass('underLine')
                    .siblings().addClass('active');
    },
    function(){
        $(this)
            .children('div')
                .removeClass()
                    .siblings().removeClass('active');
    }
)