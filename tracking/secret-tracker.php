<?php
// Google Sheets Web App URL
$sheet_url = "https://script.google.com/macros/s/AKfycbwIJ2kY-GIqwSrdVkOAG6OGL8kGaTowhFrzR0iSID-fjGl8SXSBnBI_iSRVKeuCmPug/exec"; // <-- replace with your URL

// Collect visitor info
$data = [
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'Unknown',
    'referrer' => $_SERVER['HTTP_REFERER'] ?? 'No referrer',
    'ua' => $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown'
];

// Send data to Google Sheets
@file_get_contents($sheet_url . '?' . http_build_query($data));

// Return a 1x1 pixel
header('Content-Type: image/jpeg');
header('Cache-Control: no-store, no-cache');

$img = imagecreatetruecolor(1, 1);
$white = imagecolorallocate($img, 255, 255, 255);
imagefill($img, 0, 0, $white);
imagejpeg($img);
imagedestroy($img);
?>
