/**
 * @method Tab切换
 * @param {String} 参数一：nav栏标签；参数二：content栏标签;参数三：激活样式
 */

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