// ==UserScript==
// @name         河南宗教理论知识竞赛
// @namespace    Ne-21
// @version      1.0.0
// @description  河南省大学生中国特色社会主义民族宗教理论知识竞赛95分，题库来源https://github.com/therehello/2021ZJJS,方法来源https://github.com/ProbiusOfficial/ZZULI_AC_OF_ZSJS
// @author       Ne-21
// @match        *://exam.hm86.cn/web/front/study/examination.php*
// @icon         https://blog.gocos.cn/wp-content/uploads/2021/07/2021-07-2782.ico
// @require      https://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @require      https://unpkg.com/dayjs@1.8.21/dayjs.min.js
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11
// @grant        unsafeWindow
// @run-at       document-end
// @license      MIT
// ==/UserScript==

var _self = unsafeWindow;
var $ = _self.jQuery || top.jQuery;
var dayjs = _self.dayjs || top.dayjs;

(function () {
    hookAutoSubmitMethod();
    setTimeout(() => {
        _self.autoSubmit()
    }, 5000);
})();

function hookAutoSubmitMethod() {
    let hookAutoSubmit = _self.autoSubmit;
    _self.autoSubmit = function () {
        var nowtime = Date.now()
        var starttime = dayjs(nowtime - 1200000).format("YYYY-MM-DD HH:mm:ss")
        var result_content = '[{"orderindex":"1","topicid":"1000042","result":"D"},{"orderindex":"2","topicid":"1000038","result":"A"},{"orderindex":"3","topicid":"1000006","result":"A"},{"orderindex":"4","topicid":"1000115","result":"A"},{"orderindex":"5","topicid":"1000142","result":"D"},{"orderindex":"6","topicid":"1000011","result":"A"},{"orderindex":"7","topicid":"1000145","result":"D"},{"orderindex":"8","topicid":"1000105","result":"D"},{"orderindex":"9","topicid":"1000139","result":"C"},{"orderindex":"10","topicid":"1000096","result":"D"},{"orderindex":"11","topicid":"1000116","result":"A"},{"orderindex":"12","topicid":"1000101","result":"B"},{"orderindex":"13","topicid":"1000047","result":"D"},{"orderindex":"14","topicid":"1000039","result":"D"},{"orderindex":"15","topicid":"1000090","result":"C"},{"orderindex":"16","topicid":"1000023","result":"B"},{"orderindex":"17","topicid":"1000120","result":"B"},{"orderindex":"18","topicid":"1000118","result":"C"},{"orderindex":"19","topicid":"1000053","result":"C"},{"orderindex":"20","topicid":"1000084","result":"B"},{"orderindex":"21","topicid":"1000159","result":"B"},{"orderindex":"22","topicid":"1000095","result":"A"},{"orderindex":"23","topicid":"1000085","result":"C"},{"orderindex":"24","topicid":"1000079","result":"C"},{"orderindex":"25","topicid":"1000097","result":"C"},{"orderindex":"26","topicid":"1000044","result":"B"},{"orderindex":"27","topicid":"1000014","result":"B"},{"orderindex":"28","topicid":"1000036","result":"B"},{"orderindex":"29","topicid":"1000160","result":"C"},{"orderindex":"30","topicid":"1000086","result":"A"},{"orderindex":"31","topicid":"1000092","result":"D"},{"orderindex":"32","topicid":"1000156","result":"A"},{"orderindex":"33","topicid":"1000109","result":"C"},{"orderindex":"34","topicid":"1000077","result":"D"},{"orderindex":"35","topicid":"1000157","result":"C"},{"orderindex":"36","topicid":"1000007","result":"D"},{"orderindex":"37","topicid":"1000058","result":"A"},{"orderindex":"38","topicid":"1000102","result":"A"},{"orderindex":"39","topicid":"1000049","result":"C"},{"orderindex":"40","topicid":"1000099","result":"A"},{"orderindex":"41","topicid":"1000113","result":"C"},{"orderindex":"42","topicid":"1000153","result":"C"},{"orderindex":"43","topicid":"1000117","result":"D"},{"orderindex":"44","topicid":"1000155","result":"B"},{"orderindex":"45","topicid":"1000161","result":"C"},{"orderindex":"46","topicid":"1000123","result":"D"},{"orderindex":"47","topicid":"1000013","result":"B"},{"orderindex":"48","topicid":"1000080","result":"C"},{"orderindex":"49","topicid":"1000111","result":"B"},{"orderindex":"50","topicid":"1000005","result":"C"},{"orderindex":"51","topicid":"1000204","result":"A,B,C,D"},{"orderindex":"52","topicid":"1000298","result":"A,B"},{"orderindex":"53","topicid":"1000289","result":"A,B,C,D"},{"orderindex":"54","topicid":"1000288","result":"A,B,D"},{"orderindex":"55","topicid":"1000219","result":"B,C,D"},{"orderindex":"56","topicid":"1000212","result":"A,B,C"},{"orderindex":"57","topicid":"1000209","result":"A,B,C"},{"orderindex":"58","topicid":"1000216","result":"C,D"},{"orderindex":"59","topicid":"1000207","result":"A,B,D"},{"orderindex":"60","topicid":"1000221","result":"A,B,C,D"},{"orderindex":"61","topicid":"1000294","result":"A,B,C,D"},{"orderindex":"62","topicid":"1000198","result":"A,B,C,D"},{"orderindex":"63","topicid":"1000213","result":"A,B,C,D"},{"orderindex":"64","topicid":"1000283","result":"A,B,C"},{"orderindex":"65","topicid":"1000163","result":"A,B,C,D"},{"orderindex":"66","topicid":"1000211","result":"A,B,C,D"},{"orderindex":"67","topicid":"1000194","result":"A,B,D"},{"orderindex":"68","topicid":"1000187","result":"A,B"},{"orderindex":"69","topicid":"1000224","result":"A,B,C,D"},{"orderindex":"70","topicid":"1000205","result":"A,B,D"},{"orderindex":"71","topicid":"1000165","result":"A,B,C,D"},{"orderindex":"72","topicid":"1000192","result":"A,B,C,D"},{"orderindex":"73","topicid":"1000188","result":"A,C,D"},{"orderindex":"74","topicid":"1000182","result":"B,D"},{"orderindex":"75","topicid":"1000183","result":"A,C"},{"orderindex":"76","topicid":"1000175","result":"A,B,C,D"},{"orderindex":"77","topicid":"1000286","result":"B,C"},{"orderindex":"78","topicid":"1000199","result":"A,B,C"},{"orderindex":"79","topicid":"1000284","result":"A,B,C,D"},{"orderindex":"80","topicid":"1000181","result":"A,B,C,D"},{"orderindex":"81","topicid":"1000256","result":"A"},{"orderindex":"82","topicid":"1000240","result":"A"},{"orderindex":"83","topicid":"1000232","result":"A"},{"orderindex":"84","topicid":"1000260","result":"A"},{"orderindex":"85","topicid":"1000234","result":"A"},{"orderindex":"86","topicid":"1000266","result":"B"},{"orderindex":"87","topicid":"1000244","result":"A"},{"orderindex":"88","topicid":"1000299","result":"A"},{"orderindex":"89","topicid":"1000270","result":"A"},{"orderindex":"90","topicid":"1000251","result":"A"},{"orderindex":"91","topicid":"1000300","result":"A"},{"orderindex":"92","topicid":"1000273","result":"B"},{"orderindex":"93","topicid":"1000245","result":"A"},{"orderindex":"94","topicid":"1000255","result":"B"},{"orderindex":"95","topicid":"1000262","result":"A"},{"orderindex":"96","topicid":"1000254","result":"B"},{"orderindex":"97","topicid":"1000268","result":"A"},{"orderindex":"98","topicid":"1000248","result":"A"},{"orderindex":"99","topicid":"1000243","result":"B"},{"orderindex":"100","topicid":"1000249","result":"A"}]';
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
        title: '<span style="color:#a6dc88;">初始化成功,5S后提交答案！</span>',
        text: '欢迎使用',
    })
}