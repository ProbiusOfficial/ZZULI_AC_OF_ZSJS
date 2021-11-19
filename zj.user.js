// ==UserScript==
// @name                河南宗教理论知识竞赛
// @namespace           Ne-21
// @version             1.0.1
// @description         河南省大学生中国特色社会主义民族宗教理论知识竞赛100分，题库来源https://github.com/therehello/2021ZJJS,方法来源https://github.com/ProbiusOfficial/ZZULI_AC_OF_ZSJS
// @author              Ne-21
// @match               *://exam.hm86.cn/web/front/study/examination.php*
// @icon                https://blog.gocos.cn/wp-content/uploads/2021/07/2021-07-2782.ico
// @require             https://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @require             https://cdn.bootcdn.net/ajax/libs/dayjs/1.10.6/dayjs.min.js
// @require             https://cdn.jsdelivr.net/npm/sweetalert2@11
// @grant               unsafeWindow
// @run-at              document-end
// @license             MIT
// ==/UserScript==

var _self = unsafeWindow;
var $ = _self.jQuery || top.jQuery;
var dayjs = _self.dayjs || top.dayjs;

(function () {
    $(document).ready(function () {
        hookAutoSubmitMethod();
    })
})();

function hookAutoSubmitMethod() {
    if (typeof _self.autoSubmit == "undefined") {
        Swal.fire({
            title: '<span style="color:#DB7093;">初始化失败,正在重新初始化。</span>',
            text: '企鹅群839845604获取更多帮助',
        })
        return hookAutoSubmitMethod()
    } else {
        _self.autoSubmit = function () {
            var nowtime = Date.now()
            var starttime = dayjs(nowtime - 1200000).format("YYYY-MM-DD HH:mm:ss")
            var result_content = '[{"orderindex":"1","topicid":"1000216","result":"C,D"},{"orderindex":"2","topicid":"1000067","result":"D"},{"orderindex":"3","topicid":"1000109","result":"C"},{"orderindex":"4","topicid":"1000134","result":"C"},{"orderindex":"5","topicid":"1000005","result":"C"},{"orderindex":"6","topicid":"1000007","result":"D"},{"orderindex":"7","topicid":"1000090","result":"C"},{"orderindex":"8","topicid":"1000119","result":"D"},{"orderindex":"9","topicid":"1000213","result":"A,B,C,D"},{"orderindex":"10","topicid":"1000125","result":"D"},{"orderindex":"11","topicid":"1000234","result":"A"},{"orderindex":"12","topicid":"1000179","result":"A,B,C,D"},{"orderindex":"13","topicid":"1000243","result":"B"},{"orderindex":"14","topicid":"1000197","result":"C,D"},{"orderindex":"15","topicid":"1000224","result":"A,B,C,D"},{"orderindex":"16","topicid":"1000047","result":"D"},{"orderindex":"17","topicid":"1000096","result":"D"},{"orderindex":"18","topicid":"1000106","result":"B"},{"orderindex":"19","topicid":"1000155","result":"B"},{"orderindex":"20","topicid":"1000017","result":"D"},{"orderindex":"21","topicid":"1000154","result":"A"},{"orderindex":"22","topicid":"1000020","result":"C"},{"orderindex":"23","topicid":"1000173","result":"A,B,C,D"},{"orderindex":"24","topicid":"1000168","result":"A,B,D"},{"orderindex":"25","topicid":"1000249","result":"A"},{"orderindex":"26","topicid":"1000001","result":"B"},{"orderindex":"27","topicid":"1000140","result":"B"},{"orderindex":"28","topicid":"1000264","result":"B"},{"orderindex":"29","topicid":"1000027","result":"C"},{"orderindex":"30","topicid":"1000068","result":"A"},{"orderindex":"31","topicid":"1000147","result":"B"},{"orderindex":"32","topicid":"1000195","result":"A,B,C,D"},{"orderindex":"33","topicid":"1000286","result":"B,C"},{"orderindex":"34","topicid":"1000229","result":"B"},{"orderindex":"35","topicid":"1000143","result":"C"},{"orderindex":"36","topicid":"1000118","result":"C"},{"orderindex":"37","topicid":"1000019","result":"C"},{"orderindex":"38","topicid":"1000057","result":"C"},{"orderindex":"39","topicid":"1000176","result":"A,B,C,D"},{"orderindex":"40","topicid":"1000267","result":"B"},{"orderindex":"41","topicid":"1000123","result":"D"},{"orderindex":"42","topicid":"1000269","result":"A"},{"orderindex":"43","topicid":"1000203","result":"A,B,C,D"},{"orderindex":"44","topicid":"1000107","result":"B"},{"orderindex":"45","topicid":"1000220","result":"B,C"},{"orderindex":"46","topicid":"1000295","result":"A,B,C,D"},{"orderindex":"47","topicid":"1000250","result":"B"},{"orderindex":"48","topicid":"1000112","result":"D"},{"orderindex":"49","topicid":"1000150","result":"D"},{"orderindex":"50","topicid":"1000158","result":"D"},{"orderindex":"51","topicid":"1000284","result":"A,B,C,D"},{"orderindex":"52","topicid":"1000039","result":"D"},{"orderindex":"53","topicid":"1000094","result":"B"},{"orderindex":"54","topicid":"1000079","result":"C"},{"orderindex":"55","topicid":"1000261","result":"A"},{"orderindex":"56","topicid":"1000159","result":"B"},{"orderindex":"57","topicid":"1000219","result":"B,C,D"},{"orderindex":"58","topicid":"1000012","result":"B"},{"orderindex":"59","topicid":"1000258","result":"A"},{"orderindex":"60","topicid":"1000161","result":"C"},{"orderindex":"61","topicid":"1000127","result":"A"},{"orderindex":"62","topicid":"1000288","result":"A,B,D"},{"orderindex":"63","topicid":"1000008","result":"C"},{"orderindex":"64","topicid":"1000232","result":"A"},{"orderindex":"65","topicid":"1000103","result":"C"},{"orderindex":"66","topicid":"1000300","result":"A"},{"orderindex":"67","topicid":"1000087","result":"B"},{"orderindex":"68","topicid":"1000270","result":"A"},{"orderindex":"69","topicid":"1000210","result":"B,C"},{"orderindex":"70","topicid":"1000231","result":"A"},{"orderindex":"71","topicid":"1000209","result":"A,B,C"},{"orderindex":"72","topicid":"1000137","result":"C"},{"orderindex":"73","topicid":"1000124","result":"D"},{"orderindex":"74","topicid":"1000233","result":"B"},{"orderindex":"75","topicid":"1000285","result":"C,D"},{"orderindex":"76","topicid":"1000100","result":"C"},{"orderindex":"77","topicid":"1000225","result":"A,B,C,D"},{"orderindex":"78","topicid":"1000251","result":"A"},{"orderindex":"79","topicid":"1000199","result":"A,B,C,D"},{"orderindex":"80","topicid":"1000297","result":"A,B,C,D"},{"orderindex":"81","topicid":"1000245","result":"A"},{"orderindex":"82","topicid":"1000289","result":"A,B,C,D"},{"orderindex":"83","topicid":"1000095","result":"A"},{"orderindex":"84","topicid":"1000247","result":"A"},{"orderindex":"85","topicid":"1000222","result":"A,B,C,D"},{"orderindex":"86","topicid":"1000075","result":"D"},{"orderindex":"87","topicid":"1000133","result":"D"},{"orderindex":"88","topicid":"1000115","result":"A"},{"orderindex":"89","topicid":"1000042","result":"D"},{"orderindex":"90","topicid":"1000282","result":"A,B,D"},{"orderindex":"91","topicid":"1000205","result":"A,B,D"},{"orderindex":"92","topicid":"1000099","result":"A"},{"orderindex":"93","topicid":"1000274","result":"B"},{"orderindex":"94","topicid":"1000170","result":"A,B,C,D"},{"orderindex":"95","topicid":"1000002","result":"A"},{"orderindex":"96","topicid":"1000171","result":"A,B,C,D"},{"orderindex":"97","topicid":"1000084","result":"B"},{"orderindex":"98","topicid":"1000181","result":"A,B,C,D"},{"orderindex":"99","topicid":"1000268","result":"A"},{"orderindex":"100","topicid":"1000283","result":"A,B,C"}]';
            var params = { paperid: _self.paperid, csmpagerid: _self.csmpagerid, starttime: starttime, result_content: result_content, memberusercode: _self.memberusercode, memberschoolid: _self.memberschoolid, membernickname: _self.membernickname, ssm: _self.getSSM() }
            var url = "examTopicAction.php?action=submit";
            $.post(url, params, function (responseText) {
                var data = eval("(" + responseText + ")");
                var success = data.success;
                if (success == 0) {
                    alert(data.msg);
                } else if (success == 1) {
                    alert(data.msg);
                    exitfn();
                } else if (success == 2) {
                    alert(data.msg);
                    window.location.href = "examination_ok.php?paperid=" + paperid;
                } else {
                    alert(data.msg);
                };
            });
        }
        Swal.fire({
            title: '<span style="color:#a6dc88;">初始化成功,请点击确定提交答案！</span><br />企鹅群839845604获取更多帮助',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: '确定提交',
            denyButtonText: `有问题？不提交`,
        }).then((result) => {
            if (result.isConfirmed) {
                $('#hmui-grid > tbody > tr:nth-child(2) > td:nth-child(1) > input[type=radio]').click()
                $('.bd > ul > li').attr("class", "on")
                _self.autoSubmit()
                $('#countdown_time').text('考试还有' + random_int(10, 20) + '分' + random_int(10, 40) + '秒')
            } else if (result.isDenied) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '取消提交，准备退出考试',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    exitfn();
                })
            }
        })
    }

}

function random_int(x, y) {
    var x = x;
    var y = y;
    var rand = parseInt(Math.random() * (x - y + 1) + y);
    return rand;
}
