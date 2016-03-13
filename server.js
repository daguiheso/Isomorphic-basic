var express = require('express');
var app = express();

// set views app
app.set('view', __dirname + '/src/views');
// set files estatic
app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
	console.log('server run port 3000')
});