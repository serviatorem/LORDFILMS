'use strict';
// Chainsaw man
import { animeData } from "./animedata.js";
animeData.forEach(item=>{
    if(item.title.length>25){
        item.title = item.title.slice(0,25)+' ...';
    }
})
function NewCard(array){
    const newAnime = {
        id: animeData.length,
        title: array[0],
        description: array[1],
        genre: array[2].split(','),
        rate: Number(array[3]),
        age: array[4],
        year: Number(array[5]),
        img: array[6],
        link: array[7],
    }
    animeData.push(newAnime);
    filterFunction();
}
function sortSet(set) {
    const entries = [];
    for (const member of set) {
        entries.push(member);
    }
    set.clear();
    for (const entry of entries.sort((a,b)=>{
        return a.rate - b.rate;
    })) {
        set.add(entry);
    }
    return set;
}
const main = document.querySelector('.main');
const FilterGenre = document.querySelectorAll('.header__genre input');
const FilterYear = document.querySelectorAll('.header__year input');
const FilterCense = document.querySelectorAll('.header__cense input');
const header__content = document.querySelector('.header__content');
const back = document.querySelector('.header__nav img');
const back__form = document.querySelector('#form__add .wrapper__img');
const video = document.createElement('div');
const search = document.querySelector('#Search');
const after = document.querySelector('.after');
const button__form = document.querySelector('.form__open');
const form = document.querySelector('#form__add');
const popup = document.querySelector('.popup');
const form__input = document.querySelectorAll('form input');
const form__labelWrapper = document.querySelectorAll('.form__label-wrapper .form__p');
const Filter = document.querySelector('#Filter');
const Filter__reset = document.querySelector('#Filter__reset')
const descending__button = document.querySelector('#descending');
const ascending__button = document.querySelector('#ascending');
const form__button__hidden = document.querySelector('#form__button-hidden');
const button__send = document.querySelector('#button__send');
form__button__hidden.addEventListener('click',()=>{
    form__hidden()
})
button__send.addEventListener('click',()=>{
    button__anime()
})
descending__button.addEventListener('click',()=>{
    descending()
})
ascending__button.addEventListener('click',()=>{
    ascending()
})
Filter.addEventListener('click',()=>{
    document.querySelector("#filter__show").classList.toggle("show");
})
Filter__reset.addEventListener('click',()=>{
    FilterGenre.forEach(item =>{
        item.checked = false;
    });
    FilterYear.forEach(item =>{
        item.checked = false;
    });
    FilterCense.forEach(item =>{
        item.checked = false;
    });
    search.value = '';
    filterFunction();
})
button__form.addEventListener('click', () => {
    form.classList.add('open');
    popup.classList.add('popup_open');
    back__form.style.visibility = 'visible';
    back__form.style.cursor = 'pointer';
  });
function Cards (animeData){
    main.classList.add('main__style');
    main.innerHTML = '';
    animeData.forEach(object =>{
        main.innerHTML+=`<div class="card">
                             <div class="card__content" id="${object.id}">
                             <a href = 'page.html?id=${object.id}' target="_blank" class = 'img__link'><img class="img" src="${object.img}" alt="" id="${object.id}"></a>
                                <div class = "card__text-rate"><span>${object.rate}★</span></div>
                             </div>
                             <div class = 'card__desc'><h2 class="card__title">${object.title}</h2></div>
                         </div>`;
    });
}
function filterShow() {
    document.querySelector("#filter__show").classList.toggle("show");
}
FilterGenre.forEach(item=>{
    item.addEventListener('click',()=>{
        filterFunction();
    });
})
FilterYear.forEach(item=>{
    item.addEventListener('click',()=>{
        filterFunction();
    });
})
FilterCense.forEach(item=>{
    item.addEventListener('click',()=>{
        filterFunction();
    });
})
function filterFunction() {
    main.classList.add('main__style');
    main.innerHTML = '';
    const animeDataCopy = [...animeData];
    animeDataCopy.sort((a,b)=> b.year - a.year);
    const filters = new Set(animeDataCopy);
    filters.forEach(item => {
        FilterGenre.forEach(object =>{
            if(object.checked){
                if (!(Object.values(item.genre).includes(object.id))) {
                    filters.delete(item);
                }
            }
        });
        FilterYear.forEach(object =>{
            if(object.checked){
                if (!(item.year === Number(object.id))) {
                    filters.delete(item);
                }
            }
        });
        FilterCense.forEach(object=>{
            if(object.checked){
                if(!(item.age === object.id)){
                    filters.delete(item);
                }
            }
        })
    });
    if (filters.size !== 0){
        Cards(filters);
    }else{
        main.classList.remove('main__style');
        main.innerHTML = `Не найдено аниме подходящих под условие`;
    }
    search.onkeyup = function (){
        const filtersCopy = [];
        let value = this.value.toLowerCase().replace(/\s/g,'');
        console.log(value.length);
        if(value.length > 7){
            after.classList.remove('after');
        }
        if(value.length>0){
            filters.forEach((item)=>{
                if ((item.title.toLowerCase().includes(value))){
                    filtersCopy.push(item);
                }
            })
            if (filtersCopy.length !== 0){
                main.classList.add('main__style');
                Cards(filtersCopy);
            }else{
                main.classList.remove('main__style');
                main.innerHTML = `Не найдено аниме подходящих под условие`;
            }
        }else{
            if (filters.size !== 0){
                Cards(filters);
            }else{
                main.classList.remove('main__style');
                main.innerHTML = `Не найдено аниме подходящих под условие`;
            }
        }
    }
    return filters;
}
function descending(){
    main.innerHTML = '';
    const ase = sortSet(filterFunction());
    Cards(ase);
}
function ascending(){
    main.innerHTML = '';
    const ase = sortSet(filterFunction());
    Cards(Array.from(ase).reverse());
}
function ReturnCards(){
    main.classList.add('main__style');
    header__content.style.display = 'block';
    back.style.visibility = 'hidden';
    main.removeChild(video);
    const cards = filterFunction();
    Cards(cards);
}
function form__hidden(){
    back__form.style.visibility = 'hidden';
    form.classList.remove('open');
    popup.classList.remove('popup_open');
}
filterFunction(animeData);
let name = form__input.item(0).value;
console.log(name);
function button__anime(){
    const newAnime = [];
    event.preventDefault(); // Отмена действия по-умолчанию, в данном случае - отправки
    let name = form__input.item(0).value;
    form__input.forEach((item,index) =>{
            if (!item.value){
                form__labelWrapper[index].innerHTML = 'поле не заполнено';
                console.log('поле не заполнено');
            }else{
                form__labelWrapper[index].innerHTML = '';
                newAnime.push(item.value);
            }
            console.log(item.value);
    })
    animeData.forEach(item=>{
        if(item.title === name){
            form.innerHTML = '';
            form.innerHTML = 'данное аниме уже существует на сайте';
        }
    });
    if(newAnime.length === 8){
        NewCard(newAnime);
        form__hidden();
    }
}