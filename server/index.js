let express = require('express');
let app = express();
let proxy = require('http-proxy-middleware');
let port = 4000;

app.use(proxy('/api/photos', {target: 'http://localhost:3333'}));
app.use(proxy('/house', {target: 'http://localhost:3005'}));
app.use(proxy('/api/houses', {target: 'http://localhost:3000'}));
app.use(proxy('/homes', {target: 'http://localhost:1022'}));
app.use(express.static('public'));

app.listen(port, () => console.log(`Proxy server running on port ${port}`));