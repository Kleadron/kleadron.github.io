<!doctype html public "-//w3c//dtd html 4.0 transitional//en">
<html>
	<head>
		<title>Kleadron Software - Welcome!</title>
		<link rel="stylesheet" type="text/css" href="/resources/style.css" />
		<?php
	    	error_reporting(E_ALL ^ E_WARNING); 
			$debug = False;
			@include 'infos/currentInfo.php';
		?>
	</head>
	<body>
		<?php
			include 'resources/pageparts/header.php';
		?>
		
		<!-- For alerts and important info -->
    	<?php
    		include 'resources/pageparts/alert.php';
    	?>
		
		
		<?php
			include 'resources/pageparts/main-start.html';
		?>
			<h1>Hi</h1>
			<div id="grey-box">
				<p>This is my website.<br>What are you doing here :)</p>
				<p>Nothing much is here yet but check out the directory at the top right!</p>
				<p>NOTE: for some reason some parts of the site appear suspicious to Microsoft Edge, I'm not sure why and I don't know if telling you that it isn't suspicous would help.</p>
			</div>
		<?php
			include 'resources/pageparts/main-end.html';
		?>
		
		<?php
			include 'resources/pageparts/footer.html';
		?>
		
	</body>
</html>