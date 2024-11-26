<?php
session_start();

// Function to generate a secure token
function generateCsrfToken() {
    // Generate a random, secure token
    return bin2hex(random_bytes(32));
}

// Check if a CSRF token already exists in the session
if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = generateCsrfToken();
}

// Return the CSRF token as a JSON response
header('Content-Type: application/json');
echo json_encode(['token' => $_SESSION['csrf_token']]);
?>
