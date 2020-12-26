if (alert_message != '') {
	document.write('<center>\
    <div class="alert-box">\
    	<table class="alert-table" width="100%" cellpadding="0" cellspacing="0">\
    		<tr>\
    			<td align="left" valign="top" width="24">\
    				<img src="resources/images/warning.png" alt="warning icon">\
    			</td>\
    			<!-- alert i guess? -->\
    			<td align="left">\
    				<p><font size="-1">' + alert_message);
					
	if (alert_link != '') {
		document.write('<br><a href="' + alert_link + '">Learn More</a>');
	}
	
    document.write('</font></p>\
    			</td>\
    		</tr>\
    	</table>\
    </div>\
</center>');

}
