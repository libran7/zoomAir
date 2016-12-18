/**
 * @author : crazyacking
 * @date : 2016/12/17
 */
$(function(){
    /**
     * @author : crazyacking
     * @date : 2016/12/17
     *
     * 点击查询事件
     *
     */
    $('.but_search').click(function(){
        window.location.href = returnUrl();
    });

});

/**
 * @author : crazyacking
 * @date : 2016/12/17
 *
 * 返回URL
 *
 * @returns {string}
 */
function returnUrl(){
    var stuName = $('input[name="stuName"]').val();
    if(AnAnUtil.isEmpty(stuName)) stuName = "0";
    stuName = encodeURI(stuName);

    var url = '/page/signUpList/1,10,' + stuName + '.html';
    return url;
}
