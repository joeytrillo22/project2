//API Key 49tPTYHGFwcqLv0N15BPgc425XU6C48E

// URL https://api.giphy.com/v1/gifs/search?api_key=49tPTYHGFwcqLv0N15BPgc425XU6C48E&q=&limit=10&offset=0&rating=PG&lang=en

function fetchDataFromGiphy (searchTerm) {
    let url = `https://api.giphy.com/v1/gifs/search?
    api_key=49tPTYHGFwcqLv0N15BPgc425XU6C48E&q=${searchTerm}&limit=10`
    console.log(url);

    fetch(url)
    .then(fuction(response) {
        return response.json();
    }).then(function(data){
        console.log(data);
    })



}
function bootApp() {
    console.log('Page is loaded up!');
    console.log('Jquery is available', $);

    let searchTerm = 'corona';
    fetchDataFromGiphy(searchTerm)

}



$(bootApp);