<?php

$allowed_origins = ['https://zine-eddinetoubal.fr'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Max-Age: 86400");
}

function is_valid_text($text, $maxLength = 255) {
    return is_string($text) && strlen($text) <= $maxLength && preg_match('/^[\p{L}\p{N}\s\.\-\'"]+$/u', $text);
}

$name = trim($data['name'] ?? '');
$prenom = trim($data['prenom'] ?? '');
$entreprise = trim($data['entreprise'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');
$objet = trim($data['objet'] ?? '');

$isValid =
    is_valid_text($name) &&
    is_valid_text($prenom) &&
    is_valid_text($objet, 150) &&
    filter_var($email, FILTER_VALIDATE_EMAIL) &&
    strlen($message) <= 700;

if ($isValid) {
    $to = "contact@zine-eddinetoubal.fr";
    $body = "Nom : $name\nPrénom : $prenom\nEntreprise : $entreprise\nEmail : $email\n\nMessage:\n$message";
    $headers = "From: <$email>\r\nReply-To: $email";

    if (mail($to, $objet, $body, $headers)) {
        http_response_code(200);
        echo "Message envoyé avec succès";
    } else {
        http_response_code(500);
        echo "Erreur lors de l'envoi du mail";
    }
} else {
    http_response_code(400);
    echo "Champs invalides ou mal formatés";
}