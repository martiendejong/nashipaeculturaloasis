<?php
session_start();

// Function to validate CSRF token
function validateCsrfToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

// Retrieve and decode the incoming JSON payload
$input = json_decode(file_get_contents('php://input'), true);

// Validate CSRF token
if (!validateCsrfToken($input['csrfToken'] ?? '')) {
    http_response_code(403); // Forbidden
    echo json_encode(['error' => 'Invalid CSRF token']);
    exit;
}

// Validate other inputs (e.g., name, email, message)
$name = filter_var($input['name'], FILTER_SANITIZE_STRING);
$email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
$message = filter_var($input['message'], FILTER_SANITIZE_STRING);

if (!$name || !$email || !$message) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Invalid input']);
    exit;
}

// Process the form (e.g., send an email)
mail('you@example.com', 'New Contact Form Submission', $message, "From: $email");

echo json_encode(['success' => 'Message sent successfully']);
?>
