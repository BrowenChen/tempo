var LoginView = Backbone.View.extend({
		el: ".testDiv",
		tagName : 'div',
		options: null,
		events:{
        	"click .login-submit":"login"
    	},
		initialize: function(options){
		},
		render : function (options){
			console.log("render login");
			var that = this;
			//TODO: Move template to separate page, custom welcome name
			//populate the home_template with times collection
			var home_template = JST["backbone/templates/unauthenticated/login"]({
    	    });
        	this.$el.html(home_template);
		},
		login : function(options){
			console.log("hi");
			//called when the go button is clicked
			var username = $('#username-login').val();
			var password = $('#password-login').val();
			this.model.attributes.username = username;
			this.model.attributes.password = password
			console.log(this.model.attributes);
		    this.model.save(this.model.attributes, {
	      		success: function(userSession, response) {
	      			console.log("success!");
	      			console.log(userSession);
	      			console.log(response);
	      			Cookies.set("login-token", response.token);
	      			Backbone.Events.trigger("user-interests", [response.user.interests, response.user.id]);
	      			alert("you successfully logged in!");
	      },
	      error: function(userSession, response) {
	      	console.log("failure!");
	      }
	    });
		}
	});
