# ZZULI_AC_OF_ZSJS
河南省大学生中国特色社会主义民族宗教理论知识竞赛
题库文件是data.js，其他答题逻辑没有问题。

（为了造福后面的各位玩家，提示一下，如果后面还有的话题目id在每一次都是唯一的

如果各位有能力可以自己fork后更改题库文件
- - -
这里说一下另外的方法，先获取一份题目，完成之后进行数据格式化，下面给出样例：
```
'[{"orderindex":"1","topicid":"1000042","result":"D"},{"orderindex":"2","topicid":"1000038","result":"A"},{"orderindex":"3","topicid":"1000006","result":"A"},{"orderindex":"4","topicid":"1000115","result":"A"},{"orderindex":"5","topicid":"1000142","result":"D"},{"orderindex":"6","topicid":"1000011","result":"A"},{"orderindex":"7","topicid":"1000145","result":"D"},{"orderindex":"8","topicid":"1000105","result":"D"},{"orderindex":"9","topicid":"1000139","result":"C"},{"orderindex":"10","topicid":"1000096","result":"D"},{"orderindex":"11","topicid":"1000116","result":"A"},{"orderindex":"12","topicid":"10
....
//多选题的样例:
{"orderindex":"54","topicid":"1000288","result":"A,B,D"}

最后的的提交逻辑大致解释一下：
程序调用 autoSubmit()
然后该调用getExamAnswerFn()这个函数，从开始遍历读取你的答案，如果有没有答的题则alert
一切无误后被封装在 result_content 中
再通过	var params={paperid:paperid,csmpagerid:csmpagerid,starttime:starttime,result_content:result_content,memberusercode:memberusercode,memberschoolid:memberschoolid,membernickname:membernickname,ssm:getSSM()}构造头信息
最后通过
$.post(url,params,function(responseText){
    ...
}
进行提交，
所以只需要替换掉 result_content 即可。
	
```

- - -
另外的方法，用控制台延迟时间，F12后进入控制台，控制台中输入min = 40，可重置倒计时，
```
min = xx
```

min只是用来控制autoSubmit()函数，min<=0时会执行自动提交

而要注意的是，提交的时候使用的 "starttime" 来校验是否过短或者超时答题，请确保提交的时候，starttime 和现在的时间差大于15分钟。
```
starttime = 'xxxx-xx-xx xx:xx:xx'
```

- - -
如果你只是想要截图分数+流水：

在控制台(console)中键入 
```
alert("xxx的得分为xx分，流水号：xxxxxxxx，提交时间xxxx-xx-xx xx:xx:xx")

```

