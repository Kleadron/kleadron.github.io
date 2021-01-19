if (news_link != '') {
	header_text = '<a href="' + news_link + '">' + news_message + '</a>';
} else {
	header_text = news_message;
}

document.write('<center>\
	<div class="header-div">\
		<table class="header-table" width="100%" cellpadding="0" cellspacing="0">\
			<tr>\
				<!-- Logo -->\
				<td align="left" width="230">\
					<h2>&nbsp;<em><a class="header-logo" href="index.html">' + site_name + '</a></em></h2>\
				</td>\
				<!-- news i guess? -->\
				<td>\
					<center>' + header_text + '</center>\
				</td>\
				<!-- Basic navigation -->\
				<td align="right" width="230">\
					<p><a href="directory.html">Directory</a> | <a href="help.html">Help</a> | <a href="about.html">About</a>&nbsp;</p>\
				</td>\
			</tr>\
		</table>\
	</div>\
</center>\
');