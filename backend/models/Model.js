

exports._create = (schema,data) => {

    return new Promise(resolve => {
        let create = new schema(data)
        create.save((err,saved) => {
            if(err){
				console.error(err)
                resolve(false)
            }else{
                resolve(saved)
            }
        })
    }) 
}


exports._findOne = (schema,condition = {},options={},lean = true) => {
	return new Promise(resolve =>{
        var q = schema.findOne(condition);
        if(lean){
    		q.lean();
        }
		if(Array.isArray(options)){
			options.forEach(key =>{
				q[Object.keys(key)[0]](key[Object.keys(key)[0]]);
			})
		}else{
			if(Object.keys(options).length !== 0){
				Object.keys(options).forEach(key => {
					q[key](options[key]);
				});
			}
		}
		q.exec((err,result) => {
			if(err){
				resolve(false);
			}else{
				resolve(result);
			}
		})
	})
}


exports._find = (schema,condition = {},options={}) => {
	return new Promise(resolve =>{
        var q = schema.find(condition);
		if(Array.isArray(options)){
			options.forEach(key =>{
				q[Object.keys(key)[0]](key[Object.keys(key)[0]]);
			})
		}else{
			if(Object.keys(options).length !== 0){
				Object.keys(options).forEach(key => {
					q[key](options[key]);
				});
			}
		}
		q.exec((err,result) => {
			if(err){
				console.error(err);
				resolve(false);
			}else{
				resolve(result);
			}
		})
	})
}

