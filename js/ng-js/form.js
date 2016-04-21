/*angular for 提现*/
var app=angular.module("app",[]);

/*main 控制器*/
app.controller("ApplicationAccount",["$scope",function($s){
    /*------初始化-------*/
    //填写企业基本信息
    $s.posName="";  //商户名称  深港驾校
    $s.isposName="";
    $s.RegistrationNumber=""; //工商注册号 222222222222222
    $s.isRegistrationNumber="";
    $s.Organizations=""; //阻止机构代码  121222222
    $s.isOrganizations="";
    $s.TaxRegistration=""; //税务登记账户  121222222
    $s.isTaxRegistration="";
    $s.PublicAccount=""; //对公账户   111111
    $s.isPublicAccount="";
    $s.BankDeposit=""; //开户银行
    $s.isBankDeposit="";
    $s.Branches=""; //开户支行
    $s.isBranches="";
    $s.BankDeposit="BankDepositId";    //开户银行默认选中字段
    $s.Branches="BranchesId";
    //填写喱喱企业账户
    $s.password="";  //支付密码  1993219810110
    $s.ispassword="";
    $s.confirmPassword=""; //确认密码  1993219810110
    $s.isconfirmPassword="";
    $s.telphone=""; //手机号  15012513530
    $s.istelphone="";
    $s.obtainCode="";  //倒计时
    $s.isobtainCode="";  //倒计时
    $s.captcha=""; //验证码  888888
    $s.isCaptcha="";

    /*------申请开通-------*/
    $s.accountText=true;           //默认显示
    $s.opened=function(){
        $s.title=true;             //显示标题
        $s.accountText=false;      //隐藏'申请开通信息'
        $s.basicInformation=true;  //显示'填写企业基本信息'
    }

    /*------填写企业基本信息------*/
    $s.BasicInformation=function(){
        //商户名称
        debugger;
        if(!regCombination('*').test($s.posName)){
            $s.isposName='请填写商户名称';
            return false;
        }else if(!regCombination('chinese',[2,50]).test($s.posName)){
            $s.isposName='请输入中文字符';
            return false;
        }else {
            $s.isposName=0;
        };
        //工商注册号
        if(!regCombination('*').test($s.RegistrationNumber)){
            $s.isRegistrationNumber='请填写工商注册号';
            return false;
        }else if(!regCombination('number',[15,15]).test($s.RegistrationNumber)){
            $s.isRegistrationNumber='请输入15位数字';
            return false;
        }else {
            $s.isRegistrationNumber=0;
        };
        //组织机构代码
        if(!regCombination('*').test($s.Organizations)){
            $s.isOrganizations='请填写组织机构代码';
            return false;
        }else if(!regCombination('special',[6,20]).test($s.Organizations)){
            $s.isOrganizations='输入的长度或类型有误';
            return false;
        }else {
            $s.isOrganizations=0;
        };
        //税务登记账号
        if(!regCombination('*').test($s.TaxRegistration)){
            $s.isTaxRegistration='请填写税务登记账号';
            return false;
        }else if(!regCombination('special',[6,20]).test($s.TaxRegistration)){
            $s.isTaxRegistration='输入的长度或类型有误';
            return false;
        }else {
            $s.isTaxRegistration=0;
        };
        //对公账户
        if(!regCombination('*').test($s.PublicAccount)){
            $s.isPublicAccount='请填写对公账户';
            return false;
        }else if(!regCombination('number',[6,20]).test($s.PublicAccount)){
            $s.isPublicAccount='输入的长度或类型有误';
            return false;
        }else {
            $s.isPublicAccount=0;
        };
        //开户银行
        if(!regCombination('*').test($s.BankDeposit)){
            $s.isBankDeposit='请选择开户银行';
            return false;
        }else {
            $s.isBankDeposit=0;
        };
        //开户支行
        if(!regCombination('*').test($s.Branches)){
            $s.isBranches='请选择开户支行';
            return false;
        }else {
            $s.isBranches=0;
        };
        //以下是ajax执行成功后的步骤
        $s.basicInformation=false;  //隐藏'企业基本信息'
        $s.businessAccount=true;    //显示'填写喱喱企业账户'
        /*填写企业基本信息的AJAX*/
        $.AJAX({
            url:config.basePath+"user/update-password",
            data:{
                password:$s.newPassword,
            },
            success:function(data){
                console.log(data);
            }
        });
    };

    /*------填写喱喱企业账户------*/
    $s.BusinessAccount=function(){
        //支付密码
        if(!regCombination('*').test($s.password)){
            $s.ispassword='请填写支付密码';
            return false;
        }else if(!regCombination('*',[8,16]).test($s.password)){
            $s.ispassword='8-16的字母、数字或字符';
            return false;
        }else {
            $s.ispassword=0;
        };
        //确认密码
        if(!regCombination('*').test($s.confirmPassword)){
            $s.isconfirmPassword='请填写确认密码';
            return false;
        }else if($s.confirmPassword!=$s.password){
            $s.isconfirmPassword='两次密码输入不一致';
            return false;
        }else {
            $s.isconfirmPassword=0;
        };
        //手机号
        if(!regCombination('*').test($s.telphone)){
            $s.istelphone='请填写手机号';
            return false;
        }else if(!regCombination('phone').test($s.telphone)){
            $s.istelphone='手机号格式错误';
            return false;
        }else {
            $s.istelphone=0;
        };
        //验证码
        if(!regCombination('*').test($s.captcha)){
            $s.iscaptcha='请填写验证码';
            return false;
        }else if(!regCombination('number',[6,6]).test($s.captcha)){
            $s.iscaptcha='验证码为6为数字';
            return false;
        }else {
            $s.iscaptcha=0;
        };
        //以下是ajax执行成功后的步骤
        $s.businessAccount=false;    //显示'填写喱喱企业账户'
        $s.liliAudit=true;   //显示等待喱喱审核
        /*填写喱喱企业账户的AJAX*/
        $.AJAX({
            url:config.basePath+"user/update-password",
            data:{
                password:$s.newPassword,
            },
            success:function(data){
                console.log(data);
            }
        });
    };



}]);