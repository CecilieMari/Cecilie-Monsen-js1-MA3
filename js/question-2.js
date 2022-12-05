const URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f410055f5e7d453eae71079d3ecbacad"

async function get(url) {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    const gams = document.querySelector("#games")
    if(results){
  for(var i = 0; i <= 7; i++){

    gams.innerHTML += `<li> ${results.results[i].name} </li> 
    <li> ${results.results[i].rating} </li>
    <li> ${results.results[i].tags.length} </li>`;
}  
}
    return results
}
const results = get(URL)



