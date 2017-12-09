/*
* @Author: lenovo
* @Date:   2017-11-08 23:24:21
* @Last Modified by:   lenovo
* @Last Modified time: 2017-11-21 18:39:17
*/

$(function(){
	$(".a56").eq(0).mousemove(function(){
		$(".wodet").show()

	})
    $(".a56").eq(0).mouseout(function(){
        $(".wodet").hide()

	})
	$("#cv").mousemove(function(){
		$(".wodet1").show()
	})
    $("#cv").mouseout(function(){
        $(".wodet1").hide()
	})
	$(".a56").eq(6).mousemove(function(){
		$(".shanjia").show()
	})
    $(".a56").eq(6).mouseout(function(){
        $(".shanjia").hide()
	})
    $(".a56").eq(4).mousemove(function(){
        $(".poi").show()

    })
    $(".a56").eq(4).mouseout(function(){
        $(".poi").hide()

    })
    $(".a91").eq(0).mouseover(function(){
        $(".baohan").eq(0).addClass("mlo")
        $(".baohan").eq(1).removeClass("mlo")
        $(".a91").eq(0).addClass("bnv")
        $(".a91").eq(1).removeClass("bnv")
    })
    $(".a91").eq(1).mouseover(function(){
        $(".baohan").eq(1).addClass("mlo")
        $(".baohan").eq(0).removeClass("mlo")

        $(".a91").eq(0).removeClass("bnv")
        $(".a91").eq(1).addClass("bnv")
    })
///////////////////////////////
    var index = $(".a29").index(this)
    $(".a29").mouseover(function(){
        $(".kapian").eq(index).show()
        })
    $(".a29").mouseout(function(){
        $(".kapian").eq(index).hide()
    })
///////////////////////////////////
    let t;
    let num=0;
    t=setInterval(fn,3000)
    $(".a21").mouseenter(function(){
        clearInterval(t)
    })
    $(".a21").mouseleave(function(){
        clearInterval(t)
        t=setInterval(fn,3000)
    })
    function fn(){
        num++
        if(num==$(".a22").length){
        num=0;
        }
        var index = $(".a22").index(this)
           $(".a22").removeClass("bne")

            $(".a33").css("background","")
        $(".a22").eq(num).addClass("bne")

        $(".a33").eq(num).css("background","yellow")
        }
        $(".a33").mouseover(function(){
            var index=$(".a33").index(this)
            $(".a22").eq(num).removeClass("bne")
            $(".a22").eq(index).addClass("bne")
            $(".a33").css("background","")
            $(".a33").eq(index).css("background","yellow")
            num=index;

        })
//////////////////////////////////////////////////
    let hezi=document.querySelectorAll(".hezi")
    let shu=document.querySelectorAll(".shucu")
    for(let i=0;i<hezi.length;i++){
        hezi[i].onmouseover=function () {
                shu[i].style.opacity="1"
                shu[i].style.right="0"
        }
        hezi[i].onmouseout=function () {
            shu[i].style.opacity="0"
            shu[i].style.right="60px"
        }

    }


    $(".lopp").mousemove(function () {
        $(".maotu").show()
    })
    $(".lopp").mouseout(function () {
        $(".maotu").hide()
    })
///////////////////////////
    let up = false;
    let down = true;
    $(window).scroll(function () {
        let topss= $(document.documentElement).scrollTop()==0?$(document.body).scrollTop():$(document.documentElement).scrollTop();
        let objs = topss
        let chaoshi = document.querySelectorAll(".a82")
        if (objs > $(".a82").eq(0).offset().top - 300) {
            if (down) {
                down = false;
                $(".fff").animate({width: "36px", height: "400px"},200,function () {
                    up = true;
                })
                $('.min').animate({top:0},200,function () {
                    up = true;
                })
            }
        } else {
            if (up) {
                up = false;
                $('.fff').animate({width: "0px", height: "-100px"},200,function () {
                    down = true;
                })
                $('.min').animate({top:"-70"},200,function () {
                    down = true;
                })
            }
        }


        let leftbox = $(".a204 li")
        let nn;
        let arr = ["#64C333", "#000", "#EA5F8D", "#0AA6E8", "#64C333", "#F15453", "#19C8A9", "#000"]
        chaoshi.forEach(function (val, index) {
            if (objs > val.offsetTop - 150) {
                for (let i = 0; i < leftbox.length; i++) {
                    leftbox[i].style.background = "";
                }
                leftbox[index].style.background = arr[index];
                nn = index;
            }
            leftbox.each(function (index,val) {
                leftbox.eq(index).click(function () {
                    $(document.documentElement).animate({scrollTop:$(".a82").eq(index).offset().top},300,function () {
                        $(document.documentElement).stop(true,true)
                    })
                    $(document.body).animate({scrollTop:$(".a82").eq(index).offset().top},300,function () {
                        $(document.documentElement).stop(true,true)
                    })
                })
            })
        })
        $(".xio").click(function () {
            $(document.documentElement).animate({scrollTop:0},500,function () {
                $(document.documentElement).stop(true,true)
            })
            $(document.body).animate({scrollTop:0},500,function () {
                $(document.documentElement).stop(true,true)
            })
        })
    })


////////////////////////////////
        $(".a56").eq(7).mouseover(function(){
    	$(".wangzan").show()
        })
    $(".a56").eq(7).mouseout(function(){
        $(".wangzan").hide()
    })
})
