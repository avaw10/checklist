<?php
$name = $_POST['name'];
$customer_email = $_POST['email'];
$review = $POST['review'];

$email_from = 'info@checklist.com';

$email_subject = 'New Review';

$email_body = "User Name: $name.\n".
"User Email: $customer_email.\n".
"Review: $review .\n";

$to = 'ava.westphal@gmail.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $customer_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: Home.js");

?>