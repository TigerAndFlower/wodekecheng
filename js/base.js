/**
 * @method Tab切换
 * @param {String} 参数一：nav栏标签；参数二：content栏标签;参数三：激活样式
 */
$(".item-content-item").eq(0).css("display","block")
function tabSwitch(navEle, contentEle, activeClass, callBack) {
 
  $(navEle).on("click", function () {
    
    $(this)
      .siblings()
      .removeClass(activeClass);
    $(this).addClass(activeClass);
    $(contentEle).hide();
    $(contentEle)
      .eq($(this).find("span").attr("data-ind"))
      .show();
 
    if (callBack) {
      callBack();
    }
  });
}

// 点击右侧下拉箭头，出现选项，选中改变tabs列表以及内容；
testTab()

function testTab() {
  $("body").on("click", ".item-nav>i", function (event) {
    event.stopPropagation();
    if (!$(this).hasClass("on")) {
      $(this).addClass("on");
      $(".testTab").show()
    } else {
      $(this).removeClass("on");
      $(".testTab").hide()
    }
  })
  var firstNum,
    lastNum
  $("body").on("click", ".testTab .testTab-item", function (event) {
    event.stopPropagation();
    firstNum = $.trim($(this).find(".firstNum").text());
    lastNum =  $.trim($(this).find(".lastNum").text());
    // 每次切换第一个显示
    var a = $(".task-header select").val();
    $(".item-content-item").hide();
    $(".homework-item").eq(a).find(".item-content-item").eq(firstNum-1).show();
    $(".item-nav .item-nav-item").removeClass("active");
    $(".homework-item").eq(a).find(".item-nav .item-nav-item").eq(0).addClass("active");
    for (i = firstNum; i <= lastNum;) {
      for (j = 0; j < 10; j++) {
        
        $(".homework-item").eq(a).find(".item-nav .item-nav-item").eq(j).find("h3 span").text(i).attr("data-ind", (i - 1))
        i++;
      }
    }
    $(".item-nav>i").removeClass("on");
    $(".testTab").hide();
    
  })

}
// 阶段选择
$(".task-header select").bind("change",function(){
  var a = $(".task-header select").val();
  $(".homework-item").hide();
  $(".homework-item").eq(a).show();
  $(".homework-item").eq(a).find(".item-content-item").eq(0).show();
  $(".homework-item").eq(a).find(".item-nav-item").removeClass("active")
  $(".homework-item").eq(a).find(".item-nav-item").eq(0).addClass("active");
})

/**
 * 
 * @method 倒计时
 * @param {String} time 时间戳 秒
 * @param {Fcuntion} callBack 
 */
function timeCountDown(time, callBack) {
  var timeId = setInterval(function () {
    time -= 1;
    var currentTime = timeFormat(time);
    if (time <= 0) {
      clearInterval(timeId);
      $('.time-count-down .time').html("00:00:00");
      callBack && callBack();
    }

    // $('.time-count-down .time').html(currentTime)
  }, 1000)
}
timeCountDown(36000, function () {
  console.log(11);
})
/**
 * 
 * @method 时间戳转化为时间
 * @param {String} time 秒数
 * @param {Number} type 时间格式类型
 * @returns {String} 格式化时间
 */
function timeFormat(time) {
  var s = time % 60 >= 10 ? time % 60 : '0' + time % 60;
  var m = Math.floor(time % 3600 / 60) >= 10 ? Math.floor(time % 3600 / 60) : '0' + Math.floor(time % 3600 / 60);
  var h = Math.floor(time / 3600) >= 10 ? Math.floor(time / 3600) : '0' + Math.floor(time / 3600);
  var fomart = h + ':' + m + ':' + s;
  return fomart;
}

$("body").on("click", ".toast-down", function (event) {
  event.stopPropagation();
  if (!$(this).hasClass("on")) {
    $(this).addClass("on");
    $(this).siblings(".toast").show();
  } else {
    $(this).removeClass("on");
    $(this).siblings(".toast").hide();
  }
})
$("body").on("click", ".toast-item", function () {
  $(this).parents(".toast").siblings(".toast-down").removeClass("on");
  $(this).parents(".toast").hide();
})
$("body").on("click", function () {
  $(".toast").hide();
  $(".toast-down").removeClass("on");
  $(".testTab").hide();
  $(".item-nav>i").removeClass("on");

})