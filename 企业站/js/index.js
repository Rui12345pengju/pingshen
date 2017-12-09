$(function () {
    let t;
    let num=0;
    t=setInterval(fn,3000)
    $("header").mouseenter(function(){
        clearInterval(t)
    })
    $("header").mouseleave(function(){
        clearInterval(t)
        t=setInterval(fn,3000)
    })
    function fn(){
        num++
        if(num==$("section").length){
            num=0;
        }
        var index = $("section").index(this)
        $("section").removeClass("bne")
        $(".yuan").css("background","")
        $("section").eq(num).addClass("bne")
        $(".yuan").eq(num).css("background","blue")

    }
    $(".yuan").mouseover(function(){
        var index=$(".yuan").index(this)
        $("section").eq(num).removeClass("bne")
        $("section").eq(index).addClass("bne")
        $(".yuan").css("background","")
        $(".yuan").eq(index).css("background","blue")
        num=index;

    })
    ///////////////////////////
    window.onscroll=function (){
        var objs=document.body.scrollTop?document.body:document.documentElement;
        var sTop=objs.scrollTop;
       if(sTop<=100){
           $(".xiaotubiao").css("opacity","0")
       }else{
           $(".xiaotubiao").css("opacity","1")
       }
    }
})

