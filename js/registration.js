$(document).ready(function () {
    var count = 0;
    $('#reg').click(function (e) {
    e.preventDefault();
        count++;
        setTimeout(function () {
            $(location).attr('href', "index.html");
        }, 800);
        $.ajax({
            type: "POST",
            url: "php/registration.php",
            data: $('.form').serialize(),
            success: function (data) {
                if (count === 1) {
                    alert("Yes");
                }
                if (count > 1) {

                }
            },
            error: function (xhr, str) {
                alert("No");
            }
        });
        return false;
    });

	$('body').on('click', '#auth', function(e) {

		e.preventDefault();

        $.ajax({
            type: "POST",
            url: "php/auth.php",
            data: $('.authform').serialize(),
            success: function (data) {
                if(data != "ok") {

					alert("Не верный логин или пароль");

				} else {

					$(location).attr('href', "/reviews.php");

				}
            },
            error: function (xhr, str) {
                alert("No");
            }
        });

	});

});
