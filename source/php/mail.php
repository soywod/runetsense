<?php

$to = 'contact@runetsense.fr';
$subject = 'Prise de contact sur runetsense.fr (' . $_POST['name'] . ')';
$message = 'Un utilisateur vous a envoyé un message depuis runetsense.fr (' . $_POST['name'] . ' - ' . $_POST['tel'] . ')' . "\r\n";
$message .= $_POST['message'];
$headers = 'From: ' . $_POST['email'] . "\r\n" .
    'Reply-To: ' . $_POST['email'] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$hasBeenSent = mail($to, $subject, $message, $headers);

header('Location: /contact?sent=' . $hasBeenSent);
