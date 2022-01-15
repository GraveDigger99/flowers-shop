<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php'; 
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$username = $_POST['username'];
$usersurname = $_POST['usersurname'];
$userphone = $_POST['userphone'];
$usermail = $_POST['usermail'];

// Формирование самого письма
$title = "Новое обращение от FLOWERS ";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $username<br>
<b>Фамилия:</b> $usersurname<br>
<b>Телефон:</b> $userphone<br><br>
<b>Электронная почта:</b><br>$usermail";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'flowers2022shop@gmail.com'; // Логин на почте
    $mail->Password   = 'newlife202256844527232050'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('flowers2022shop@gmail.com', 'Ibrahimov Aydin'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('ibrahimovaydin33@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}  
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);