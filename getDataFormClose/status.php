<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$deploymentId = "AKfycbwUVdBgiVO02UDiyfUH00aw-r5VNTSMrOApONVAAn_LbUXqQJdn9tT6WAagbXF-ehjg";
$url = "https://script.google.com/macros/s/{$deploymentId}/exec";

// Perform the first fetch
$firstResponse = file_get_contents($url, false, stream_context_create(['http' => ['method' => 'HEAD']]));

// Extract the redirect URL
$redirectUrl = isset($http_response_header[11]) ? $http_response_header[11] : null;

if ($redirectUrl) {
    // Perform the second fetch
    $secondResponse = file_get_contents($redirectUrl);
    
    // Parse JSON response
    $data = json_decode($secondResponse);

    // Redirect based on data.status
    if ($data->status === false) {
        header("Location: ./closed.html");
    } else {
        header("Location: ./index.html");
    }
} else {
    echo "No redirect URL found";
}

?>
