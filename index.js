var fs = require("fs");
var Handlebars = require("handlebars");
var utils = require('jsonresume-themeutils');

module.exports = {
	render: render
};

utils.setConfig({ date_format: 'MMM YYYY' });

function render(resume) {
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");
	return Handlebars.compile(template)({
		css: css,
		resume: resume
	});
}

Handlebars.registerHelper("nl2br", function(value) {
	return (value || "").replace(/\n/g, "</p><p>");
});

Handlebars.registerHelper("stripPrefix", function(value) {
	return (value || "").replace(/(^\w+:|^)\/\//, '');
});

Handlebars.registerHelper("getFormattedDate", function(value) {
	return utils.getFormattedDate(value);
});

Handlebars.registerHelper("getFontAwesomeClass", function(value) {
	var className = value.toLowerCase();

	switch(className)
	{
		case "stackoverflow":
			className = "stack-overflow";
			break;
	}

	return "fa-" + className;
});