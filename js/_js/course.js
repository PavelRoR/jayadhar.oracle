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
        var futureDate = new Date("August 1, 2019 00:00 AM UTC+3");
        var currentDate = new Date();
        var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

        function dayDiff(first, second) {
            return (second - first) / (1000 * 60 * 60 * 24);
        }
        if (dayDiff(currentDate, futureDate) < 100) {
            $('.clock').addClass('twoDayDigits');
        } else {
            $('.clock').addClass('threeDayDigits');
        }
        if (diff < 0) {
            diff = 0;
            $('.clock-stop').addClass("alert-danger");
            $('.clock-stop').html("Скидка сгорела!");

        }
        clock = $('.clock').FlipClock(diff, {
            clockFace: 'HourlyCounter',
            countdown: true,
            language: 'ru',
            callbacks: {
                stop: function () {
                    $('.clock-stop').addClass("alert-danger");
                    $('.clock-stop').html("Скидка сгорела!");
                }
            }
        });
        // var dates = new Array(
        //     new Date("January 14, 2020 00:00 UTC+3"),
        //     new Date("January 15, 2020 00:00 UTC+3"),
        //     new Date("January 16, 2020 00:00 UTC+3"),
        //     new Date("January 17, 2020 00:00 UTC+3")
        // );

        // var currentDate = new Date();

        // var sale1 = {
        //     name: $('#sale-1'),
        //     saleText: new Array('1 500р.', '1 000р.', '500р.')
        // };
        // var sale2 = {
        //     name: $('#sale-2'),
        //     saleText: new Array('3 000р.', '2 000р.', '1 000р.')
        // };
        // var sale3 = {
        //     name: $('#sale-3'),
        //     saleText: new Array('3 000р.', '2 000р.', '1 000р.')
        // };
        // var today1 = {
        //     name: $('#today-1'),
        //     todayText: new Array('7 490р.', '7 990р.', '8 490р.')
        // };
        // var today2 = {
        //     name: $('#today-2'),
        //     todayText: new Array('12 990р.', '13 990р.', '14 990р.')
        // };
        // var today3 = {
        //     name: $('#today-3'),
        //     todayText: new Array('15 990р.', '16 990р.', '17 990р.')
        // };
        // var link1 = {
        //     name: $('#link-1'),
        //     linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4332&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4333&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4334&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4335&clean=true&lg=ru')
        // };
        // var link2 = {
        //     name: $('#link-2'),
        //     linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4336&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4337&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4338&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4339&clean=true&lg=ru')
        // };
        // var link3 = {
        //     name: $('#link-3'),
        //     linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4340&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4341&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4342&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4343&clean=true&lg=ru')
        // };
        // if (currentDate < dates[0]) {
        //     var futureDate = dates[0];
        //     var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
        //     clock = $('.clock').FlipClock(diff, {
        //         clockFace: 'HourlyCounter',
        //         countdown: true,
        //         language: 'ru',
        //         callbacks: {
        //             stop: function () {
        //                 $('.clock-stop').addClass("alert-danger");
        //                 ("alert-danger");
        //                 $('.clock-stop').html("Скидка уменьшилась!");
        //                 sale1.name.text(sale1.saleText[0]);
        //                 sale2.name.text(sale2.saleText[0]);
        //                 sale3.name.text(sale3.saleText[0]);
        //                 today1.name.text(today1.todayText[0]);
        //                 today2.name.text(today2.todayText[0]);
        //                 today3.name.text(today3.todayText[0]);
        //                 link1.name.attr('href', link1.linkText[0]);
        //                 link2.name.attr('href', link2.linkText[0]);
        //                 link3.name.attr('href', link3.linkText[0]);
        //             }
        //         }
        //     });
        // } else if ((currentDate >= dates[0]) && (currentDate < dates[1])) {
        //     var futureDate = dates[1];
        //     var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
        //     clock = $('.clock').FlipClock(diff, {
        //         clockFace: 'HourlyCounter',
        //         countdown: true,
        //         language: 'ru',
        //         callbacks: {
        //             stop: function () {
        //                 $('.clock-stop').addClass("alert-danger");
        //                 ("alert-danger");
        //                 $('.clock-stop').html("Скидка уменьшилась!");
        //                 sale1.name.text(sale1.saleText[1]);
        //                 sale2.name.text(sale2.saleText[1]);
        //                 sale3.name.text(sale3.saleText[1]);
        //                 today1.name.text(today1.todayText[1]);
        //                 today2.name.text(today2.todayText[1]);
        //                 today3.name.text(today3.todayText[1]);
        //                 link1.name.attr('href', link1.linkText[1]);
        //                 link2.name.attr('href', link2.linkText[1]);
        //                 link3.name.attr('href', link3.linkText[1]);
        //             }
        //         }
        //     });
        // } else if ((currentDate >= dates[1]) && (currentDate < dates[2])) {
        //     var futureDate = dates[2];
        //     var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
        //     clock = $('.clock').FlipClock(diff, {
        //         clockFace: 'HourlyCounter',
        //         countdown: true,
        //         language: 'ru',
        //         callbacks: {
        //             stop: function () {
        //                 $('.clock-stop').addClass("alert-danger");
        //                 ("alert-danger");
        //                 $('.clock-stop').html("Скидка уменьшилась!");
        //                 sale1.name.text(sale1.saleText[2]);
        //                 sale2.name.text(sale2.saleText[2]);
        //                 sale3.name.text(sale3.saleText[2]);
        //                 today1.name.text(today1.todayText[2]);
        //                 today2.name.text(today2.todayText[2]);
        //                 today3.name.text(today3.todayText[2]);
        //                 link1.name.attr('href', link1.linkText[2]);
        //                 link2.name.attr('href', link2.linkText[2]);
        //                 link3.name.attr('href', link3.linkText[2]);
        //             }
        //         }
        //     });
        // } else {
        //     var futureDate = dates[3];
        //     var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
        //     if (diff < 0) {
        //         diff = 0;
        //         $('.prepayment, .timer,  .cost-sale, .cost-today').remove();
        //         $('.cost-full span').addClass('unbroken');
        //         link1.name.attr('href', link1.linkText[3]);
        //         link2.name.attr('href', link2.linkText[3]);
        //         link3.name.attr('href', link3.linkText[3]);
        //     }
        //     clock = $('.clock').FlipClock(diff, {
        //         clockFace: 'HourlyCounter',
        //         countdown: true,
        //         language: 'ru',
        //         callbacks: {
        //             stop: function () {
        //                 $('.prepayment, .timer,  .cost-sale, .cost-today').remove();
        //                 $('.cost-full span').addClass('unbroken');
        //                 link1.name.attr('href', link1.linkText[3]);
        //                 link2.name.attr('href', link2.linkText[3]);
        //                 link3.name.attr('href', link3.linkText[3]);
        //             }
        //         }
        //     });
        // }
    });

    /*Конец документа*/
});