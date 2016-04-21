/**
 * Created by Administrator on 2016/3/16.
 */
var app = angular.module('App', ['ngFilter'])
app.controller('appCtrl', ['$scope', function ($s) {
    $s.nub=""

    //模拟数据
    $s.datas = [
        { id:1, name:'小A', nub:'15012813530', price:'150', str:1, idNub:'360312199303111512', sex:0, degree:0, pay:0, course:0},
        { id:2, name:'小B', nub:'13754511252', price:'250', str:0, idNub:'360312512545884578', sex:0, degree:3, pay:3, course:1},
        { id:3, name:'小C', nub:'15042512512', price:'450', str:3, idNub:'361245152521222825', sex:1, degree:4, pay:1, course:0},
        { id:4, name:'小D', nub:'15845845421', price:'350', str:3, idNub:'360212512512512544', sex:0, degree:2, pay:0, course:3},
        { id:5, name:'小E', nub:'15120212512', price:'260', str:2, idNub:'361254125455424454', sex:0, degree:1, pay:2, course:2},
    ];
    //新增学员
    $s.addStudent=function(){
        $(".editCoach").fadeIn("fast");
        $s.editCoach=true;
    }

    //分配课程
    $s.upLesson=function(){
        voledy.alert({width:310,height:150,type:'msg',title:'您还未选择分配课程的学生哦！',header:'分配课程'});
    }

    //执行完incolud后加载
    $s.addStudentList=function(){
        $(".cdClose").click(function(){
            $(".editCoach").fadeOut("fast");
        })
    }

    //搜索
    $s.searchType=function(){
        win.showLoading();
        $s.$apply();
    }

    //ng-mouseenter鼠标进入
    $s.iconType=function($event){
        $(".picbox").css({left:$event.pageX-260+"px",top:$event.pageY-265+"px"});
        $s.isshow=true;
    }
    //ng-mouseleave鼠标离开
    $s.cleariconType=function(){
        $s.isshow=false;
    }

}])

