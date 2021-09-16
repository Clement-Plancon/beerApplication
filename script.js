fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(data => {
        const beer = document.querySelector('.beer');
        for (i = 0; i < data.length; i++) {
            console.log(data[i]);
            beer.innerHTML += `<div class="card"><img src="${data[i].image_url}"></div> `
        }


        /*   beer.innerHTML = ` <img class="imgBeer" src="${beerImg}"/> `; */

    });