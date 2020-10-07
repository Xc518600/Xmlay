/**
 * @江湖中人
 * https://w.mail.qq.com/cgi-bin/readtemplate url script-response-body qqmail1.js
 
 同时hostname 加入 w.mail.qq.com
 */

 // 在QQ中-qq邮箱提醒，左下角按钮“进入邮箱“，之前是提示没有安装app，现在可以自己进入网页版 (只测试了quanx)

str=`<html><body><script>
    location.href = '//w.mail.qq.com/cgi-bin/loginpage?f=xhtml&kvclick=loginpage%7Capp_push%7Center%7Cios&ad=false&f=xhtml';
</script></body></html>`

//$notify(``, "","hhhh");

//console.log(str);

$done({body: str});
