<?php 
$name = stripslashes(htmlspecialchars($_POST['name']));
$phone = stripslashes(htmlspecialchars($_POST['phone']));

if($_GET['product_id']){
    $product_id = $_GET['product_id'];
}else{
    $product_id = $_POST['product_id'];
}
 
//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "781314719:AAFhmQlwEE2NGnUNv5xeEyV_QFlWPV0-vp4";
 
//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-1001311319825";
 
//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= $key." : ".$value."\n";
};
 echo $txt;
//Осуществляется отправка данных в переменной $sendToTelegram
 
$ch=curl_init();
curl_setopt($ch, CURLOPT_URL,
       'https://api.telegram.org/bot'.$token.'/sendMessage');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS,
       'chat_id='.$chat_id.'&text='.urlencode($txt));
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
 

 
// Отправить сообщение
$result=curl_exec($ch);
curl_close($ch);

?>