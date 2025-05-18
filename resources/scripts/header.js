if (news_link != '') {
	header_text = '<a href="' + news_link + '">' + news_message + '</a>';
} else {
	header_text = news_message;
}

//  | <a href="help.html">Help</a>

document.write('\
	<div class="header">\
	    <table class="table-generic" width="100%" cellpadding="0" cellspacing="0">\
    		<tr>\
    			<td align="left">\
    				<h2><a class="headerlogo" href="index.html">' + site_name + '</a><font size="2"> - web realm of the cube</font></h2>\
    			</td>\
    			<td align="right">\
    				<p><a href="index.html">index</a> | <a href="about.html">about</a></p>\
    			</td>\
    		</tr>\
    	</table>\
	</div>\
	<div class="vspacer"></div>');
