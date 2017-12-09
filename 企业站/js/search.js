/**
 * Created by Administrator on 2017/12/5 0005.
 */

$(function () {
    //点击返回时，返回历史记录
    $('#back').click(function () {
        history.back()
    })
    let search = '';//声明一个search用来存放字符串数据（本地存储）
    let arr         //声明一个arr用来存字符串转换
      //将本地数据已存数据再次放入search;
       if (localStorage.history) { //如果有本地记录，将本地记录放入search
        search = localStorage.history
        arr = search.split(",")  //search转换为数组
        arr.shift();
        arr = arr.slice(-5);
            let str = '';
            arr.forEach(val => {
            str+= `<span>${val}</span>`
            })
       $('.span').html(str)
       }

    //事件委派点击span,获取历史记录信息，ajax搜索
    $('#record').on('click', 'span', function () {
        let thisa = $(this).text()
        console.log(thisa);
        $.ajax({
            url: "https://api.jisuapi.com/news/search?keyword=" + thisa + "&appkey=3732400a5ce14b54",
            dataType: 'jsonp',
            beforeSend: function () {
                $('#gd').show()
                $('#record').hide()
            },
            success: function (res) {
                $('#gd').hide()
                $('#record').hide()
                let arr = res.result.list;
                console.log(1);
                let str = '';
                arr.forEach(val => {
                    if(val.pic == ""){
                    str += `<li class="list" >
                                    <a >
                                        ${val.title}
                                        <i>${val.time}</i>
                                        <i>${val.src}</i>
                                    </a>
                                </li>`;
                     }
                    else{
                    str += `<li class="list">
                                <a >
                                    <div class="left">
                                        <img src="${val.pic}" alt="">
                                    </div>
                                    <div class="con">${val.title}
                                        <i>${val.time}</i>
                                        <i>${val.src}</i>
                                    </div>
                                </a>
                             </li>`;
                     }
                })
                $('#aaa').html(str);
                //点击内容后调整详情页2
                $('.content').on('click', '.list', function () {
                    let indexsa = $('.list').index(this)
                    console.log(indexsa)
                    localStorage.val = thisa;
                    localStorage.indexsa = indexsa;
                    location.href = 'particulars2.html'
                })
            }
        })


    })
    //鼠标失去焦点后，获取input框val值，并执行ajax搜索
    $('.search input').blur(function () {
         let values = $(this).val();
        //存搜索内容到search
        if (values == '') {
            return
        }
        else {
            if (!arr.includes($(this).val())) {
                search += "," + values
                localStorage.history = search;
                let arr
                arr = localStorage.history.split(",")
            }
            arr.shift()
            arr = arr.slice(-5)
            let str = '';
            arr.forEach(val => {
                str+= `<span>${val}</span>`
            })
            $('.span').html(str)
             }
        $.ajax({

            url: "https://api.jisuapi.com/news/search?keyword=" + values + "&appkey=3732400a5ce14b54",
            dataType: 'jsonp',
            beforeSend: function () {
                $('#gd').show()
                $('#record').hide()
            },
            success: function (res) {

                let arr1 = res.result.list;
                $('#gd').hide()
                $('#record').hide()
                let arr = res.result.list;
                console.log(1);
                let str = '';
                arr.forEach((val, index) => {
                    if(val.pic == ""){
                    str += `<li class="list" >
                                    <a >
                                        ${val.title}
                                        <i>${val.time}</i>
                                        <i>${val.src}</i>
                                    </a>
                                </li>`;
                    }
                    else{
                    str += `<li class="list">
                                <a>
                                    <div class="left">
                                        <img src="${val.pic}" alt="">
                                    </div>
                                    <div class="con">${val.title}
                                        <i>${val.time}</i>
                                        <i>${val.src}</i>
                                    </div>
                                </a>
                             </li>`;
                     }
                })
                $('#aaa').html(str);
                //点击内容后调整详情页2
                $('.content').on('click', '.list', function () {
                    let indexsa = $('.list').index(this)
                    console.log(indexsa)
                    localStorage.val = values;
                    localStorage.indexsa = indexsa;
                    location.href = 'particulars2.html'
                })
            },
        })
    })


    $('.sosuo').click(function () {
        console.log(1)
        // 删除新闻栏目
        $('#wrapper').remove();
        // 获取输入内容
        let values = $('input').val();
        // 输出搜索新闻
        $.ajax({
            url: "https://api.jisuapi.com/news/search?keyword=" + values + "&appkey=3732400a5ce14b54",
            dataType: 'jsonp',
            beforeSend: function () {
                $('#gd').show()
                $('#record').hide()
            },
            success: function (res) {
                $('#gd').hide()
                $('#record').hide()
                let arr = res.result.list;
                let str = "";
                arr.forEach((val, index)=>{
                    if(val.pic == ""){
                    str += `<li class="list" >
                                <a >
                                    ${val.title}
                                    <i>${val.time}</i>
                                    <i>${val.src}</i>
                                </a>
                            </li>`;
                     }
                    else{
                    str += `<li class="list">
                                <a >
                                    <div class="left">
                                        <img src="${val.pic}" alt="">
                                    </div>
                                    <div class="con">${val.title}
                                        <i>${val.time}</i>
                                        <i>${val.src}</i>
                                    </div>
                                </a>
                            </li>`;
                     }
                })
                $('#aaa').html(str);
                //点击内容后调整详情页2
                $('.content').on('click', '.list', function () {
                    let indexsa = $('.list').index(this)
                    console.log(indexsa)
                    localStorage.val = values;
                    localStorage.indexsa=indexsa;
                    location.href = 'particulars2.html'
                })
            },
        })
    })


})