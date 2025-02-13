<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    $to = "your-email@example.com";  
    $subject = "New User Registration";
    $message = "A new user has registered.\n\nUsername: $username\nPassword: $password";
    $headers = "From: noreply@yourwebsite.com\r\nReply-To: noreply@yourwebsite.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Registration successful. The details have been sent to the admin.";
    } else {
        echo "Error sending email.";
    }
} else {
    echo "Invalid request.";
}
?>