//query by id
let que;
/*let query = {
	get_id: function (id){
		que = 'Select id,Title,Summary,Created_on,Modified_on ';
		que = que+'from Posts ';
		que = que+'where id '+ id + ' Deleted_on IS NULL ';
		que = que +'ORDER BY Created_on DESC;'
		return que;
	}
}*/
function get_id(id){
		que = 'Select id,Title,Summary,Created_on,Modified_on ';
		que = que+'from Posts ';
		que = que+'where id '+ id + ' Deleted_on IS NULL ';
		que = que +'ORDER BY Created_on DESC;'
		return que;
	}
module.export=get_id;