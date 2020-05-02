//API Key 49tPTYHGFwcqLv0N15BPgc425XU6C48E

// URL https://api.giphy.com/v1/gifs/search?api_key=49tPTYHGFwcqLv0N15BPgc425XU6C48E&q=&limit=10&offset=0&rating=PG&lang=en

$(document).ready(()=>{
    $("#submit").click(()=>{
        let userinput = $("#search").val()
        //alert(userinput)
    })
    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?api_key=49tPTYHGFwcqLv0N15BPgc425XU6C48E&q=${userinput}&limit=10&offset=0&rating=PG&lang=en`
    })
    .done((res)=>{
        console.log("res", res)
     
    })
})