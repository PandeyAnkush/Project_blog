//app runner
//May be a useless file
const app = require('./app');

app.get('/',function(req,res)
{
	console.log('App staring');
	res.send('App is started at port number');
	console.log('App started');
});