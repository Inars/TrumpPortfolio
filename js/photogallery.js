$(function () {
    $.getJSON("json/photogallery.json", function (data) {
        var html = "";
        var dataCount = 0;
        $.each(data, function (key, value) {
            if (dataCount == 0) {
                html += "<div class='row'>" +
                        "<div class='col-6'>" +
                        "<a href='Gallery.html?id=" + value.key + "'>" +
                        "<div class='panel photocontainer'>" +
                        "<div class='panel-header'>" +
                        "<h2>" + value.value.title + "</h2>" +
                        "<h4>" + value.value.date + "</h4>" +
                        "</div>" +
                        "</div>" +
                        "</a>" +
                        "</div>";
                dataCount++;
            } else if (dataCount == 1) {
                html += "<div class='col-6'>" +
                        "<a href='Gallery.html?id=" + value.key + "'>" +
                        "<div class='panel photocontainer'>" +
                        "<div class='panel-header'>" +
                        "<div class='row'>" +
                        "<h2>" + value.value.title + "</h2>" +
                        "<h4>" + value.value.date + "</h4>" +
                        "</div>" +
                        "</div>" +
                        "</div>" +
                        "</a>" +
                        "</div>" +
                        "</div>";
                dataCount = 0;
            } else if (dataCount > 1) {
                alert("Critical error please contact your support.");
            }
        });
        $("body>div[class='col-12']").after(html);
    });
});
