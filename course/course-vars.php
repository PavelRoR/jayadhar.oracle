<?php
$videos = array('','','');
$hides = array('','','');

$dates = array(strtotime('2020-01-23'),strtotime('2020-01-24'),strtotime('2020-01-25'),strtotime('2020-01-28'));
$now = strtotime('now');

$sales1 = array('3 000р.','2 000р.','1 000р.');
$sales2 = array('6 000р.','4 000р.','2 000р.');

$todays1 = array('13 900р.','14 900р.','15 900р.');
$todays2 = array('19 900р.','21 900р.','23 900р.');

$links1 = array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4376&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4377&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4378&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4379&clean=true&lg=ru');
$links2 = array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4380&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4381&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4382&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4383&clean=true&lg=ru');

if ($now < $dates[0]) {
	$today1 = $todays1[0];
	$today2 = $todays2[0];
	$sale1 = $sales1[0];
	$sale2 = $sales2[0];
	$link1 = $links1[0];
	$link2 = $links2[0];
}
else if (($now >= $dates[0])&&($now < $dates[1])){
	$today1 = $todays1[1];
	$today2 = $todays2[1];
	$sale1 = $sales1[1];
	$sale2 = $sales2[1];
	$link1 = $links1[1];
	$link2 = $links2[1];
}
else if (($now >= $dates[1])&&($now < $dates[2])){
	$today1 = $todays1[2];
	$today2 = $todays2[2];
	$sale1 = $sales1[2];
	$sale2 = $sales2[2];
	$link1 = $links1[2];
	$link2 = $links2[2];
}
else {
	$link1 = $links1[3];
	$link2 = $links2[3];
}
?>