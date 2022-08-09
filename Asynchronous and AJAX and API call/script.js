'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// XML HTTP function




// const getCountryData = function(country){
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function(){
//         console.log(this.responseText);
//         const [data]  = JSON.parse(this.responseText);
//         console.log(data.borders);

//         const html = `
//             <article class="country">
//                 <img class="country__img" src="${data.flags.png}" />
//                 <div class="country__data">
//                     <h3 class="country__name">${data.name.common}</h3>
//                     <h4 class="country__region">${data.region}</h4>
//                     <p class="country__row"><span>👫</span>${Number(+data.population/1000000).toFixed(1)}</p>
//                     <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//                     <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//                 </div>
//             </article>
//         `;

    
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// }

// getCountryData('albania');


const renderCountry = function(data, className = ''){
    const html = `
            <article class="country ${className}">
                <img class="country__img" src="${data.flags.png}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name.common}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${Number(+data.population/1000000).toFixed(1)}</p>
                    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
                    <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
                </div>
            </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
}


// //AJAX call coutnry 1
// const getCountryAndNeighbour = function(country){
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function(){
//         //console.log(this.responseText);
//         const [data]  = JSON.parse(this.responseText);
//         console.log(data);

//         //Render country 1
//         renderCountry(data);

//         //get neighbour country 2
//         const [...neighbour] = data.borders;

//         console.log(neighbour);

//         if(!neighbour)  return;

//             ///AJAX call country 2
//             for(let i = 0; i < neighbour.length; i++ ){
//                 const request2 = new XMLHttpRequest();
//                 request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour[i]}`);
//                 request2.send();

//                 request2.addEventListener('load', function(){
//                     const [data2] = JSON.parse(this.responseText);
//                     console.log(data2);

//                     renderCountry(data2, 'neighbour');
//                 }); 
//             }
            
        
//     });
// }

// getCountryAndNeighbour('serbia');


const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];
            //console.log(neighbour);
            if(!neighbour) return;

            //country 2
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            return renderCountry(data[0], 'neighbour');
        });
};

getCountryData('albania')

