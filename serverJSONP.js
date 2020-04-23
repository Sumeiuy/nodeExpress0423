let express = require('express'),
  app = express();
app.listen(8001, _ => {
  console.log('OK!')
});

// 接口处理
app.get('/list', (req, res) => {
  let {
    callback = Function.prototype
  } = req.query;
  let data = {
    code: 0,
    message: 'hello world'
  };
  res.send(`${callback}(${JSON.stringify(data)})`);
});