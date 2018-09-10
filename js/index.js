$(function () {
    let t=setInterval(move,1000);
    let i=0;

    function move(type="next") {
        if (type =="next") {
            i++;
            if (i > $(".pix").length - 1) {
                i = 0;
            }
        } else if (type =="prve") {
            i--;
            if (i < 0) {
                i = $(".pix").length - 1;
            }
        }
        $(".pix").css("z-index", "5").eq(i).css("z-index", "10");
        $(".bannerR ul li").css("background", "").eq(i).css("background", "#ff6700");
    }

    $(".banner").hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval(move,1000);
    });

    $(".iconleft").click(function () {
        move(type="prve")
    });
    $(".iconright").click(function () {
        move(type="next")
    });

    $(".bannerR ul li").click(function () {
        i=$(this).index();
        $(".pix").css("z-index", "5").eq(i).css("z-index", "10");
        $(".bannerR ul li").css("background", "").eq(i).css("background", "#ff6700");
    });

    $(".tixtlist").hover(function () {
        let i=$(this).index();
        $(".asideBox").eq(i).css("display","block")
    },function () {
        $(".asideBox").css("display","none")
    });

    $(".headernavi-right2").hover(function () {
        $(".spBox").css({
            height:98,
        })
    },function f() {
        $(".spBox").css("height","0")
    });

    $(".list ul li").slice(0,8).hover(function () {
        console.log(1);
        let index=$(this).index();
        console.log(index);
        $(".nav-xxk").css("height","220px");
        $(".list-xxk").eq(index).css("display","block")
    },function () {
        $(".list-xxk").css("display","none");
        $(".nav-xxk").css("height","0")
    })

});