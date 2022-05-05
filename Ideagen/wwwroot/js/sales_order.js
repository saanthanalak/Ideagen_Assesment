
function myFunction() {
    $("#myModal").modal('toggle'); //see here usage
};


$(function () {
    $("#reset").on("click", function () {
        var all = $(this);
        $('input:checkbox').each(function () {
            $(this).prop("checked", all.prop("checked"));
        });
    });
});


function uncheck() {
    document.getElementById("reset").checked = false;
}



$(document).ready(function () {
    setInterval(function () {
        cache_clear()
    }, 60000);
});

function cache_clear() {
    window.location.reload(true);
    // window.location.reload(); use this if you do not remove cache
}


