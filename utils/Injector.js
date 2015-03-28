'use strict';

module.exports = {

	dependencies: {},

	process: function(target) {
		var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
		var text = target.toString();
		var args = text.match(FN_ARGS)[1].split(',');

		target.apply(target, this.getDependencies(args));
	},

	getDependencies: function(arr) {
		var self = this;
		return arr.map(function(value) {
			return self.dependencies[value.trim()];
		});
	},

	register: function(name, dependency) {
		this.dependencies[name] = dependency;
	}

};