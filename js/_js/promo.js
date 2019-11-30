//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend intlTelInput.min.js
//@prepros-prepend utils.js

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../css/thanks-ie.min.css";
    head.appendChild(link);
}

$(document).ready(function () {
    $('.input-mail').intlTelInput({
        defaultCountry: "ru",
        initialCountry: "auto",
        preferredCountries: ["ru", "ua", 'az', 'am', 'by', 'kz', 'kg', 'md', 'tj', 'uz', 'tm', 'ge'],
        autoPlaceholder: 'aggressive',
        nationalMode: false,
        customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
            return "+" + selectedCountryData.dialCode;
        },
        geoIpLookup: function (success, failure) {
            /*
            $.get( "https://ip-api.com/json/", function( data ) {
                var countryCode = (data.countryCode) ? data.countryCode : "ru";
                success(countryCode);
            }, "json" );*/

            $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "ru";
                success(countryCode);
            });
        },
        separateDialCode: false,
        formatOnDisplay: false,
        utilsScript: 'https://mk.beauty-matrix.ru/assets/plugins/intltelinput/js/utils.js',
    });
    // $(function () {
    //     var e = new Date,
    //         t = e.getDate(),
    //         n = $(".switch-date");
    //     switch (t) {
    //         case 28:
    //             n.text("28 ноября");
    //             break;
    //         case 29:
    //             n.text("29 ноября");
    //             break;
    //         default:
    //             n.text("27 ноября")
    //     }
    // });
    $(function () {
        var check = $('.check'),
            email = $('.input-mail'),
            mes = $('.alert-message')
        button = $('.button-form');
        email.keypress(function (e) {
            if ((e.keyCode < 48 || e.keyCode > 57) && 43 != e.keyCode) {
                this.value += '';
                mes.slideDown(500).text("Только цифры!");
                return false
            } else {
                mes.slideUp(500)
            }
        });
        $(".form").on("submit", function () {
            var check = $('.check', this),
                reNone = /.+/,
                email = $('.input-mail', this),
                button = $('.button-form', this);

            if (!email.val().match(reNone)) {
                mes.slideDown(500).text("Введите телефон");
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                mes.slideDown(500).text("Подтвердите соглашение");
                return false;
            }
            if (email.val() && check) {
                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
                return true
            }
        });
        email.click(function () {
            mes.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#0a1938",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#0a1938",
                'transition': 'all .4s ease'
            });
            mes.slideUp(500);
        });
    });
});