$(function () {
    $.getJSON("json/agenda.json", function (data) {
        $.each(data, function (key, value) {
            if (value.key == decodeURIComponent(window.location.search.substring(1).split("&")[0].split("=")[1])) {
                $("head title").html("Donald Trump - " + value.value.title);
                $("div[class='panel-header'] h2").html(value.value.title);
                $("div[class='panel-content'] div[class='row']:first-child div[class*='wrap']:last-child").html(value.value.vision);
                $("div[class='panel-content'] div[class='row']:last-child div[class*='wrap']:last-child").html(value.value.issues);
            }
        });
    });
});
