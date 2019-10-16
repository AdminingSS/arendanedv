<?php

$content = '';

/*
* Денис Герасимов http://rek9.ru/
* Данный скрипт обрабатывает форм и отправляет ее на email
* В письме вы увидите utm метки, если использовали их в рекламной кампании
* Измените в данном скрипте:
* 1. Тему письма (13 строчку)
* 2. Введите ваш email, на который отправлять обработанную форму (36 строчка)
* 3. Email, с которого отправлять письмо (39 строчка)
* 4. Имя, с которого отправляется письмо (40 строчка)
* 5. URL, на который будет переадресация, при успешной отправке формы (45 строчка)
*/
    $subject = 'Заявка с сайта Аренда Недавижимости';
    $msg = '';
    $content .= '<hr>';

    if(isset($_POST['name'])) {
        $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
        $content .= '<b>Имя: </b>' . $name . '<br>';
    }
    if(isset($_POST['phone'])) {
        $phone = substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);
        $content .= '<b>Телефон: </b>' . $phone . '<br>';
    }
    if(isset($_POST['cost'])) {
        $mail = substr(htmlspecialchars(trim($_POST['cost'])), 0, 100);
        $content .= '<b>Желаемая стоимость: </b>' . $mail . '<br>';
    }
    if(isset($_POST['item-number'])) {
        $message = substr(htmlspecialchars(trim($_POST['item-number'])), 0, 100);
        $content .= '<b>Номер из таблицы: </b>' . $message . '<br>';
    }

	$content .= '<b>Заявка пришла со страницы:</b> ' . $_SERVER["HTTP_REFERER"] .'<br>';
    $content .= '<hr>';
    // подключаем файл класса для отправки почты
    //flats-lasvegas@yandex.ru



require 'class.phpmailer.php';

$mail = new PHPMailer();
$mail->AddAddress('flats-lasvegas@yandex.ru');      	// кому - адрес, Имя (например, 'email@ rek9.ru','Денис Герасимов')
$mail->IsHTML(true);                        				// выставляем формат письма HTML
$mail->CharSet = "UTF-8";                   				// кодировка
$mail->From = "test@kazan.xn----8sbfkoelnbg5bbbyr.xn--p1ai";					        	// email, с которого отправиться письмо
$mail->FromName = "Аренда недвижимости";					    // откого письмо


if (array_key_exists('file', $_FILES)) {

    for ($ct = 0; $ct < count($_FILES['file']['tmp_name']); $ct++) {

        $uploadfile = tempnam(sys_get_temp_dir(), hash('sha256', $_FILES['file']['name'][$ct]));
        $filename = $_FILES['file']['name'][$ct];

        if (move_uploaded_file($_FILES['file']['tmp_name'][$ct], $uploadfile)) {
            $mail->AddAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }

    }

}

$mail->Body = $content;
$mail->Subject = $subject;

    // отправляем наше письмо

	
	if ($mail->Send()) header('Location: ../');                 // в поле Location можно настроить переадресацию
	else { die ('Mailer Error: ' . $mail->ErrorInfo); }
?>