<?php
	// здесь менять почту куда отправлять !!!!!!!!!!
	$address = "test@mail.ru";
  // $address = "ev@toysa.ru, apsitnik@mail.ru";


	$name = $_POST['name'];
	$email = $_POST['email'];
	$msg = $_POST['msg'];

	$mes = "Пользователь оставил сообщение в лк заемщика в разделе FAQ" . "<br>";
	// $mes = "Пользователь оставил сообщение в лк заемщика в разделе FAQ" . "\n";

	if (!empty($name)) {
	 $mes .= "Имя: $name" . "<br>";
	 // $mes .= "Имя: $name" . "\n";
	}

	if (!empty($email)) {
	 $mes .= "Почта: $email" . "<br>";
	 // $mes .= "Почта: $email" . "\n";
	}

	if (!empty($msg)) {
 		$mes .= "Сообщение: $msg" . "<br>";
 		// $mes .= "Сообщение: $msg" . "\n";
	}



	$sub = 'Пользователь оставил сообщение в лк заемщика в разделе FAQ '.$_SERVER['HTTP_HOST']; // заголовок письма

	$email2 = "<zakaz@{$_SERVER['HTTP_HOST']}>";
	$send = mail($address,$sub,$mes,"Content-type:text/html; charset=utf-8\r\nFrom:$email2");

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