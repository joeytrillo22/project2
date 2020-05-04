//API Key 49tPTYHGFwcqLv0N15BPgc425XU6C48E

// URL https://api.giphy.com/v1/gifs/search?api_key=49tPTYHGFwcqLv0N15BPgc425XU6C48E&q=&limit=10&offset=0&rating=PG&lang=en

$(function() {
    $(".button").click(function() {
        $(".results").empty();
        $("form").on("submit", function (e){
            e.preventDefault();
                getData();
        });
    });
});
function getData() {
    var input = $(".search").val();
        var xhr = $.get("https://api.giphy.com/v1/gifs/search?q="+input+"&api_key=49tPTYHGFwcqLv0N15BPgc425XU6C48E&limit=15");
        xhr.done(function (response) {
        console.log("success got data", response);
        var jiffs =response.data;
        for (i in jiffs) {
            $(".results").append("<img src='"  + jiffs[i].images.original.url + "' style= 'height: 250px; width: 250px; '/>");
        }
    })
}

