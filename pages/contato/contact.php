<?php 
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $mailTo = "fahharaujo12@gmail.com";
        $headers = "From: ".$email;
        $txt = "Você recebeu um email de ".$name.".\n\n".$message;
        
        mail($mailTo, $subject, $txt, $headers);
        header("Location: index.php?emailenviado");
    }
?>