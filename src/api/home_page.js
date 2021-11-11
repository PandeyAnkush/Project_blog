//api for posts
const app = require('../app');
const midd = require('../middleware/all_posts');
/*app.get('/',function(req,res){
	res.send('DOne');
});*/
app.get('/art/:id',midd.get_by_id);
app.get('/art',midd.get_page_no);
console.log('completed');