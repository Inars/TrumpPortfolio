$(function () {
    $.getJSON("json/agenda.json", function (data) {
        var columnCounter = 0,
            innerhtml = "";
        $.each(data, function (key, value) {
            if (columnCounter == 0) {
                innerhtml += '<div class="row">' +
                             '<div class="col-1"></div>' +
                             '<div class="col-5">' +
                             '<a href="AgendaDescription.html?id=' + value.key + '" class="issue-item">' +
                             '<div class="panel">' +
                             '<div class="panel-content">' +
                             '<p>' +
                             '<img src="images/' + value.value.image + '" rel="Infrastructure">' +
                             '</p>' +
                             '<h2>' + value.value.title + '</h2>' +
                             '<p>' +
                             'read more' +
                             '</p>' +
                             '</div>' +
                             '</div>' +
                             '</a>' +
                             '</div>';
                columnCounter++;
            } else if (columnCounter == 1) {
                innerhtml += '<div class="col-5">' +
                             '<a href="AgendaDescription.html?id=' + value.key + '" class="issue-item">' +
                             '<div class="panel">' +
                             '<div class="panel-content">' +
                             '<p>' +
                             '<img src="images/' + value.value.image + '" rel="Infrastructure">' +
                             '</p>' +
                             '<h2>' + value.value.title + '</h2>' +
                             '<p>' +
                             'read more' +
                             '</p>' +
                             '</div>' +
                             '</div>' +
                             '</a>' +
                             '</div>' +
                             '<div class="col-1"></div>' +
                             '</div>';
                columnCounter = 0;
            }
        });
        $("body>div[class='col-12']").after(innerhtml);
    });
});