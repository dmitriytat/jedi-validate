<?php
        $randomError = "Error " . rand(0,1000);
        $baseErrors = array("Form validation error", $randomError);
        $nameErrors = array("Name is required", "Another error");
        $emailErrors = array("E-mail is not valid");

        $validationErrors = array(
            "base" => $baseErrors,
            "name" => $nameErrors,
            "email" => $emailErrors
        );

        $response = array(
            "validationErrors" => $validationErrors,
        );

        echo json_encode($response, JSON_PRETTY_PRINT);
?>