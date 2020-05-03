//API Key 49tPTYHGFwcqLv0N15BPgc425XU6C48E

// URL https://api.giphy.com/v1/gifs/search?api_key=49tPTYHGFwcqLv0N15BPgc425XU6C48E&q=&limit=10&offset=0&rating=PG&lang=en


function displayResults (results) {
    let myHtml = '';
    for(res of results){
        //console.log(res);
        myHtml = myHtml + `<div class= 'row'> 
        <div class= 'col-sm-4'>               
        <img src=${res.images.original.url} /> 
        </div>`
    }

    myHtml = myHtml + "</div>"

    console.log(myHtml);
    $('#results').html(myHtml)
}
function fetchDataFromGiphy (searchTerm) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=49tPTYHGFwcqLv0N15BPgc425XU6C48E&q=${searchTerm}&limit=10`
    console.log(url);

    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(result){
       console.log(result.data);
        displayResults(result.data)
    })

}
function bootApp() {
    //console.log('Page is loaded up!');
    //console.log('Jquery is available', $);

    let searchTerm = 'corona';
    fetchDataFromGiphy(searchTerm)

}



$(bootApp);