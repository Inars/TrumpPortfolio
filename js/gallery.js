$(function () {
    $.getJSON("json/photogallery.json", function (data) {
        $.each(data, function (key, value) {
            if (value.key == decodeURIComponent(window.location.search.substring(1).split("&")[0].split("=")[1])) {
                $("head title").html(value.value.title);
                $("div[class='panel-content']").after(value.value.html);
                $("div[class='panel-header'] h2").html(value.value.title);
            }
        });
    });
});