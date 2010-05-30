Message = function(name) {this.name = name}

Message.prototype.sayHello = function() {
	return "Hola, " + this.name + "!"
}