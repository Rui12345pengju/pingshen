/*
* @Author: lenovo
* @Date:   2017-11-11 21:28:20
* @Last Modified by:   lenovo
* @Last Modified time: 2017-11-19 11:18:39
*/
$(function () {
    $(".ch").mousemove(function () {
        $(".ch").css("left","-80px")
    })
    $(".ch").mouseout(function () {
        $(".ch").css("left","-22px")
    })
    $(".chacu1").mousemove(function () {
        $(".chacu1").css("left","-80px")
    })
    $(".chacu1").mouseout(function () {
        $(".chacu1").css("left","-22px")
    })
    $(".chacu2").mousemove(function () {
        $(".chacu2").css("left","-80px")
    })
    $(".chacu2").mouseout(function () {
        $(".chacu2").css("left","-22px")
    })
    $(".mmm").eq(3).mousemove(function () {
        $(".yidong").show()
    })
    $(".mmm").eq(3).mouseout(function () {
        $(".yidong").hide()
    })
})
window.onload=function(){
    let banner=document.getElementsByClassName("banner-center-backbox")[0]
    let bannerlist=document.getElementsByClassName("banner-yuan-back")[0]
    let dian=document.getElementsByClassName("banner-yuan")
    let bannerli=document.getElementsByClassName("banner-pic")
    console.log(banner,bannerlist,dian,bannerli)
    let widths=bannerli[0].offsetWidth;
    console.log(-widths)
    let flag=true;
    let t=setInterval(fn, 6500)
    banner.onmouseenter=function()
    {
        clearInterval(t);
    }
    banner.onmouseleave=function(){
        clearInterval(t);
        t=setInterval(fn, 6500)
    }
    let now=0;
    let next=0;
    function fn()
    {    next++;
        if(next==bannerli.length){
            next=0;
        }
        bannerli[next].style.left=`${widths}px`;
        animate(bannerli[next],{left:"0"},500,Tween.Sine.easeOut,function()
        { for(i=0;i<dian.length;i++)
        {
            dian[i].style.background="#C1CED2";
            dian[now].style.background="#D22086";
            flag=true;
        }})
        animate(bannerli[now],{left:`${-widths}`},500,Tween.Sine.easeOut)
        now=next;
    }
    function fns()
    {
        next--
        if(next==-1)
        {
            next=bannerli.length-1;
        }
        bannerli[next].style.left=`${-widths}px`;
        animate(bannerli[next],{left:0},function()
        { for(i=0;i<dian.length;i++)
        {
            dian[i].style.background="#C1CED2";
            dian[now].style.background="#D22086";
            flag=true;
        }})
        animate(bannerli[now],{left:`${widths}`})
        now=next;
    }
    let up=true;
    let right=document.getElementsByClassName("right-dui")[0]
    let left=document.getElementsByClassName("left-dui")[0]
    left.onclick=function()
    {
        if(flag)
        {
            fn();
            flag=false;
        }
    }
    right.onclick=function()
    {
        if(flag)
        {
            fns();
            flag=false;
        }
    }

    function fn111() {
        flag=true;
    }

    for(let i=0;i<dian.length;i++)
    {   dian[i].onclick=function() {
        if(now==i)
        {
            return;
        }
        if(i>now)
        {
            bannerli[i].style.left=`${widths}px`;
            animate(bannerli[now],{left:-widths},500)
            animate(bannerli[i],{left:0},500)
            dian[now].style.background="#C1CED2";
            dian[i].style.background="#D22086"
        }
        if(i<now)
        {
            bannerli[i].style.left=`${-widths}px`;
            animate(bannerli[now],{left:widths},500)
            animate(bannerli[i],{left:0},500)
            dian[now].style.background="#C1CED2";
            dian[i].style.background="#D22086"
        }
        next=now=i;
    }
    }
    ///////////////////////////////////////////
    let shan=document.getElementsByClassName("banner-top-backbox")[0]
    let top=shan.getElementsByClassName("banner-top-backbox1 a1")
    let chen=document.getElementsByClassName("shanchen")
    console.log(shan,top,chen)
    for(let i=0;i<top.length;i++){
        top[i].onmouseover=function(){
          chen[i].style.opacity="1"
        }
        top[i].onmouseout=function(){
          chen[i].style.opacity="0"
        }
    }
    ////////////////////////////////////
    let center=document.querySelectorAll(".bofang-center")
    let bor=document.querySelector(".bofang-right")
    let bol=document.querySelector(".bofangleft")
    console.log(center,bor,bol)
    let nuo=0;
    bor.onclick=function(){
        nuo++
        if(nuo==center.length){
            nuo=0
        }
       for(let i=0;i<center.length;i++){
        center[i].className="bofang-center"
        center[nuo].className="bofang-center kl"
       }
    }
    bol.onclick=function(){
        nuo--
        if(nuo==-1){
            nuo=center.length-1;
        }
       for(let i=0;i<center.length;i++){
        center[i].className="bofang-center"
        center[nuo].className="bofang-center kl"
       }
    }
    ///////////////////////////////////////
    let op=document.getElementsByClassName("ffg")[0];
    let box=document.getElementsByClassName("four-backbox");
    let widthss=box[0].offsetWidth;
    let child=widthss+parseInt(getComputedStyle(box[0],null).marginRight);
    op.style.width=`${child*12}px`
    let saa=document.getElementsByClassName("four")[0]
    let bj=document.getElementsByClassName("left-ge")[0];
    let bk=document.getElementsByClassName("right-ge")[0];

    let num=0;
    bk.onclick=function(){
        if(num==8){
            num=0;
        }
        op.style.transition="0.5s";
        if(num==0)
        {
            op.style.transition="0s";
        }
        num++;
        op.style.transform="translateX("+child*-num+"px)"
    }
    bj.onclick=function(){
        if(num==0){
            num=8
        }
        op.style.transition="0.5s";
        if(num==8)
        {
            op.style.transition="0s";
        }
        num--;
       op.style.transform="translateX("+child*-num+"px)"
    }
    let count=document.querySelector(".ffg")
    function fa(){
        if(num==8){
            num=0;
        }
        count.appendChild(box[0]);
        op.style.transition="0.5s";
        num++;
        op.style.transform="translateX("+child*-num+"px)"
    }
    function fnsaa(){
        if(num==0){
            return;
        }
        num--
        op.style.transform="translateX("+child*-num+"px)"
    }
    let t3=setInterval(fa,4000)
    saa.onmouseover=function(){
        clearInterval(t3)
    }
    saa.onmouseout=function(){
        t3=setInterval(fa,4000)
    }
}
