const express = require('express');
const url = require('url');
const app = express();
const port = 9090;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//配置路由

//jsonp代码测试路径
app.use('/api/jsonp', (req, res)=>{
  let curUrl = url.parse(req.url);
  let params = new URLSearchParams(curUrl.query);
  // 获取jsonp的回调函数
  let methodsName = params.get('callback');
  let data = JSON.stringify({money: 99});
  res.send(`${methodsName}(${data})`)
});
