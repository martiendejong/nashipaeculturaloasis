<?php

session_start();

require 'config.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function validateCsrfToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

//$input = json_decode(file_get_contents('php://input'), true);
$input = $_POST;

if (!validateCsrfToken($input['csrf_token'] ?? '')) {
    http_response_code(403);
    echo json_encode(['error' => 'Invalid CSRF token']);
    exit;
}

$firstName = htmlspecialchars(filter_var($input['firstName']));
$lastName = htmlspecialchars(filter_var($input['lastName']));
$email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
$message = htmlspecialchars(filter_var($input['message']));

if (!$firstName || !$email || !$message) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Invalid input']);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'mail.nashipaeculturaloasis.com';
    $mail->SMTPAuth = true;
    $mail->Username = $emailConfig->username;
    $mail->Password = $emailConfig->password;
    // $mail->Username = 'info@nashipaeculturaloasis.com';
    // $mail->Password = 'jSYPcFxAugft6EgWsZxZ';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('info@nashipaeculturaloasis.com', 'Nashipae Cultural Oasis');
    $mail->addAddress('sofynashipae@gmail.com', 'Sofy Nashipae');
    $mail->addAddress('martiendejong2008@gmail.com', 'Martien de Jong');

    $name = $firstName . ' ' . $lastName;

    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body    = "
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong><br>$message</p>
    ";
    $mail->AltBody = "Name: $name\nEmail: $email\nMessage:\n$message";

    $mail->send();
    echo json_encode(['success' => 'Message sent successfully']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
}
?>
