var bcrypt = require('bcryptjs');

var  saltRounds = 10;
module.exports = {
    
    _checkFields : function(body,required,skip=[]){
		
		for(var i=0;i<required.length;i++){

			if(Object.keys(body).indexOf(required[i]) == -1){
				return {
					is_valid : false,
					message : required[i].split('_').join(' ') + ' is required.'
				};
			}

		}
		
		for(var i=0;i<Object.keys(body).length;i++){
			var field = Object.keys(body)[i];
			if(body[field] == null) {
				body[field] = ""
			}
			if(body[field].toString().trim() == "" && field !== 'image' &&
			required.indexOf(field) !== -1){
				return {
					is_valid : false,
					message : field + ' is required.'
				};
			}

			if(field == 'email' && required.indexOf(field) !== -1 && !this._validateEmail(body[field].toString().trim())){
				return {
					is_valid : false,
					message : 'Please enter valid email address.'
				};
			}
		}
		
		return true;
	},
	res : function(res,message,status,is_api = true){
		if(status !== 200){
			if (message == 'default')
				message = 'Oops! something went wrong,Please try again.';
			var response = {
				status : 0,
				code : status,
				data : message
			}
			if(is_api){
				res.send(JSON.stringify(response)).status(200);
			} else {
				res.status(status).send(message);
			}
			return;
		}
		var response = {
			status : 1,
			code : status,
			data : message	
		}
		if(is_api){
			res.send(JSON.stringify(response)).status(200);
		} else {
			res.send(message).status(status);
		}
		return;
	},
	_hashPass : function(pass){
		return bcrypt.hashSync(pass, 10);
	},
	_comparPass : function(pass,hash){
		return bcrypt.compareSync(pass,hash);
	},
	_form : function(body){
		Object.keys(body).forEach(key =>{
			if(typeof body[key] === 'string'){
				body[key] = body[key].replace(/<[^>]*>/g, '');
			}
		});
		return body;
	},
	_validateEmail : function(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	},
	authResponse : async function(user,token = false){

		let response = {
			_id : user._id,
			status : user.status,
			name : user.name,
            email : user.email,
            phone : user.phone,
            created_at : user.created_at,
            updated_at : user.updated_at  
		}
		
		if(token){
			response.token = token
		}
		
		return response
	},
	ext : function(name){
		var ext = name.split('.')
		return ext[ext.length - 1]
	},
	verifyToken :async function(req){
		try {
			var token = req.header(CONFIG.AUTH_HEADER)
			// logger.info(req.header(CONFIG.AUTH_HEADER))	
			
			if(!token){
				throw new Error('You must login first.')
			}
			var decoded = JWT.verify(token,CONFIG.JWT_KEY)
			
			req.authID = decoded.user
			const user = await Model._findOne(_User,{_id : req.authID})
			if(!user) throw new Error('Not Authenticated!')
			
			req.Auth = {
				_id : user._id,
				email : user.email,
				token : token,
				name : user.name,
				photo : user.photo,
				status : user.status,
			}
			
			return true

        } catch(err) {
           return false
        }
	},
	
	compressImage: async function (ORIGINAL_IMAGE, type) {

		return new Promise((resolve, reject) => {

			try {
				var height = 100;
				var width = 100;

				switch (type) {
					case 'media':
						height = 400;
						width = 700;
						break;
					case 'horizontal':
						height = 400;
						width = 600;
						break;
					case 'vertical':
						height = 430;
						width = 285;
						break;
					case 'banner':
						height = 900;
						width = 1950;
						break;
				}

				const source = ORIGINAL_IMAGE;

				ORIGINAL_IMAGE = path.join(APP_PATH, 'public', ORIGINAL_IMAGE);

				const LOGO = path.join(APP_PATH, 'public/images', 'logo.png');

				const LOGO_MARGIN_PERCENTAGE = 5;
				
				const FILENAME = ORIGINAL_IMAGE;

				const main = async () => {
				
					const [image, logo] = await Promise.all([
						JIMP.read(ORIGINAL_IMAGE),
						JIMP.read(LOGO)
					]);

					logo.resize(image.bitmap.width / 10, JIMP.AUTO);
					image.resize(width, height) // resize
					image.quality(60)
					image.contrast(0.2)

					const xMargin = (image.bitmap.width * LOGO_MARGIN_PERCENTAGE) / 100;
					const yMargin = (image.bitmap.width * LOGO_MARGIN_PERCENTAGE) / 100;

					const X = image.bitmap.width - logo.bitmap.width - xMargin;
					const Y = image.bitmap.height - logo.bitmap.height - yMargin;

					return image.composite(logo, X, Y, [
						{
							mode: JIMP.BLEND_SCREEN,
							opacitySource: 0.1,
							opacityDest: 1
						}
					]);
				};

				console.log('FILENAME',FILENAME)

				main()
				.then(image => image.write(FILENAME))
				.catch((err) => {
					console.log('EEEEE',err)
				})

				resolve(source)

			} catch (error) {
				console.log('E', error)
				resolve(source);
			}

		})
	}

}