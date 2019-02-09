<?php
$filePath = dirname(__FILE__) . "/upload/" . basename($_FILES["file"]["name"]);

$fileErrors = array();

$count = count($_FILES['file']['name']);

if ($count > 1) {
    for ($i = 0; $i < $count; $i++) {
        if ($_FILES["file"]["error"][$i] > 0) {
            $fileErrors[] = $_FILES["file"]["error"][$i];
        } elseif (!move_uploaded_file($_FILES["file"]["tmp_name"][$i], $filePath)) {
            $fileErrors[] = "File upload error";
        }
    }
} else {
    if ($_FILES["file"]["error"] > 0) {
        $fileErrors[] = $_FILES["file"]["error"];
    } elseif (!move_uploaded_file($_FILES["file"]["tmp_name"], $filePath)) {
        $fileErrors[] = "File upload error";
    }
}

$randomError = "Error " . rand(0, 1000);
$baseErrors = array("Form validation error", $randomError);
$nameErrors = array("Name is required", "Another error");
$emailErrors = array("E-mail is not valid");

$validationErrors = array(
    "base" => $baseErrors,
    "name" => $nameErrors,
    "email" => $emailErrors,
    "file" => $fileErrors
);

$response = array(
    "validationErrors" => $validationErrors
);

echo json_encode($response, JSON_PRETTY_PRINT);
