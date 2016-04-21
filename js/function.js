/**
 * Created by Administrator on 2016/3/18.
 */

/*获取url hash*/
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}


/*下载app 判断ios和android*/
function downLoadApp(json){
    var downLoadHref=document.getElementById(json.butId);
    /*苹果产品*/
    if(isIos||isIpad){
        downLoadHref.setAttribute("href",json.iosUrl);
    }
    /*安卓产品*/
    if(isAndroid || isPC){
        downLoadHref.setAttribute("href",json.androidUrl);
    }
    /*微信内置浏览器打开*/
    if(json.weiXinEle){
        if(IsWeiXin){
            document.getElementById(json.weiXinEle).style.display='block';
        }
    }
}
/*下载app链接*/
downLoadApp({  //需写在jq  $(function(){})函数内   在a标签上直接写 id="download"即可
    butId:'download', //标签内id值
    iosUrl:'http://www.lilixc.com/driver/ios/stu',  //ios链接可改
    androidUrl:'http://www.lilixc.com/download_s_android.html'  //android链接可改
});


/*--原生扩展 判断各种内核几浏览器版本 --*/
var win=window.top;
var iFadeInterval=260;
var UA=navigator.userAgent;
var isPC=UA.indexOf('Windows NT')>-1;
var isAndroid=UA.indexOf('Android')>-1;
var isIos=UA.indexOf('Mac OS X')>-1;
var isIphone=UA.indexOf('iPhone;')>-1;
var isIpad=UA.indexOf('iPad;')>-1;

var isIE7=UA.indexOf('MSIE 7.0;')>-1;
var isIE8=UA.indexOf('MSIE 8.0;')>-1;
var isIE9=UA.indexOf('MSIE 9.0;')>-1;
var isIE10=UA.indexOf('MSIE 10.0;')>-1;
var isIE11=UA.indexOf('Trident')>-1;
var isFirefox=UA.indexOf('Firefox')>-1;

var IsWeiXin=UA.indexOf('MicroMessenger')>-1;

var isLoading=false;


/*根据参数生成常用的正则表达式
 *string    type 生成的正则表达式类型
 *array     numArr 生成正则的条件数组 例如:[6,16] 也可省略
 */
function regCombination(type,numArr){
    var reg="";
    switch(type){
        case "*":     //"*":"不能为空！"
            if(numArr){
                reg=new RegExp("^[\\w\\W]{"+numArr[0]+","+numArr[1]+"}$");
            }else {
                reg=new RegExp("^[\\w\\W]+$");
            }
            break;
        case "number":    //"number":"请填写数字！
            if(numArr){
                reg=new RegExp("^\\d{"+numArr[0]+","+numArr[1]+"}$");
            }else{
                reg=new RegExp("^\\d+$");
            }
            break;
        case "special":  //"s":"不能输入特殊字符！"
            if(numArr){
                reg=new RegExp("^[\\u4E00-\\u9FA5\\uf900-\\ufa2d\\w\\.\\s]{"+numArr[0]+","+numArr[1]+"}$");
            }else{
                reg=new RegExp("^[\\u4E00-\\u9FA5\\uf900-\\ufa2d\\w\\.\\s]+$");
            }
            break;
        case "chinese":  //"z":"中文验证"
            reg=new RegExp("^[\\u4E00-\\u9FA5\\uf900-\\ufa2d]{"+numArr[0]+","+numArr[1]+"}$");
            break;
        case "postcode":    //"p":"邮政编码！
            reg=new RegExp("^[0-9]{6}$");
            break;
        case "phone":    //"m":"写手机号码！"
            reg=new RegExp("^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$");
            break;
        case "email":   //"e":"邮箱地址格式
            reg=new RegExp("^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");
            break;
        case "url":   //"url":"网址"
            reg=new RegExp("^(\\w+:\\/\\/)?\\w+(\\.\\w+)+.*$");
            break;
    }
    return reg;
}


/*loading加载*/
function showLoading(){
    isLoading=true;
    $("#loading").stop().fadeIn(iFadeInterval);
}

function hideLoading(){
    isLoading=false;
    $("#loading").stop().fadeOut(iFadeInterval);
}




