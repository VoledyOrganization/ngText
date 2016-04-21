//(function(window, angular, undefined) {
//})(window, window.angular);\

/*自定义 $filter 公共过虐器*/
var app=angular.module('ngFilter', []);

/*--------------过滤器--------------*/
//“缴费分类”过滤器
app.filter('state',function(){
    return function (type){
        var typeTex=""
        switch (type){
            case 0:
                typeTex='已缴费'
                break;
            case 1:
                typeTex='未缴费'
                break;
            case 2:
                typeTex='已通过'
                break;
            case 3:
                typeTex='未通过'
                break;
        }
        return typeTex;
    }
})


//身份证保留后4位过滤器
app.filter("idNubLast4",function(){
    return function (type){
        return type.slice(-4);   //slice()方法表示：从已有的元素中返回选定的元素。
    }
})


//性别过滤器
app.filter("sexType",function(){
    return function (type){
        var typeTex="";
        switch (type){
            case 0:
                typeTex="男"
                break;
            case 1:
                typeTex="女"
                break;
        }
        return typeTex;
    }
})

//学历过滤器
app.filter("degreeType",function(){
    return function (type){
        var typeTex="";
        switch (type){
            case 0:
                typeTex="高职"
                break;
            case 1:
                typeTex="大专"
                break;
            case 2:
                typeTex="本科"
                break;
            case 3:
                typeTex="研究生"
                break;
            case 4:
                typeTex="博士"
                break;
        }
        return typeTex;
    }
})

//支付类型过滤器
app.filter("payType",function(){
    return function (type){
        var typeTex="";
        switch (type){
            case 0:
                typeTex="微信"
                break;
            case 1:
                typeTex="支付宝"
                break;
            case 2:
                typeTex="财付通"
                break;
            case 3:
                typeTex="Apple Pay"
                break;
        }
        return typeTex;
    }
})

//课程过滤器
app.filter("classType",function(){
    return function (type){
        var typeTex="";
        switch (type){
            case 0:
                typeTex="数学"
                break;
            case 1:
                typeTex="语文"
                break;
            case 2:
                typeTex="英语"
                break;
            case 3:
                typeTex="物理"
                break;
        }
        return typeTex;
    }
})






