<?php

    $dates = array(strtotime('2020-01-23'),strtotime('2020-01-24'),strtotime('2020-01-25'));
    $now = strtotime('now');

    If ($now < $dates[0]) {
        header('location: ');
    }
    elseIf (($now >= $dates[0])&&($now <$dates[1])) {
        header('location: ');
    }
    elseIf (($now >= $dates[1])&&($now <$dates[2])) {
        header('location: ');
    }
    else {
        header('location: https://jayadhar.mastervision.su/sri-matrika-oracle/course/');
    }
?>