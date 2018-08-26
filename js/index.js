window.onload=function () {
    let spbox=document.getElementsByClassName("spBox")[0];
    let SpBox=document.getElementsByClassName("headernavi-right2")[0];
    SpBox.onmouseenter=function () {
        spbox.style.height="98px";
        spbox.style.boxShadow="0 2px 8px -3px rgba(0,0,0,.5)";
    };
    SpBox.onmouseleave=function () {
        spbox.style.height="0";
        spbox.style.boxShadow="none";
    };
    let asideBox=document.getElementsByClassName("asideBox") ;
    let tixtlist=document.getElementsByClassName("tixtlist");
    for (let i=0;i<tixtlist.length;i++){
        tixtlist[i].onmouseenter=function () {
            asideBox[i].style.display="block";
        };
        tixtlist[i].onmouseleave=function () {
            asideBox[i].style.display="none";
        }
    }
    let jd=document.getElementsByClassName("jd")[1];
    console.log(jd);
    let jdclass=jd.getElementsByClassName("jd-class")[0];
    let lis=jdclass.getElementsByTagName("li");
    let right=jd.getElementsByClassName("right");

    for (let i=0;i<lis.length;i++){
        lis[i].onmouseenter=function () {
            for (let j=0;j<lis.length;j++){
                right[j].style.zIndex="5";
            }
            right[i].style.zIndex="10";
        }
    }

    ////////////////轮播图///////////////////////
    let bannerR=document.getElementsByClassName("bannerR")[0];
    let pix=document.getElementsByClassName("pix");
    let btn=document.getElementsByClassName("button")[0];
    let circle=btn.getElementsByTagName("li");
    let iconleft=bannerR.getElementsByClassName("iconleft")[0];
    let iconright=bannerR.getElementsByClassName("iconright")[0];


    let num=0;
    let t=setInterval(mv,2000);
    circle[0].style.background="#ff6700";
    function mv() {
        for (let i=0;i<pix.length;i++){
            pix[i].style.zIndex="5";
            circle[i].style.background="";
        }
        num++;
        if (num>pix.length-1){
            num=0;
        }
        pix[num].style.zIndex="10";
        circle[num].style.background="#ff6700";
    }
    function mvL() {
        for (let i=0;i<pix.length;i++){
            pix[i].style.zIndex="5";
            circle[i].style.background="";
        }
        num--;
        if (num<0){
            num=pix.length-1;
        }
        pix[num].style.zIndex="10";
        circle[num].style.background="#ff6700";
    }
//////鼠标移入时t失效
    bannerR.onmouseenter=function () {
        clearInterval(t);
    };
    bannerR.onmouseleave=function () {
        t=setInterval(mv,2000);
    };
//////左右按钮//////
    iconleft.onclick=function () {
        mvL();
    };
    iconright.onclick=function () {
        mv();
    };
///////点击圆圈/////
    for (let i=0;i<circle.length;i++){
        circle[i].onclick=function () {
            for (let j=0;j<circle.length;j++){
                circle[j].style.background="";
                pix[j].style.zIndex="5";
            }
            circle[i].style.background="#ff6700";
            pix[i].style.zIndex="10";
            num=i;
        };
    }

/////////////平移轮播图///////////////////
    let contentBanner=document.querySelectorAll(".content-banner");
    let contentBtnL=document.querySelector(".content-button1");
    let contentBtnR=document.querySelector(".content-button2");
    let now=0;
    let next=0;
    console.log(contentBtnR);


    contentBtnL.onclick=function () {
        if (next==contentBanner.length-1){
            return;
        }else{
            fn();
        }

    };
    contentBtnR.onclick=function () {
        if (next<0){
            return;
        }else {
            fn1();
        }

    };


    function fn() {
        next++;
        contentBanner[next].style.left="296px";
        animate(contentBanner[now],{left:-296});
        animate(contentBanner[next],{left: 0});
        now=next;
    }
    function fn1() {
        next--;
        contentBanner[next].style.left="-296px";
        animate(contentBanner[now],{left:296});
        animate(contentBanner[next],{left: 0});
        now=next;
    }

};