<?php

    $dates = array(strtotime('2020-01-23'),strtotime('2020-01-24'),strtotime('2020-01-25'));
    $now = strtotime('now');

    If ($now < $dates[0]) {
        header('location: https://start.bizon365.ru/room/18087/shrimatrika_d1');
    }
    elseIf (($now >= $dates[0])&&($now <$dates[1])) {
        header('location: https://start.bizon365.ru/room/18087/shrimatrika_d2');
    }
    elseIf (($now >= $dates[1])&&($now <$dates[2])) {
        header('location: https://start.bizon365.ru/room/18087/shrimatrika_d3');
    }
    else {
        header('location: https://jayadhar.mastervision.su/sri-matrika-oracle/course/');
    }
?>