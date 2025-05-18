if (news_link != '') {
	header_text = '<a href="' + news_link + '">' + news_message + '</a>';
} else {
	header_text = news_message;
}

//  | <a href="help.html">Help</a>

document.write('\
	<div class="header frameshadow">\
		<h2><a class="headerlogo" href="index.html">' + site_name + '</a><font size="2"> - web realm of the cube</font></h2>\
	</div>\
	<div class="vspacer"></div>');
