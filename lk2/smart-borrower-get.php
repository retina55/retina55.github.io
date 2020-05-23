<?php
	// здесь менять почту куда отправлять !!!!!!!!!!
	$address = "test@mail.ru";
  // $address = "ev@toysa.ru, apsitnik@mail.ru";


	$type_z = $_POST['radio'];
	$sum = $_POST['sum'];
	$month = $_POST['month'];

	$mes = "Пользователь подал заявку на займ" . "<br>";
	// $mes = "Пользователь подал заявку на займ" . "\n";

	if (!empty($type_z)) {
	 $mes .= "Тип займа: $type_z" . "<br>";
	 // $mes .= "Тип займа: $type_z" . "\n";
	}

	if (!empty($sum)) {
	 $mes .= "Сумма займа: $sum" . "<br>";
	 // $mes .= "Сумма займа: $sum" . "\n";
	}

	if (!empty($month)) {
 		$mes .= "Длительность займа: $month" . "<br>";
 		// $mes .= "Длительность займа: $month" . "\n";
	}



	$sub = 'Заявка на займ с сайта '.$_SERVER['HTTP_HOST']; // заголовок письма

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