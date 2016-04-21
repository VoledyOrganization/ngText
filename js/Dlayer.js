/**
 * Created by Administrator on 2016/3/25.
 */

var voledy = (function () {
    return new Dlayer();
})(window);

//构造函数
function Dlayer() {
    this.setting = {
        width: 400,
        height: 300,
        time: 2000,
        header: "信息弹出层",
        type: "msg",
        title: "Hi，我来咯！请点击确认吧！！"
    }
}

/*-----------信息层----------*/
Dlayer.prototype.alert = function (json) {
    var type = defAttr(json, this.setting, "type");
    var html = '<div class="DlayerPopum infoBox" style="width: ' + defAttr(json, this.setting, "width") + 'px; height: ' + defAttr(json, this.setting, "height") + 'px">' +
        '<div class="d-header">' + defAttr(json, this.setting, "header") + '<span class="d-close btnClose"><i class="fa fa-close fa-lg"></i></span></div>' +
        '<div class="d-content"><span class="type type-' + type + '"></span><p>' + defAttr(json, this.setting, "title") + '</p></div>' +
        '<div class="d-btn btnOk btnClose">确 定</div></div><div class="DlayerShade btnClose infoBox"></div>';
    $("body").append(html);
    closeLayer($('.btnClose'), 'infoBox');  //infoBox为要关闭弹出窗口和遮罩层
}

/*---------确认or取消层--------*/
Dlayer.prototype.sure = function (json, fn) {
    var html = '<div class="DlayerPopum infoBox" style="width: ' + defAttr(json, this.setting, "width") + 'px; height:' + defAttr(json, this.setting, "height") + 'px">' +
        '<div class="d-header">' + defAttr(json, this.setting, "header") + '<span class="d-close btnClose"><i class="fa fa-close fa-lg"></i></span></div>' +
        '<div class="d-content"><span class="type type-sure"></span><p>' + defAttr(json, this.setting, "title") + '</p></div>' +
        '<div><div class="d-btn btnSubmit btnSubmitSure">确 定</div><div class="d-btn btnSubmit btnClose">取 消</div><div class="Dclear"></div></div></div><div class="DlayerShade btnClose infoBox"></div>';
    $("body").append(html);
    closeLayer($('.btnClose'), 'infoBox')  //infoBox为要关闭弹出窗口和遮罩层
    sureBtn($(".btnSubmitSure"), 'infoBox', fn); //infoBox为关闭弹出窗口   fn为单击确定后执行的函数
}

/*-----------信息加载层----------*/
Dlayer.prototype.loading = function (json) {
    var src = "loading-1";
    if (json) {
        switch (json["srcType"]) {  //图片筛选
            case 0:
                src = "loading-0"
                break;
            case 1:
                src = "loading-1"
                break;
            case 2:
                src = "loading-2"
                break;
            case 3:
                src = "loading-3"
                break;
            case 4:
                src = "loading-4"
                break;
            case 5:
                src = "loading-5"
                break;
            case 6:
                src = "loading-6"
                break;
            case 7:
                src = "loading-7"
                break;
            case 8:
                src = "loading-8"
                break;
            case 9:
                src = "loading-9"
                break;
            case 10:
                src = "loading-10"
                break;
        }
    }
    var html = '<div class="DlayerPopum Dloading" style="width: ' + defAttr(json, this.setting, "width") + 'px; height:' + defAttr(json, this.setting, "height") + 'px">' +
        '<div class="d-content"><img src="images/' + src + '.gif"><p>' + defAttr(json, this.setting, "title") + '</p></div>' +
        '</div><div class="DlayerShade"></div>'
    $("body").append(html);
    $('.DlayerShade').css({"cursor": "wait"})
}

/*-----------2s后关闭加载层----------*/
Dlayer.prototype.steTime = function (json) {
    var type = defAttr(json, this.setting, "type");
    var html = '<div class="DlayerPopum infoBox" style="width: ' + defAttr(json, this.setting, "width") + 'px; height:' + defAttr(json, this.setting, "height") + 'px">' +
        '<div class="d-content"><span class="type type-' + type + '"></span><p>' + defAttr(json, this.setting, "title") + '</p></div>' +
        '</div><div class="DlayerShade infoBox"></div>'
    $("body").append(html);
    setTimeout(function () {
        $(".infoBox").remove();
    }, defAttr(json, this.setting, "time"));
}


//弹出层默认大小处理函数
function defAttr(json, setting, attr) {
    return json ? json[attr] || setting[attr] : setting[attr];
}

//关闭遮罩及弹窗
function closeLayer(btnClose, Classbse) {
    btnClose.click(function () {
        $('.' + Classbse).remove();
    })
}

//确认or取消中的确认按钮
function sureBtn(btnSure, Classbse, fn) {
    btnSure.click(function () {
        $("." + Classbse).remove();
        fn()
    })
}










