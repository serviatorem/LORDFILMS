'use strict';
let paramsId = (new URL(document.location)).searchParams;
const main = document.querySelector('.main');
const video = document.createElement('div');
console.log(paramsId.get('id'));
import { animeData } from "./animedata.js";
function AddAnime(id){
   main.classList.add('main__style');
   main.classList.add('main__page');
    main.innerHTML = '';
    main.innerHTML = `<div class="card__full">
                         <div class="card__content card__object" >
                           <img src="${animeData[id].img}" alt=""></a>
                         </div>
                         <div class="card__info">
                         <div class = "card__text-rate"></div>
                         <div class = 'card__desc'><h2 class="card__title">${animeData[id].title}</h2><span>${animeData[id].rate}★</span></div>
                         <div class="card__genre">
                            <span>жанры:</span><br> <span class="card__info-text">${(animeData[id].genre).join(', ')}</span>
                         </div>
                         <div class="card__age">
                            <span>возрастной ценз:</span><br><span class="card__info-text">${(animeData[id].age)}</span>
                         </div>
                         <div class="card__year">
                            <span>год выпуска:</span><br><span class="card__info-text">${(animeData[id].year)}</span>
                         </div>
                         <div class="card__description">
                            <span>Описание:</span><br><br><span class="card__info-text">${(animeData[id].description)}</span>
                         </div>
                        </div>
                        
                     </div>
        
    `
    video.classList.add('trailer');
    video.innerHTML =`
          <h2>
            Trailer
          </h2>
        <iframe width="695" height="450" src="${animeData[id].link}" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>`
    main.append(video);
}
AddAnime(paramsId.get('id'));