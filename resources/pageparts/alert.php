<?php
	if ($alert != "")
	{
		include 'alert-start.html';
		echo $alert;
		include 'alert-middle.html';
		echo $alertLink;
		include 'alert-end.html';
	} elseif (false) {
		include 'alert-start.html';
		echo "No current alert.";
		include 'alert-middle.html';
		echo "/404.php";
		include 'alert-end.html';
	}
?>