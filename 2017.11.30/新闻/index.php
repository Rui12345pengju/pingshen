    <?php
    $user=$_POST["user"];
    $pass=$_POST["pass"];
if($user=='admin'){
    if($pass=='123456'){
    echo "登录成功<a href='index.html'>点击跳转</a>";
    }else{
    echo "密码错误! <a href='index.html'>点击跳转</a>";
    }
}else{
    echo "账号不在<a href='index.html'>点击跳转</a>";
}
