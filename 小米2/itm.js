/*
* @Author: lenovo
* @Date:   2017-11-07 16:41:28
* @Last Modified by:   lenovo
* @Last Modified time: 2017-11-20 21:29:00
*/
$(function () {
    $(".a29").mouseenter(function () {

        $(this).children().eq(-1).show()
    })
    $(".a29").mouseleave(function () {
        $(this).children().eq(-1).hide()
    })

    //////////////////////////////////////
    $(".a4").mouseenter(function () {
        $(".nav2list1").addClass("nav2list1op")
        var index = ($(".a4").index(this))
        $(".nav2list1").children().hide();
        $(".nav2list").eq(index).css({"display": "flex"})
        console.log($(".nav2list").eq(index))
        $(".a4").css({"padding-bottom": "20"})
    })
    $(".a4").mouseleave(function () {
        $(".nav2list1").removeClass("nav2list1op")
    })
    $(".nav2list1").mouseenter(function () {
        $(".nav2list1").addClass("nav2list1op")
        $(".a4").css({"padding-bottom": "0"})
    })
    $(".nav2list1").mouseleave(function () {
        $(".nav2list1").removeClass("nav2list1op")
        $(".a4").css({"padding-bottom": "20px"})
    })
    /////////////////////////////////////////////
    $(".che").mouseenter(function () {
        $(".zoche").css("opacity","1")
        $(".zoche").css({"height": "100px"})
    })
    $(".che").mouseleave(function () {
        $(".zoche").css("opacity","0")
        $(".zoche").css({"height": "0"})
    })
    /////////////////////////////////////////////////
    let tt = setInterval(fn, 3500)
    let flag = true;
    let numm = 0;
    $(".a21").mouseenter(function () {
        clearInterval(tt);
    })
    $(".a21").mouseleave(function () {
        tt = setInterval(fn, 3500)
    })
    function fn() {
        numm = numm + 1;
        if (numm == $(".a22").length) {
            numm = 0;
        }
        $(".a22").css({opacity: "0"})
        $(".a24").css({background: ""})

        $(".a22").eq(numm).animate({opacity: 1}, 1000, function () {
            flag = true;
        });
        $(".a24").eq(numm).css({background: "white"})

    }

    $(".banner-right").click(function () {
        if (flag) {
            flag = false;
            fn();
        }
    })
    function fns() {
        numm = numm - 1;
        if (numm < 0) {
            numm = $(".a22").length - 1
        }
        $(".a22").css({opacity: "0"})
        $(".a24").css({background: ""})
        $(".a22").eq(numm).animate({opacity: 1}, 1000, function () {
            flag = true;
        })
        $(".a24").eq(numm).css({background: "white"})

    }
    $(".banner-left").click(function () {
        if (flag) {
            flag = false;
            fns();
        }
    })
    $(".a24").click(function () {
        $(".a22").css({opacity: 0})
        var index = ($(".a24").index(this))
        $(".a24").css({background: ""})

        $(".a22").eq(index).animate({opacity: 1}, 500, function () {

        })
        $(".a24").eq(index).css({background: "white"})
        numm = index;
    })


    // ////////////////////
     let aa=document.getElementsByClassName("a33")[0]
    let cc=aa.getElementsByClassName("a34")
    let yiru=document.getElementsByClassName("yiru")
    console.log(cc,yiru)
    for(let i=0;i<cc.length;i++){
    cc[i].onmouseover=function(){
        for(let j=0;j<cc.length;j++){
          yiru[j].className="yiru"
           cc[j].className="a34"
        }
        yiru[i].className="yiru block"
         cc[i].className="a34 hbn"

        }}
    let zx=document.getElementsByClassName("a53")[0]
    let zc=zx.getElementsByClassName("a34")
    let zxc=document.getElementsByClassName("yi")
    console.log(zc,zxc)
    for(let i=0;i<zc.length;i++){
    zc[i].onmouseover=function(){
        for(let j=0;j<zc.length;j++){
          zxc[j].style.display="none"
           zc[j].className="a34"
        }
        zxc[i].style.display="block"
         zc[i].className="a34 hbn"

        }}

    let dbn=document.getElementsByClassName("a55")[0]
    let db=dbn.getElementsByClassName("a34")
    let dm=document.getElementsByClassName("yy")
    console.log(dbn,dm)
    for(let i=0;i<db.length;i++){
    db[i].onmouseover=function(){
        for(let j=0;j<db.length;j++){
          dm[j].style.display="none"
           db[j].className="a34"
        }
        dm[i].style.display="block"
         db[i].className="a34 hbn"

        }}
    let dz=document.getElementsByClassName("a56")[0]
    let dza=dz.getElementsByClassName("a34")
    let dzz=document.getElementsByClassName("yz")
    console.log(dza,dzz)
    for(let i=0;i<dza.length;i++){
    dza[i].onmouseover=function(){
        for(let j=0;j<dza.length;j++){
          dzz[j].style.display="none"
           dza[j].className="a34"
        }
        dzz[i].style.display="block"
         dza[i].className="a34 hbn"

        }}
    let qwe=document.getElementsByClassName("a57")[0]
    let zs=qwe.getElementsByClassName("a34")
    let zxx=document.getElementsByClassName("yn")
    console.log(zs,zxx)
    for(let i=0;i<zs.length;i++){
    zs[i].onmouseover=function(){
        for(let j=0;j<zs.length;j++){
          zxx[j].style.display="none"
           zs[j].className="a34"
        }
        zxx[i].style.display="block"
         zs[i].className="a34 hbn"

        }}

    /////////////////////////////////////////////////
    let butt=document.getElementsByTagName("button")
    let bj=butt[1]
    let bl=butt[0]
    let ic=bj.getElementsByClassName("iconfont")[0]
    let ib=bl.getElementsByClassName("iconfont")[0]
    let op=document.getElementsByClassName("box")[0]
    let count=op.childElementCount
    let child=op.children[0].offsetWidth+parseInt(getComputedStyle(op.children[0],null).marginRight)
    console.log(butt,bj,bl,op,count,child,ic,ib)
    op.style.width=`${count*child}px`
    let nun=0;
    bj.onclick=function(){

        if(nun==1){
            bl.className="di"
            // ib.style.color="#ff6700";
            bj.className=""
            return
        }
        nun++;
        op.style.transform=`translateX(${-1240*nun}px)`

    }
    bl.onclick=function(){

        if(nun==0){
            bj.className="di"
             // ic.style.color="#ff6700"
            bl.className=""
            return;
        }
        nun--;
        op.style.transform=`translateX(${-1240*nun}px)`

    }

/////////////////////////////////////////////////////
function xia(n){
        let lk=document.getElementsByClassName("a88");
        let ln=lk[n].getElementsByClassName("feng");
        let widths=lk[n].offsetWidth;
        

        let ss=document.getElementsByClassName("a99")[n];
        let dd=document.getElementsByClassName("a100")[n];
        
        let ab=document.getElementsByClassName("a91");
        let as=ab[n].getElementsByClassName("a98");

        let flag=true;
        let now=next=0;
        function fnn(){
            next++;
            if(next==ln.length){
                next=0;
            }
            ln[next].style.left=`${widths}px`;
            animate(ln[now],{left:-widths});
            animate(ln[next],{left:0}, function(){
            for(let i=0;i<as.length;i++){
                as[i].className="a98"
            }
            as[now].className="a98 dsaa";

            flag=true;
        });

            now=next;

        }
        function fnn1(){
            next--;
            if(next==-1){
                next=ln.length-1;
            }
            ln[next].style.left=`-${widths}px`;
            animate(ln[now],{left:widths});
            animate(ln[next],{left:0}, function (){
            for(let i=0;i<as.length;i++){
                as[i].className="a98"
            }
            as[now].className="a98 dsaa";

            flag=true;
        });

            now=next;

        }
        dd.onclick=function(){
            if(flag){
                fnn();
                flag=false;
            }

        }
        ss.onclick=function(){
            if(flag){
                fnn1();
                flag=false;
            }

        }

        for(let i=0;i<as.length;i++){
            as[i].onclick=function(){
                if(i==now){return}
                else if(i<now){
                    animate(ln[now],{left:widths});
                    animate(ln[i],{left:0});
                    for(let j=0;j<as.length;j++){
                         as[j].className="a98";
                    }
                    as[i].className="a98 dsaa";
                }
                else if(i>now){
                    animate(ln[now],{left:-widths});
                    animate(ln[i],{left:0});
                    for(let j=0;j<as.length;j++){
                        as[j].className="a98";
                    }
                    as[i].className="a98 dsaa";
                }
                now=next=i;
            }
        }
    }
    let xia1=new xia(0);
    let xia2=new xia(1);
   let xia3=new xia(2);
    let xia4=new xia(3);
})