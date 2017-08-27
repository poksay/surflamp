const express = require('express')
const app = express()

app.get('/', function(req,res) {
  res.sendfile('public/index.html');
});

app.get('/video', function(req,res) {
  res.sendfile('public/video.html');
});

app.use(express.static('public'));

app.listen(process.env.PORT || 3000);
