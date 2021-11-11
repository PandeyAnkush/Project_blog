//all middleware funcntion to return result
const con = require('../sql_init');
let quey = require('../query/quey');
let query_id;
let query_default;
const LIMIT=2;
const MAX_LIMIT=50;
let start=0;
let lim=0;
let page=0;
let post ={
	get_all_post: function(req,res,next)
	{
		//use less function
		/*let query = 'Select id, Title, Summary, Description ';
		query = query+'Created_on, Modified _on ';
		query=query+'from Posts Where Deleted_on=NULL limit '+LIMIT;
		console.log(query);
		res.send(query);*/
	
	},
	get_page_no: function(req,res,next){
		
		if(isNaN(req.query.page)&&isNaN(req.query.limit))
		{
			//nothing in param
			start=0;
			lim=LIMIT;
			query_default = 'Select id,Title,Summary,Created_on,Modified_on ';
			query_default = query_default+'from Posts ';
			query_default = query_default +' ORDER BY Created_on ';
			query_default = query_default+'limit '+ start+' , '+lim+';';
			con.query(query_default,function(err,result,fields){
				if(err) throw err;
				console.log(result);
				res.send(result);
			});
			//console.log(query_default);
			//res.send(query_default);
			//console.log('All default');
			//res.send('All default');
		} 
		else if(isNaN(req.query.limit))
		{
			//only page is in param
			page=req.query.page;
			lim = LIMIT;
			start=(page-1)*lim;
			query_default = 'Select id,Title,Summary,Created_on,Modified_on ';
			query_default = query_default+'from Posts ';
			query_default = query_default +' ORDER BY Created_on ';
			query_default = query_default+'limit '+ start+' , '+lim+';';
			con.query(query_default,function(err,result,fields){
				if(err) throw err;
				console.log(result);
				res.send(result);
			});			
			//console.log(start+'  '+lim);
			//res.send(start+'  '+lim);
			//console.log('Result: '+req.query.page+' Default limit');
			//res.send('Result: '+req.query.page+' Default limit');
		}
		else if(isNaN(req.query.page))
		{
			//only limit is in param
			start=0;
			lim=req.query.limit;
			if(lim>MAX_LIMIT)
				lim=MAX_LIMIT;			
			query_default = 'Select id,Title,Summary,Created_on,Modified_on ';
			query_default = query_default+'from Posts ';
			query_default = query_default +' ORDER BY Created_on ';
			query_default = query_default+'limit '+ start+' , '+lim+';';
			con.query(query_default,function(err,result,fields){
				if(err) throw err;
				console.log(result);
				res.send(result);
			});
			//console.log(start+'  '+lim);
			//res.send(start+'  '+lim);
			//console.log('Result: '+req.query.limit+' Default page');
			//res.send('Result: '+req.query.limit+' Default page');
		}
		else
		{
			//both page and limit provided
			page=req.query.page;
			lim = req.query.limit;
			if(lim>MAX_LIMIT)
				lim=MAX_LIMIT;
			start = (page-1)*lim;
			query_default = 'Select id,Title,Summary,Created_on,Modified_on ';
			query_default = query_default+'from Posts ';
			query_default = query_default +' ORDER BY Created_on ';
			query_default = query_default+'limit '+ start+' , '+lim+';';
			con.query(query_default,function(err,result,fields){
				if(err) throw err;
				console.log(result);
				res.send(result);
			});			
			//console.log(start+'  '+lim);
			//res.send(start+'  '+lim);
			//console.log('Result: '+req.query.page+' '+req.query.limit);
			//res.send('Result: '+req.query.page+' '+req.query.limit);	
		}
	},
	get_by_id: function(req,res,next){
		query_id = 'Select id,Title,Summary,Created_on,Modified_on ';
		query_id = query_id+'from Posts ';
		query_id = query_id+'where id ='+ req.params.id + ' AND Deleted_on IS NULL ';
		query_id = query_id +'ORDER BY Created_on DESC;';
		//console.log(query_id);
		//res.send(query_id);
		con.query(query_id,function (err, result, fields){
			if (err) throw err;
			console.log(result);
			res.send(result);
		});
		
		
		
	}


}
module.exports = post;