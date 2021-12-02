# ZZULI_AC_OF_ZSJS
河南省大学生中国特色社会主义民族宗教理论知识竞赛
（这真实一个让人无比抓狂的比赛呢）
# 写在最前面
开发脚本的目的从来不是为了赚钱，但是各种各样的原因让人无法接受。  
有幸与几位大佬相识，却不幸目睹了许多农夫与蛇的故事...  
请各位倒卖的有点良心，不要将开源精神如此消费（   
感谢N21大佬曾经提供的脚本，也感谢他让我认识了更多有着相同爱好的人~  
- - -
如果你是来找宗教脚本的，或许可以来旭旭这看看：  

- https://blog.zixutech.cn/archives/332  

再次强调，请不要消费开源精神......！

# 注意......
加密大战之后，目前最稳的是匹配答题，这种方式完全模拟手工，应该不会再出什么问题了，遗憾的是之前的方法全部作废了，
如果你想要获取新脚本，可以来：839845604群，或者直接N21大佬的插件库里面找：  
https://script.521daigua.cn/

或者。。。。  

点下面👇直接拿吧  
https://scriptcat.org/script-show-page/194

  
     
        
        
## 看这里
题库替换的方法以及有大佬写了油猴脚本里Qwq~  
感谢@https://github.com/xVue 大佬    
文件为 zj.user.js  各位按需自取鸭~  
2021/11/19 更新：scriptcat不运行问题，自动提交改为手动提交，分数提至100分，页面优化  
[点这里直接拿脚本](https://greasyfork.org/zh-CN/scripts/435679-%E6%B2%B3%E5%8D%97%E5%AE%97%E6%95%99%E7%90%86%E8%AE%BA%E7%9F%A5%E8%AF%86%E7%AB%9E%E8%B5%9B)   
- - -
@https://github.com/zkeq/religious-auto 写了一份遍历题库的，可以去看看
- - -
有问题或者想要更多脚本请加群：839845604
### 关于这份脚本
该脚本目前没法完成完美答题，因为题库歪了。。。（可以看看下面的方法  
题库文件是data.js，其他答题逻辑没有问题。  
如果各位有能力可以自己fork后更改题库文件  
每一年题库id都会变，但是每年id目前来看肯定是唯一的，当然不清楚后面会不会出现更多的NT  
- - -
### 关于另外一种方法
——我为什么放弃了脚本（雾  
作者：@TherHello:https://www.therehello.top/ & @探姬  
不许拿去商用赚钱！！！！！！！  
#### 页面的提交过程分析如下：
```
程序调用 autoSubmit()  
然后该调用getExamAnswerFn()这个函数，从开始遍历读取你的答案，如果有没有答的题则alert  
一切无误后被封装在 result_content 中  
其格式如下：  

'[{"orderindex":"1","topicid":"1000042","result":"D"},{"orderindex":"2","topicid":"1000038","result":"A"},{"orderindex":"3","topicid":"1000006","result":"A"},{"orderindex":"4","topicid":"1000115","result":"A"},{"orderindex":"5","topicid":"1000142","result":"D"},{"orderindex":"6","topicid":"1000011","result":"A"},{"orderindex":"7","topicid":"1000145","result":"D"},{"orderindex":"8","topicid":"1000105","result":"D"},{"orderindex":"9","topicid":"1000139","result":"C"},{"orderindex":"10","topicid":"1000096","result":"D"},{"orderindex":"11","topicid":"1000116","result":"A"},{"orderindex":"12","topicid":"10
....
//多选题的样例:  
{"orderindex":"54","topicid":"1000288","result":"A,B,D"}  

再通过var params={paperid:paperid,csmpagerid:csmpagerid,starttime:starttime,result_content:result_content,memberusercode:memberusercode,memberschoolid:memberschoolid,membernickname:membernickname,ssm:getSSM()}构造头信息
最后通过
$.post(url,params,function(responseText){
    ...
}
进行提交，
所以只需要替换掉 result_content 即可。
```

所以：大致思路，替换提交的时候的题目数据，直接提交一份95分的题目表单。

#### 过程如下：
1.爬取页面，获得题目ID和题目在本地完成，确保能到95分，再格式化数据，替换提交数据即可。
数据已经为你准备好了(2021): 
2021_data.json_95分：(复制它，别换行！)   
```
'[{"orderindex":"1","topicid":"1000042","result":"D"},{"orderindex":"2","topicid":"1000038","result":"A"},{"orderindex":"3","topicid":"1000006","result":"A"},{"orderindex":"4","topicid":"1000115","result":"A"},{"orderindex":"5","topicid":"1000142","result":"D"},{"orderindex":"6","topicid":"1000011","result":"A"},{"orderindex":"7","topicid":"1000145","result":"D"},{"orderindex":"8","topicid":"1000105","result":"D"},{"orderindex":"9","topicid":"1000139","result":"C"},{"orderindex":"10","topicid":"1000096","result":"D"},{"orderindex":"11","topicid":"1000116","result":"A"},{"orderindex":"12","topicid":"1000101","result":"B"},{"orderindex":"13","topicid":"1000047","result":"D"},{"orderindex":"14","topicid":"1000039","result":"D"},{"orderindex":"15","topicid":"1000090","result":"C"},{"orderindex":"16","topicid":"1000023","result":"B"},{"orderindex":"17","topicid":"1000120","result":"B"},{"orderindex":"18","topicid":"1000118","result":"C"},{"orderindex":"19","topicid":"1000053","result":"C"},{"orderindex":"20","topicid":"1000084","result":"B"},{"orderindex":"21","topicid":"1000159","result":"B"},{"orderindex":"22","topicid":"1000095","result":"A"},{"orderindex":"23","topicid":"1000085","result":"C"},{"orderindex":"24","topicid":"1000079","result":"C"},{"orderindex":"25","topicid":"1000097","result":"C"},{"orderindex":"26","topicid":"1000044","result":"B"},{"orderindex":"27","topicid":"1000014","result":"B"},{"orderindex":"28","topicid":"1000036","result":"B"},{"orderindex":"29","topicid":"1000160","result":"C"},{"orderindex":"30","topicid":"1000086","result":"A"},{"orderindex":"31","topicid":"1000092","result":"D"},{"orderindex":"32","topicid":"1000156","result":"A"},{"orderindex":"33","topicid":"1000109","result":"C"},{"orderindex":"34","topicid":"1000077","result":"D"},{"orderindex":"35","topicid":"1000157","result":"C"},{"orderindex":"36","topicid":"1000007","result":"D"},{"orderindex":"37","topicid":"1000058","result":"A"},{"orderindex":"38","topicid":"1000102","result":"A"},{"orderindex":"39","topicid":"1000049","result":"C"},{"orderindex":"40","topicid":"1000099","result":"A"},{"orderindex":"41","topicid":"1000113","result":"C"},{"orderindex":"42","topicid":"1000153","result":"C"},{"orderindex":"43","topicid":"1000117","result":"D"},{"orderindex":"44","topicid":"1000155","result":"B"},{"orderindex":"45","topicid":"1000161","result":"C"},{"orderindex":"46","topicid":"1000123","result":"D"},{"orderindex":"47","topicid":"1000013","result":"B"},{"orderindex":"48","topicid":"1000080","result":"C"},{"orderindex":"49","topicid":"1000111","result":"B"},{"orderindex":"50","topicid":"1000005","result":"C"},{"orderindex":"51","topicid":"1000204","result":"A,B,C,D"},{"orderindex":"52","topicid":"1000298","result":"A,B"},{"orderindex":"53","topicid":"1000289","result":"A,B,C,D"},{"orderindex":"54","topicid":"1000288","result":"A,B,D"},{"orderindex":"55","topicid":"1000219","result":"B,C,D"},{"orderindex":"56","topicid":"1000212","result":"A,B,C"},{"orderindex":"57","topicid":"1000209","result":"A,B,C"},{"orderindex":"58","topicid":"1000216","result":"C,D"},{"orderindex":"59","topicid":"1000207","result":"A,B,D"},{"orderindex":"60","topicid":"1000221","result":"A,B,C,D"},{"orderindex":"61","topicid":"1000294","result":"A,B,C,D"},{"orderindex":"62","topicid":"1000198","result":"A,B,C,D"},{"orderindex":"63","topicid":"1000213","result":"A,B,C,D"},{"orderindex":"64","topicid":"1000283","result":"A,B,C"},{"orderindex":"65","topicid":"1000163","result":"A,B,C,D"},{"orderindex":"66","topicid":"1000211","result":"A,B,C,D"},{"orderindex":"67","topicid":"1000194","result":"A,B,D"},{"orderindex":"68","topicid":"1000187","result":"A,B"},{"orderindex":"69","topicid":"1000224","result":"A,B,C,D"},{"orderindex":"70","topicid":"1000205","result":"A,B,D"},{"orderindex":"71","topicid":"1000165","result":"A,B,C,D"},{"orderindex":"72","topicid":"1000192","result":"A,B,C,D"},{"orderindex":"73","topicid":"1000188","result":"A,C,D"},{"orderindex":"74","topicid":"1000182","result":"B,D"},{"orderindex":"75","topicid":"1000183","result":"A,C"},{"orderindex":"76","topicid":"1000175","result":"A,B,C,D"},{"orderindex":"77","topicid":"1000286","result":"B,C"},{"orderindex":"78","topicid":"1000199","result":"A,B,C"},{"orderindex":"79","topicid":"1000284","result":"A,B,C,D"},{"orderindex":"80","topicid":"1000181","result":"A,B,C,D"},{"orderindex":"81","topicid":"1000256","result":"A"},{"orderindex":"82","topicid":"1000240","result":"A"},{"orderindex":"83","topicid":"1000232","result":"A"},{"orderindex":"84","topicid":"1000260","result":"A"},{"orderindex":"85","topicid":"1000234","result":"A"},{"orderindex":"86","topicid":"1000266","result":"B"},{"orderindex":"87","topicid":"1000244","result":"A"},{"orderindex":"88","topicid":"1000299","result":"A"},{"orderindex":"89","topicid":"1000270","result":"A"},{"orderindex":"90","topicid":"1000251","result":"A"},{"orderindex":"91","topicid":"1000300","result":"A"},{"orderindex":"92","topicid":"1000273","result":"B"},{"orderindex":"93","topicid":"1000245","result":"A"},{"orderindex":"94","topicid":"1000255","result":"B"},{"orderindex":"95","topicid":"1000262","result":"A"},{"orderindex":"96","topicid":"1000254","result":"B"},{"orderindex":"97","topicid":"1000268","result":"A"},{"orderindex":"98","topicid":"1000248","result":"A"},{"orderindex":"99","topicid":"1000243","result":"B"},{"orderindex":"100","topicid":"1000249","result":"A"}]'
```  
100分：
```
'[{"orderindex":"1","topicid":"1000216","result":"C,D"},{"orderindex":"2","topicid":"1000067","result":"D"},{"orderindex":"3","topicid":"1000109","result":"C"},{"orderindex":"4","topicid":"1000134","result":"C"},{"orderindex":"5","topicid":"1000005","result":"C"},{"orderindex":"6","topicid":"1000007","result":"D"},{"orderindex":"7","topicid":"1000090","result":"C"},{"orderindex":"8","topicid":"1000119","result":"D"},{"orderindex":"9","topicid":"1000213","result":"A,B,C,D"},{"orderindex":"10","topicid":"1000125","result":"D"},{"orderindex":"11","topicid":"1000234","result":"A"},{"orderindex":"12","topicid":"1000179","result":"A,B,C,D"},{"orderindex":"13","topicid":"1000243","result":"B"},{"orderindex":"14","topicid":"1000197","result":"C,D"},{"orderindex":"15","topicid":"1000224","result":"A,B,C,D"},{"orderindex":"16","topicid":"1000047","result":"D"},{"orderindex":"17","topicid":"1000096","result":"D"},{"orderindex":"18","topicid":"1000106","result":"B"},{"orderindex":"19","topicid":"1000155","result":"B"},{"orderindex":"20","topicid":"1000017","result":"D"},{"orderindex":"21","topicid":"1000154","result":"A"},{"orderindex":"22","topicid":"1000020","result":"C"},{"orderindex":"23","topicid":"1000173","result":"A,B,C,D"},{"orderindex":"24","topicid":"1000168","result":"A,B,D"},{"orderindex":"25","topicid":"1000249","result":"A"},{"orderindex":"26","topicid":"1000001","result":"B"},{"orderindex":"27","topicid":"1000140","result":"B"},{"orderindex":"28","topicid":"1000264","result":"B"},{"orderindex":"29","topicid":"1000027","result":"C"},{"orderindex":"30","topicid":"1000068","result":"A"},{"orderindex":"31","topicid":"1000147","result":"B"},{"orderindex":"32","topicid":"1000195","result":"A,B,C,D"},{"orderindex":"33","topicid":"1000286","result":"B,C"},{"orderindex":"34","topicid":"1000229","result":"B"},{"orderindex":"35","topicid":"1000143","result":"C"},{"orderindex":"36","topicid":"1000118","result":"C"},{"orderindex":"37","topicid":"1000019","result":"C"},{"orderindex":"38","topicid":"1000057","result":"C"},{"orderindex":"39","topicid":"1000176","result":"A,B,C,D"},{"orderindex":"40","topicid":"1000267","result":"B"},{"orderindex":"41","topicid":"1000123","result":"D"},{"orderindex":"42","topicid":"1000269","result":"A"},{"orderindex":"43","topicid":"1000203","result":"A,B,C,D"},{"orderindex":"44","topicid":"1000107","result":"B"},{"orderindex":"45","topicid":"1000220","result":"B,C"},{"orderindex":"46","topicid":"1000295","result":"A,B,C,D"},{"orderindex":"47","topicid":"1000250","result":"B"},{"orderindex":"48","topicid":"1000112","result":"D"},{"orderindex":"49","topicid":"1000150","result":"D"},{"orderindex":"50","topicid":"1000158","result":"D"},{"orderindex":"51","topicid":"1000284","result":"A,B,C,D"},{"orderindex":"52","topicid":"1000039","result":"D"},{"orderindex":"53","topicid":"1000094","result":"B"},{"orderindex":"54","topicid":"1000079","result":"C"},{"orderindex":"55","topicid":"1000261","result":"A"},{"orderindex":"56","topicid":"1000159","result":"B"},{"orderindex":"57","topicid":"1000219","result":"B,C,D"},{"orderindex":"58","topicid":"1000012","result":"B"},{"orderindex":"59","topicid":"1000258","result":"A"},{"orderindex":"60","topicid":"1000161","result":"C"},{"orderindex":"61","topicid":"1000127","result":"A"},{"orderindex":"62","topicid":"1000288","result":"A,B,D"},{"orderindex":"63","topicid":"1000008","result":"C"},{"orderindex":"64","topicid":"1000232","result":"A"},{"orderindex":"65","topicid":"1000103","result":"C"},{"orderindex":"66","topicid":"1000300","result":"A"},{"orderindex":"67","topicid":"1000087","result":"B"},{"orderindex":"68","topicid":"1000270","result":"A"},{"orderindex":"69","topicid":"1000210","result":"B,C"},{"orderindex":"70","topicid":"1000231","result":"A"},{"orderindex":"71","topicid":"1000209","result":"A,B,C"},{"orderindex":"72","topicid":"1000137","result":"C"},{"orderindex":"73","topicid":"1000124","result":"D"},{"orderindex":"74","topicid":"1000233","result":"B"},{"orderindex":"75","topicid":"1000285","result":"C,D"},{"orderindex":"76","topicid":"1000100","result":"C"},{"orderindex":"77","topicid":"1000225","result":"A,B,C,D"},{"orderindex":"78","topicid":"1000251","result":"A"},{"orderindex":"79","topicid":"1000199","result":"A,B,C,D"},{"orderindex":"80","topicid":"1000297","result":"A,B,C,D"},{"orderindex":"81","topicid":"1000245","result":"A"},{"orderindex":"82","topicid":"1000289","result":"A,B,C,D"},{"orderindex":"83","topicid":"1000095","result":"A"},{"orderindex":"84","topicid":"1000247","result":"A"},{"orderindex":"85","topicid":"1000222","result":"A,B,C,D"},{"orderindex":"86","topicid":"1000075","result":"D"},{"orderindex":"87","topicid":"1000133","result":"D"},{"orderindex":"88","topicid":"1000115","result":"A"},{"orderindex":"89","topicid":"1000042","result":"D"},{"orderindex":"90","topicid":"1000282","result":"A,B,D"},{"orderindex":"91","topicid":"1000205","result":"A,B,D"},{"orderindex":"92","topicid":"1000099","result":"A"},{"orderindex":"93","topicid":"1000274","result":"B"},{"orderindex":"94","topicid":"1000170","result":"A,B,C,D"},{"orderindex":"95","topicid":"1000002","result":"A"},{"orderindex":"96","topicid":"1000171","result":"A,B,C,D"},{"orderindex":"97","topicid":"1000084","result":"B"},{"orderindex":"98","topicid":"1000181","result":"A,B,C,D"},{"orderindex":"99","topicid":"1000268","result":"A"},{"orderindex":"100","topicid":"1000283","result":"A,B,C"}]'
```
2.更改JS文件，绕过答题检测机制  

按下F12，进入控制台，选中 源代码/Sources/资源 标签   
找到 examination.js 文件  
![image](https://user-images.githubusercontent.com/41804496/142233436-5e442527-9c4a-43c7-accf-4232c41231b5.png)    
在里面搜索 autoSubmit(),找到 function autoSubmit()函数，将：    
var result_content=getExamAnswerFn();  
![image](https://user-images.githubusercontent.com/41804496/142237598-52f599e9-5d5a-49bd-a0b4-09766e86a79d.png)

中的getExamAnswerFn()替换为2021_data.json中的数据，注意，一定不要换行！  
![image](https://user-images.githubusercontent.com/41804496/142237763-1a696d7a-4ddc-44b2-bb40-daaf3feac1d8.png)

按下 Ctrl + s 保存（如果出现黄色小三角，提示没被保存，那么继续往下看）  

3.更改时间数据，提交  
在控制台中设置 starttime ,让他与你现在的时间相差 15min以上。  
确认一切无误后，键入  
 autoSubmit()  
 完成提交。 
  
    
    
（小三角的解决方法）由于安全性阻止，你的修改不一定会凑效，这个时候需要在工作区打开一个本地文件夹来使用本地替换。 

![image](https://user-images.githubusercontent.com/41804496/142235584-28ae0b2c-7087-48da-b7d1-4b2b1c082d4d.png)  

（可以参考这个文章：https://blog.csdn.net/fjh1997/article/details/107588701

完成保存回到上面继续操作即可。  
- - -
### 时间魔法

用控制台延迟时间，F12后进入控制台，控制台中输入min = 40，可重置倒计时，
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

