//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend flipclock.min.js
//@prepros-prepend jquery.fancybox.min.js

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/course-ie.min.css";
    head.appendChild(link);
}

$(document).ready(function () {
    /* Якорь */
    $("a[href='#prices']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    /* Таймер */
    $(function () {
        var clock;
         var dates = new Array(
             new Date("January 23, 2020 00:00 UTC+3"),
             new Date("January 24, 2020 00:00 UTC+3"),
             new Date("January 25, 2020 00:00 UTC+3")
         );

         var currentDate = new Date();

         var sale1 = {
             name: $('#sale-1'),
             saleText: new Array('2 000р.', '1 000р.')
         };
         var sale2 = {
             name: $('#sale-2'),
             saleText: new Array('4 000р.', '2 000р.')
         };
         var today1 = {
             name: $('#today-1'),
             todayText: new Array('14 900р.', '15 900р.')
         };
         var today2 = {
             name: $('#today-2'),
             todayText: new Array('21 900р.', '23 900р.')
         };
         var link1 = {
             name: $('#link-1'),
             linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4377&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4378&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4379&clean=true&lg=ru')
         };
         var link2 = {
             name: $('#link-2'),
             linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4381&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4382&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4383&clean=true&lg=ru')
         };

         if (currentDate < dates[0]) {
             var futureDate = dates[0];
             var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
             clock = $('.clock').FlipClock(diff, {
                 clockFace: 'HourlyCounter',
                 countdown: true,
                 language: 'ru',
                 callbacks: {
                     stop: function () {
                         $('.clock-stop').addClass("alert-danger");
                         ("alert-danger");
                         $('.clock-stop').html("Скидка уменьшилась!");
                         sale1.name.text(sale1.saleText[0]);
                         sale2.name.text(sale2.saleText[0]);
                         today1.name.text(today1.todayText[0]);
                         today2.name.text(today2.todayText[0]);
                         link1.name.attr('href', link1.linkText[0]);
                         link2.name.attr('href', link2.linkText[0]);
                     }
                 }
             });
         } else if ((currentDate >= dates[0]) && (currentDate < dates[1])) {
             var futureDate = dates[1];
             var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
             clock = $('.clock').FlipClock(diff, {
                 clockFace: 'HourlyCounter',
                 countdown: true,
                 language: 'ru',
                 callbacks: {
                     stop: function () {
                         $('.clock-stop').addClass("alert-danger");
                         ("alert-danger");
                         $('.clock-stop').html("Скидка уменьшилась!");
                         sale1.name.text(sale1.saleText[1]);
                         sale2.name.text(sale2.saleText[1]);
                         today1.name.text(today1.todayText[1]);
                         today2.name.text(today2.todayText[1]);
                         link1.name.attr('href', link1.linkText[1]);
                         link2.name.attr('href', link2.linkText[1]);
                     }
                 }
             });
         }  else {
             var futureDate = dates[2];
             var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
             if (diff < 0) {
                 diff = 0;
                 $('.prepayment, .timer,  .cost-sale, .cost-today').remove();
                 $('.cost-full span').addClass('unbroken');
                 link1.name.attr('href', link1.linkText[2]);
                 link2.name.attr('href', link2.linkText[2]);
             }
             clock = $('.clock').FlipClock(diff, {
                 clockFace: 'HourlyCounter',
                 countdown: true,
                 language: 'ru',
                 callbacks: {
                     stop: function () {
                         $('.prepayment, .timer,  .cost-sale, .cost-today').remove();
                         $('.cost-full span').addClass('unbroken');
                         link1.name.attr('href', link1.linkText[2]);
                         link2.name.attr('href', link2.linkText[2]);
                     }
                 }
             });
         }
    });

    /*Конец документа*/
});