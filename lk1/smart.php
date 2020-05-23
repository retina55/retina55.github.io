<?php
	// здесь менять почту куда отправлять !!!!!!!!!!
	$address = "test@mail.ru";
  // $address = "ev@toysa.ru, apsitnik@mail.ru";


	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];

	$mes = "Пользователь оставил свои данные" . "<br>";
	// $mes = "Пользователь оставил свои данные" . "\n";
	// $mes .= "Место блока заявки (идентификатор): $user_data\n";
	
	if (!empty($name)) {
	 $mes .= "Имя: $name" . "<br>";
	 // $mes .= "Имя: $name" . "\n";
	}

	if (!empty($phone)) {
	 $mes .= "Телефон: $phone" . "<br>";
	 // $mes .= "Телефон: $phone" . "\n";
	}

	if (!empty($email)) {
 		$mes .= "Почта: $email" . "<br>";
 		// $mes .= "Почта: $email" . "\n";
	}



	$sub = 'Заявка с сайта '.$_SERVER['HTTP_HOST']; // заголовок письма
	// $sub = "=?utf-8?B?".base64_encode("Новое сообщение с сайта")."?="; // заголовок письма

	$email2 = "<zakaz@{$_SERVER['HTTP_HOST']}>";
	// $email2 = "<info@{$_SERVER['HTTP_HOST']}>";
	// $email2 = "<no-reply@{$_SERVER['HTTP_HOST']}>";

	// $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset=windows-1251\r\nFrom:$email2");
	// $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset=utf-8\r\nFrom:$email2");
	// $send = mail ($address,$sub,$mes,"MIME-Version: 1.0\r\n; Content-type:text/html; charset=utf-8\r\nFrom:$email2");
	$send = mail ($address,$sub,$mes,"Content-type:text/html; charset=utf-8\r\nFrom:$email2");
	// $send = mail ($address, $sub, $mess,"From: $useremail\r\nReply-to: $useremail\r\nContent-type: text/html; charset=utf-8\r\n");
	// 'Content-type: text/html; charset=utf-8
	// From: stastroi.ru <mail@stastroi.ru>
	// ini_set('short_open_tag', 'On');
	// header('Refresh: 3; URL=index.html');

	if(!$send) {
		// echo "Error";
		// или
		return false;
	} else {
		// echo "Ok";
		// или
		header ('location: thanks.html');
		// или
		return true;
	}
?>