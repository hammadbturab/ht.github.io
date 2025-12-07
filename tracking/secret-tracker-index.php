<?php
// secret-tracker-index.php - Simple Canary Token

// 1. Where to save the log (CHANGE THIS!)
$log_file = __DIR__ . '/canary-access.log';  // This saves log in same folder

// 2. What to log
$timestamp = date('Y-m-d H:i:s');
$ip = $_SERVER['REMOTE_ADDR'] ?? 'Unknown IP';
$referrer = $_SERVER['HTTP_REFERER'] ?? 'No referrer';
$user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown browser';

$log_entry = "{$timestamp} | IP: {$ip} | From: {$referrer} | Browser: {$user_agent}\n";

// 3. Save it
file_put_contents($log_file, $log_entry, FILE_APPEND);

// 4. Create a 1x1 pixel image (no external file needed!)
header('Content-Type: image/jpeg');
header('Cache-Control: no-store, no-cache'); // Prevent caching

// Create the smallest possible image
$img = imagecreatetruecolor(1, 1);
$white = imagecolorallocate($img, 255, 255, 255);
imagefill($img, 0, 0, $white);
imagejpeg($img);
imagedestroy($img);
?>