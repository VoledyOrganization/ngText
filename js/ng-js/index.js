/**
 * Created by Administrator on 2016/3/16.
 */
var app = angular.module('App', ['ngFilter'])
app.controller('appCtrl', ['$scope', function ($s) {
    $s.nub=""

    //模拟数据
    $s.datas = [
        { id:1, name:'AA', nub:'15012813530', price:'150', str:1, idNub:'360312199303111512', region:'深圳市', sex:0, degree:0, pay:0, course:0},
        { id:2, name:'BB', nub:'13754511252', price:'250', str:0, idNub:'360312512545884578', region:'广州市', sex:0, degree:3, pay:3, course:1},
        { id:3, name:'CC', nub:'15042512512', price:'450', str:3, idNub:'361245152521222825', region:'杭州市', sex:1, degree:4, pay:1, course:0},
        { id:4, name:'DD', nub:'15845845421', price:'350', str:3, idNub:'360212512512512544', region:'深圳市', sex:0, degree:2, pay:0, course:3},
        { id:5, name:'EE', nub:'15120212512', price:'260', str:2, idNub:'361254125455424454', region:'深圳市', sex:0, degree:1, pay:2, course:2},
    ];
    //新增学员
    $s.addStudent=function(){
        $(".editCoach").fadeIn("fast");
        $s.editCoach=true;
    }

    //分配课程
    /*声明$scope中的两个数组对象（可以合并为1个），分别用来存储data的id和name；*/
    $s.selected=[];
    $s.selectedTags=[];
    var updateSelected=function(action,id,name){
        //如果add操作 且‘数组[id]’ 元素不存在，向数组中添加数据（id，name）；
        if(action=='add' && $s.selected.indexOf(id)==-1){
            $s.selected.push(id);
            $s.selectedTags.push(name);
        }
        //如果remove操作 且‘数组[id]’ 元素存在，从数组中删除数据（id，name）；
        if(action=='remove' && $s.selected.indexOf(id)!=-1){
            var idx=$s.selected.indexOf(id);
            $s.selected.splice(idx,1);
            $s.selectedTags.splice(idx,1);
        }
    }

    //定义了updateSelection方法，这个方法会在html页面的checkbox被点击时调用；
    $s.updateSelection=function($event,id){ //定义了updateSelected方法，这个方法会被updateSelection调用；
        var checkbox=$event.target;  //通过$event变量来获取点击的dom元素；
        var action=(checkbox.checked?'add':'remove');  //通过checkbox的当前状态来决定是add操作还是remove操作；
        updateSelected(action,id,checkbox.name)  //调用updateSelected方法，更新数据；
    }

    //定义了isSelected方法，用来判断ID为id的checkbox是否被选中，然后传值给页面的ng-checked指令；
    $s.isSelected=function(id,name){
        return $s.selected.indexOf(id,name) >=0;
    }

    $s.upLesson=function(){
        debugger;
        console.log($s.datas.nub)
        if($s.selected==""){
            voledy.alert({width:310,height:150,type:'msg',title:'您还未选择分配课程的学生哦！',header:'分配课程'});
            return false;
        }
        //var datas=$s.datas
        //for (var i=0;i<datas.length; i++){
        //    alert(datas[i]);
        //}
        if($s.selected){
            voledy.alert({width:310,height:150,type:'msg',title:'您所选择的城市不一致！',header:'分配课程'});
            return false;
        }
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

