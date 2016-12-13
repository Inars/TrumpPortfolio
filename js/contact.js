$(function () {
   $("button[type=submit]").click(function () {
       var valid = true;
        $("input[type=text], input[type=email]").each(function () {
            if ($(this).val() == "") {
                $(this).css("border-color", "red");
                valid = false;
            } else {
                $(this).css("border-color", "#CCCCCC");
            }
        });
       if (!isValidEmailAddress($("input[type=email]").val())) {
           $("input[type=email]").css("border-color", "red");
       }
       if (!$("div[class='row']:nth-child(5) div[class='col-6']:first-child input[type=text]").contains(" ")) {
           $("div[class='row']:nth-child(5) div[class='col-6']:first-child input[type=text]").css("border-color", "red");
       }
       if (!valid) {
           return;
       }
       $("form>div[class='row']:nth-child(1)>div[class='col-12']>div").attr("class", "success");
       $("form>div[class='row']:nth-child(1)>div[class='col-12']>div").html("Success! Your submission has been successful.");
       $("form>div[class='row']:nth-child(1)>div[class='col-12']>div").fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
       $('body,html').animate({
           scrollTop : 0
       }, 500);
       return false;
   });
   $("div[class='row']:nth-child(5) div[class='col-6']:first-child").keydown(function (e) {
        var phoneinput = $("div[class='row']:nth-child(5) div[class='col-6']:first-child input[type=text]");
        if (phoneinput.val().length ==  0 && (e.keyCode != 46 || e.keyCode != 8)) {
            phoneinput.val("+");
        } else if(phoneinput.val().length ==  2 && (e.keyCode == 46 || e.keyCode == 8)) {
            phoneinput.val("");
        } else if (phoneinput.val().length == 4 && (e.keyCode != 46 || e.keyCode != 8)) {
            phoneinput.val(phoneinput.val() + " ");
        } else if (phoneinput.val().length == 4 && (e.keyCode == 46 || e.keyCode == 8)) {
            phoneinput.val(phoneinput.val().slice(0,-3));
        } else if (phoneinput.val().length == 6 && (e.keyCode == 46 || e.keyCode == 8)) {
            phoneinput.val(phoneinput.val().slice(0,-2));
        } else if (phoneinput.val().length > 12 && (e.keyCode != 46 && e.keyCode != 8)) {
            e.preventDefault();
        }
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                    (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                    (e.keyCode >= 35 && e.keyCode <= 40)) {
            return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}