<?php

$to = 'clementdouin21@gmail.com';
$subject = 'Prise de contact sur runetsense.fr (' . $_POST['name'] . ')';
$message = $_POST['message'];
$headers = 'From: ' . $_POST['email'] . "\r\n" .
	'Reply-To: ' . $_POST['email'] . "\r\n" .
	'X-Mailer: PHP/' . phpversion();

$hasBeenSent = mail($to, $subject, $message, $headers);

header('Location: /contact?sent=' . $hasBeenSent);
