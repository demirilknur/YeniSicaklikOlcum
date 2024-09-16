<?php
// reset-password.php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];

    // Şifre sıfırlama işlemleri (e-posta gönderimi veya token oluşturma)
    // ...

    echo "If this email is registered, you will receive a password reset link.";
}
?>