<?php
    if ($news != "")
	{
		include 'header-start.html';
		echo $news;
		include 'header-end.html';
	} else {	
		include 'header-start.html';
		echo "<p>No news.</p>";
		include 'header-end.html';
	}
?>