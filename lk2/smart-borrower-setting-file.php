<?php
	// здесь менять почту куда отправлять !!!!!!!!!!
	$address = "test@mail.ru";
  // $address = "ev@toysa.ru, apsitnik@mail.ru";

	$sub = 'Пользователь отправил фото из личного кабинета заемщика '.$_SERVER['HTTP_HOST']; // заголовок письма
	$email2 = "<zakaz@{$_SERVER['HTTP_HOST']}>";
	$mes = "Пользователь отправил фото из личного кабинета заемщика" . "<br>";
	// $mes = "Пользователь отправил фото из личного кабинета заемщика" . "\n";



	function mail_attachment($filename, $path, $mailto, $from_mail, $from_name, $replyto, $subject, $message) {
	  // $file = $path.$filename;
	  $file = $path;

	  $file_size = filesize($file);
	  $handle = fopen($file, "r");
	  $content = fread($handle, $file_size);
	  fclose($handle);
	  $content = chunk_split(base64_encode($content));
	  $uid = md5(uniqid(time()));
	  $name = basename($file);
	  // $header = "From: ".$from_name." <".$from_mail.">\r\n";
	  $header = "From: ".$from_name.$from_mail."\r\n";
	  $header .= "Reply-To: ".$replyto."\r\n";
	  $header .= "MIME-Version: 1.0\r\n";
	  $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
		// (THIS ENTIRE LINE HAS BEEN REMOVED)
	  $nmessage = "--".$uid."\r\n";
	  $nmessage .= "Content-type:text/plain; charset=utf-8\r\n";
	  $nmessage .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
	  $nmessage .= $message."\r\n\r\n";
	  $nmessage .= "--".$uid."\r\n";
	  $nmessage .= "Content-Type: application/octet-stream; name=\"".$filename."\"\r\n";
	  $nmessage .= "Content-Transfer-Encoding: base64\r\n";
	  $nmessage .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
	  $nmessage .= $content."\r\n\r\n";
	  $nmessage .= "--".$uid."--";

		error_reporting(E_ALL);

		$send = mail($mailto, $subject, $nmessage, $header);
		return $send;

	  // if (mail($mailto, $subject, $nmessage, $header)) {
	  //     echo "Mail Sent Successfully to " . $mailto ."<br/>"; // or use booleans here
	  // } else {
	  //     echo "Mail NOT Sent to " .$mailto ."<br/>";
	  // }
	}



 	if( isset($_POST) && !empty($_POST) ) {
		// работаем с файлами attachment
 		// if (!empty($_FILES['upload']['name'])) {
 		if(isset($_FILES['upload']) && $_FILES['upload']['error'] == UPLOAD_ERR_OK) {
 			// файл загружен
 			$str_path = $_FILES['upload']['tmp_name'];
			// $send = mail_file($address, $sub, $mes, $email2, $str_path);
			$send = mail_attachment($_FILES['upload']['name'], $_FILES['upload']['tmp_name'], $address, $email2, '', '', $sub, $mes);

			// ini_set('short_open_tag', 'On');
			// header('Refresh: 3; URL=index.html');

			if(!$send) {
				// echo "Error file";
				// или
				return false;
			} else {
				//echo "Ok";
				// или
				header ('location: thanks.html');
				// или
				return true;
			}
		}
		else {
			$send = mail($address,$sub,$mes,"Content-type:text/plain; charset=utf-8\r\nFrom:$email2");
			// ini_set('short_open_tag', 'On');
			// header('Refresh: 3; URL=index.html');

			if(!$send) {
				// echo "Error";
				// или
				return false;
			} else {
				//echo "Ok";
				// или
				header ('location: thanks.html');
				// или
				return true;
			}
		}
	}
?>