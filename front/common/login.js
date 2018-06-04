//用户登录渲染
var userName = "";
var userId = "";
hasLogin();
function hasLogin(){
  if(window.localStorage.length != 0 ){
    userName = window.localStorage.userName;
    userId = window.localStorage.userId;
    userPic = window.localStorage.userPic;
    $("#userCenter img").attr("src",userPic);
    $("#userCenter img").after(userName);
    $("#userLogin").addClass("hide");
    $("#userCenter").addClass("show");
    }else if(window.localStorage == "undefined"){
      console.log("请登录");
      window.location.reload(); //刷新当前页面
    }

  $("#logOutBtn").click(function() {
    localStorage.clear();
    alert("退出登录！");
  });

  $("#loginBtn").click(function(){
    var index =layer.open({
      type: 2,
      title: '用户登录',
      shadeClose: true,
      shade: 0.8,
      area: ['380px', '520px'],
      content: './login.html', //iframe的url
      success: function(layero, index) {
        console.log(layero,index);
      },
      end: function () {
        location.reload();
      }
    }); 
  });

}