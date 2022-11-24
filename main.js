'use strict';
const animeData= [
    //1
    {
        id: 0,
        title: "Chainsaw man",
        description: "Дэндзи приходится полностью изменить свою жизнь, чтобы отработать непомерные долги отца. Он становится подручным якудзы в нелегком деле уничтожения демонов. Теперь у Дэндзи лишь одна цель – деньги, только в них он видит шанс на освобождение. Желая быстрей получить прибыль, парень забывает об осторожности и в одной из схваток погибает. Верный Почито спасает хозяина, слившись с ним и дав способность частичного превращения в бензопилу.",
        genre: ["Demons", "Adventures", "Supernatural", "Senen", "Action"],
        rate: 9.9,
        age: "18+",
        year: 2022,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/6319cd947a99a365246749.jpg",
        link: "https://www.youtube.com/embed/dFlDRhvM4L0",
    },
    //2
    {
        id: 1,
        title: "Spy x Family Part 2",
        description: "Лойд Форджер скрывает, что он секретный агент Весталиса. Йор Форджер умалчивает, что является наёмной убийцей, работающей в Остании. Тем не менее правда об их фиктивном браке и настоящих профессиях известна «дочери» Лойда, Ане, которую тот взял из приюта, не подозревая, что та не так проста, как кажется. Девочка, прошедшая через эксперименты, обрела способность читать чужие мысли. Пример этой фальшивой семьи подтверждает, что существует ложь во спасение. Особенно, когда на кону стоит ни много ни мало — мир во всём мире и жизни невинных людей!",
        genre: ["Comedy", "Senen", "Action"],
        rate: 9.6,
        age: "0+",
        year: 2022,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/631cbcdda8fae239603812.jpg",
        link: "https://www.youtube.com/embed/dkgOtUWicOs",
    },
    //3
    {
        id: 2,
        title: "Blue Lock",
        description: "Попадает в проект и перспективный форвард Ёити Исаги, не сумевший правильно распорядиться мячом в финале молодежного турнира. Получится ли у Исаги отбросить пустые сомнения и доказать всем свою гениальность, эффективность, игровую зрелость? Чтобы стать нападающим мирового уровня, сначала нужно выжить в «Синей тюрьме» и заслужить расположение Дзимпати Эго. Исаги придется отбросить все сомнения и силой возводить мостик к заветной мечте. Главное, не сломаться на полпути. Молодому форварду не привыкать к тяжелым нагрузкам, но хватит ли у Исаги тактической выучки и выдержки, чтобы правильно выстроить стратегию на весь период прохождения «Синей тюрьмы»?",
        genre: ["Senen", "Sport"],
        rate: 9.6,
        age: "12+",
        year: 2022,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/6341d35f1734f259446412.jpg",
        link: "https://www.youtube.com/embed/8BD8vyNpvMo",
    },
    //4
    {
        id: 3,
        title: "The Eminence in Shadow",
        description: "В нашем мире такое трудно провернуть, ведь что ни делай, а против атомной бомбы не попрёшь. И вот, раздумывая о способах отражения ядерного оружия голыми руками, наш герой приходит к умозаключению, что без магии никак. Удобно получилось, ведь вскоре после этого парень встретил пресловутый грузовик, который и отправил его на тот свет, а если быть точнее, то в мир, полный мечей, магии и прочих прелестей фэнтези-вселенных. Уж теперь-то у Сида не будет препятствий на пути к становлению величайшим правителем из тени.",
        genre: ["Comedy", "Fantasy", "Action"],
        rate: 9.4,
        age: "16+",
        year: 2022,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/6319d10357dec953113094.jpg",
        link: "https://www.youtube.com/embed/JExp_Mafxgc",
    },
    //5
    {
        id: 4,
        title: "Sword Art Online: Progressive Movie - Hoshi Naki Yoru no Aria",
        description: "Асуна Юки была лучшей ученицей, усердно готовилась к вступительным экзаменам в старшую школу, но это было до того, как она одолжила у брата игровую систему виртуальной реальности и оказалась в ловушке Sword Art Online вместе с десятью тысячами других напуганных игроков. Проходит время, и Асуна начинает бояться, что станет с её жизнью за пределами фантастического мира. Какой неудачницей она может оказаться в глазах сверстников и родителей. Не желая ждать в сторонке, пока более опытные игроки пройдут игру, Асуна использует свои способности к обучению, чтобы изучить механику игры и владение мечом. ",
        genre: ["Adventures", "Fantasy", "Action"],
        rate: 9.5,
        age: "16+",
        year: 2022,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/62cf3120e5fe2978650321.jpg",
        link: "https://www.youtube.com/embed/C3O6RhPsCTM",
    },
    //6
    {
        id: 5,
        title: "Date a live",
        description: "Населению Земли грозит опасность - инопланетные существа решают атаковать человечество. Люди уже привыкли, что кроме стандартных штормов, бурь и цунами, теперь возникнут еще и неполадки с погодой, урожаем и температурой воздуха. Страшные беды не остановить высококлассным оружием или беседами с противниками. Стоит ли рисковать своей жизнью, чтобы на десять минут унять страшный торнадо, который приходит третий раз за день? Зачем бежать с мечом наперевес в пучину событий, когда можно сделать все хитрее?",
        genre: ["Comedy", "Fantasy", "Action"],
        rate: 9.3,
        age: "16+",
        year: 2013,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5c3795f58c297270015274.jpg",
        link: "https://www.youtube.com/embed/6GW0wXMt2CQ",
    },
    //7
    {
        id: 6,
        title: "Angel Beats!",
        description: "Отонаси просыпается после долгого сна, только чтобы узнать, что он мертв. Девушка с винтовкой по имени Юри объясняет ему, что они в загробной жизни, и Отонаси понимает, что единственное, что он может вспомнить о себе — это своё имя. Юри говорит ему, что она возглавляет «Фронт загробного мира» и ведет войну против девушки по имени Тенши. Не в силах поверить в это, Отонаси пытается поговорить с ней, но встреча проходит не так как хотелось бы.",
        genre: ["Harem", "Comedy", "Furs", "Romance", "Fantasy", "School"],
        rate: 6.0,
        age: "16+",
        year: 2010,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/60b490dda5b48793747490.jpg",
        link: "https://www.youtube.com/embed/Turf7WDB3iY",
    },
    //8
    {
        id: 7,
        title: "Absolute Duo",
        description: "Тору Коконоэ надеется поступить в эту академию, чтобы обрести силу, и отомстить за убийство своей сестры и друзей. Тем не менее, на церемонии открытия он узнает, что вынужден сражаться против человека, сидящего рядом с ним, а проигравший изгоняется. Также следуя заведённым в академии правилам, Тору получает в напарницы Юлию Сигтуну, с которой ему теперь предстоит учиться и работать в команде до самого выпуска. Куда уж там до составления планов мести, когда рядом такая сребровласая красавица...",
        genre: ["Harem", "Romance", "Supernatural", "School", "Action", "Etty"],
        rate: 6.7,
        age: "16+",
        year: 2015,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5d63d4ff1dcd9520316178.jpg",
        link: "https://www.youtube.com/embed/1CBctbw3c0s",
    },
    //9
    {
        id: 8,
        title: "Engage Kiss",
        description: "Вейрон-сити — город на огромном плавучем острове в Тихом океане, который не принадлежит ни к одной стране. Благодаря добыче оргония — нового источника энергии, он находится в центре мирового внимания. И на нём происходят так называемые «Д-бедствия» — происшествия, вызываемые дьяволами. О Д-бедствиях знают немногие, в том числе ЧВК, которые занимаются их ликвидацией. В одной из таких компаний, самой крошечной, работает Сю. По какой-то причине он очень придирчиво выбирает поручения, поэтому с деньгами у него вечно проблемы. Сю выручаю бывшая девушка и дочь бывшей начальницы Аяно, а также Кисара, с которой его связывают опасные узы...",
        genre: ["Comedy", "Romance"],
        rate: 9.4,
        age: "16+",
        year: 2022,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/630914b08c91d247771532.jpg",
        link: "https://www.youtube.com/embed/9Dx4Ml1eBKM",
    },
    //10
    {
        id: 9,
        title: "Assassins Pride",
        description: "В мире, где лишь знать владеет маной и ведёт битву с созданиями тьмы, отсутствие способностей ставит юную Мелиду в опасное положение. Под предлогом обучения безжалостный убийца Куфа должен оценить навыки девушки и определить, является ли она истинной наследницей семьи Ангел. Если она не оправдает ожидания, в ход пойдет другой план, итог которого — её смерть..",
        genre: ["Fantasy"],
        rate: 8.2,
        age: "12+",
        year: 2019,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5d9f5a769cc2f209060036.jpg",
        link: "https://www.youtube.com/embed/RLhRH1txge0",
    },
    //11
    {
        id: 10,
        title: "The Future Diary",
        description: "Юкитэру Амано простой четырнадцатилетний парень, учащийся в школе. Он привык постоянно всё делать самостоятельно и всю осознанную жизнь старался добиться высот. Но оказывается, что он является довольно замкнутым и не собирается меняться. Подобный образ жизни его полностью устраивает, и он безумно рад, что так происходит. Единственный, с кем он общается, это вымышленный друг по имени Деус. Он является Богом Вселенной и постоянно помогает герою справляться с различными трудностями.",
        genre: ["Detective", "Psychological", "Supernatural", "Senen", "Thriller", "Action"],
        rate: 7.9,
        age: "18+",
        year: 2011,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5a85b5326b196703926212.jpg",
        link: "https://www.youtube.com/embed/LLDA9cfRLlg",
    },
    //12
    {
        id: 11,
        title: "Peach Boy Riverside",
        description: "Давным-давно, в стародавние времена на далёких землях жили-были старик со старухой. Старик собирал в горах хворост, а старуха стирала в реке бельё. Часть пропускаем. В конце концов демон был побеждён. Но на белом свете хватает ему подобных и потому Момотаро отправился в плавание. Ужасное чудовище было повержено и лишь одно омрачало радость от победы… Победитель светился от удовольствия. Давайте предположим… Что, если волны принесли далеко не один персик? Что, если тот персик был всего лишь одним из многих других таких же?",
        genre: ["Senen", "Fantasy"],
        rate: 7.2,
        age: "18+",
        year: 2021,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/60d857bfdaf53483045798.jpg",
        link: "https://www.youtube.com/embed/zlhqLdmn9dw",
    },
    //13
    {
        id: 12,
        title: "Classroom of the Elite",
        description: "Кедо Икусей – знаменитое учебное заведение, в котором обучаются невероятно талантливые ребята, способные в будущем стать истинными мастерами в своей сфере деятельности. Академия имеет выдающиеся показатели. Конкурирующие учреждения точно не могут похвастаться стопроцентной занятостью студентов, которые сразу же после завершения курса получают престижные рабочие места. Все старшеклассники здесь не сковываются серьезными правилами и строгой дисциплиной. Они сами понимают ценность учебы, поэтому стараются не отвлекаться на бестолковые развлечения.",
        genre: ["Drama", "Slice of life", "Psychological", "School"],
        rate: 9.6,
        age: "12+",
        year: 2017,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5ab171c6da42c160184249.jpg",
        link: "https://www.youtube.com/embed/hsfBOwAIhOw",
    },
    //14
    {
        id: 13,
        title: "Magical Girl Site",
        description: "Каждый человек, столкнувшийся с издевательством, мечтает однажды отомстить мерзкому обидчику. Ая Асагири – четырнадцатилетняя особа, изрядно уставшая от постоянных насмешек. Покой девушка не находит ни в домашних стенах, где её поджидает дерзкий брат, ни в школе, где вечно пристают жестокие одноклассники. В определенный момент главная героиня начинает подумывать о самоубийстве. Неожиданно она сталкивается с достаточно интересным сайтом. На нем любознательная посетительница получает магическую палочку и превращается в настоящую волшебницу.",
        genre: ["Drama", "Psychological", "Supernatural", "Horrors"],
        rate: 9.0,
        age: "16+",
        year: 2018,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5abe33ee6e805560704181.jpg",
        link: "https://www.youtube.com/embed/fdgZqVh6yYs",
    },
    //15
    {
        id: 14,
        title: "Akame Ga Kill!",
        description: "Тацуми однажды отправился совместно со своими близкими приятелями в мегаполис, чтобы заработать деньги и избавить родную деревню от нищеты. С ранних лет он тренировался, поэтому в области боев не был новичком и мог с лёгкостью расправиться с любым противником. Но, оказавшись в пределах огромного города, главный герой не только подвергся жестокому обману со стороны одной красавицы, но и потерял все сбережения. Тацуми решил вступить в городскую армию. Он захотел перевоплотиться в капитана, но местный руководитель выкинул прочь амбициозного паренька и объяснил, что так действовать нельзя.",
        genre: ["Drama", "Adventures", "Senen", "Fantasy", "Action"],
        rate: 9.0,
        age: "16+",
        year: 2014,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/60be739524217975343574.jpg",
        link: "https://www.youtube.com/embed/mAzFWd5WqOg",
    },
    //16
    {
        id: 15,
        title: "So I'm a Spider, So What?",
        description: "Я, главная героиня, была обычной школьницей, но неожиданно переродилась в монстра-паука в другом мире. Да ещё и очутилась в подземелье, полном монстров. Мне, вооружённой только смекалкой и безграничным оптимизмом, приходится побеждать монстров намного сильнее себя с помощью ловушек из паутины... Так начинается история выживания одной очень упорной девушки, которая оказалась слабейшим монстром в этом лабиринте!",
        genre: ["Detective", "Comedy", "Magic", "Adventures", "Fantasy", "Action"],
        rate: 6.5,
        age: "12+",
        year: 2021,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/606459fa9af72265580666.jpg",
        link: "https://www.youtube.com/embed/2hyDlt_yvv4",
    },
    //17
    {
        id: 16,
        title: "The daily life of an immortal King",
        description: "Юный гений среди волшебников, мальчик Ван Лин, уже в 6ти летнем возрасте смог одолеть могучего демона. Ради его защиты было решено не афишировать его способности и дать возможность жить обычной жизнью. Ван Лин не амбициозен, его не привлекает слава, богатства, да и перспектива стать могучим магом тоже.",
        genre: ["Demons", "Comedy", "Slice of life", "Adventures", "Fantasy", "School"],
        rate: 7.0,
        age: "0+",
        year: 2020,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5f00372c7a6ed536216626.jpg",
        link: "https://www.youtube.com/embed/ov3VnbKNepQ",
    },
    //18
    {
        id: 17,
        title: "The Misfit of Demon King Academy",
        description: "Жестокий владыка тьмы, поверженный две тысячи лет назад, возродился... Однако в академии, где учат кандидатов во владыки тьмы, ему поставили оценку… «не годен»?! Он уничтожал людей, духов и даже богов, но бесконечная война наскучила ему, и владыка тьмы Анос Волдигод переродился с мечтой о спокойном мире. Только две тысячи лет спустя его ждали крайне ослабевшие от мирной жизни потомки и пришедшая в полный упадок магия.",
        genre: ["Demons", "Magic", "Fantasy", "School", "Action"],
        rate: 8.0,
        age: "12+",
        year: 2020,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5f1b1003f1428828153170.jpg",
        link: "https://www.youtube.com/embed/7tWLrGdk9ko",
    },
    //19
    {
        id: 18,
        title: "The Pet Girl of Sakurasou",
        description: "В старшей школе искусств университета Суймэй есть множество общежитий, а есть доходный дом «Сакура». Если в общежитиях действуют строгие правила, то в «Сакуре» можно все, недаром ее местное прозвище – «сумасшедший дом». Так как в искусстве гений и сумасшествие всегда где-то рядом, то обитатели «вишневого сада» - талантливые и интересные ребята, слишком уж выбивающиеся из «болота».",
        genre: ["Drama", "Comedy", "Slice of life", "Romance", "School"],
        rate: 8.0,
        age: "12+",
        year: 2012,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5f718b8bdaab3134220072.jpg",
        link: "https://www.youtube.com/embed/E3F6jKwMk78",
    },
    //20
    {
        id: 19,
        title: "Black Clover",
        description: "Ещё младенцами в один и тот же день Аста с Юно были подброшены под двери церкви одной отдалённой деревни. Годы шли, мальчики росли, а миром вокруг них правила магия. Юно оказался по-настоящему одарённым чародеем, а Аста не мог наколдовать и простейшее из заклинаний. На свой пятнадцатый день рождения юноши получат свою собственную книгу заклинаний — гримуар. Лучшие друзья в прошлом, а ныне соперники… Они делят одну мечту на двоих. Каждый из них хочет стать Королём-чародеем. А сдаваться — это не про них!",
        genre: ["Comedy", "Magic", "Senen", "Fantasy", "Action"],
        rate: 8.0,
        age: "12+",
        year: 2017,
        img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5bbd16801a7cd762823407.jpg",
        link: "https://www.youtube.com/embed/jYUQ1Px3zPA",
    }
];
const animeDataCopy = [...animeData];
animeData.sort((a,b)=> b.year - a.year);
function NewCard(title, description, genre, rate, age,img,link){
    this.id = animeData.length+1
    this.title = title;
    this.description = description;
    this.genre = genre;
    this.rate = rate;
    this.age = age;
    this.img = img;
    this.link = link;
};
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
  };
const container = document.querySelector('.container');
const main = document.querySelector('.main');
const FilterGenre = document.querySelectorAll('.header__genre input');
const FilterYear = document.querySelectorAll('.header__year input');
const FilterCense = document.querySelectorAll('.header__cense input');
const header__content = document.querySelector('.header__content');
function Cards (animeData){
    header__content.style.display = 'block';
    main.innerHTML = '';
    animeData.forEach(object =>{
        main.innerHTML+=`<div class="card">
                             <div class="card__content" id="${object.id}">
                                <img class="img" src="${object.img}" alt="">
                                <div class = "card__text-rate"><span>${object.rate}★</span></div>
                             </div>
                             <div class = 'card__desc'><h2 class="card__title">${object.title}</h2></div>
                         </div>`;
    });
    AddEvent();
}
Cards(animeData);
function AddEvent(){
    const card = document.querySelectorAll('.card__content');
    card.forEach(item =>{
    item.addEventListener('click',function(){
        header__content.style.display = 'none';
        const id = item.id;
        console.log(item.id);
        main.innerHTML = '';
        main.innerHTML = `<div class="card card__full">
                             <div class="card__content card__object" id="${id}">
                                <img src="${animeData[id].img}" alt="">
                                <div class = "card__text-rate"><span>${animeData[id].rate}★</span></div>
                                <div class = 'card__desc'><h2 class="card__title">${animeData[id].title}</h2></div>
                             </div>
                             <div class="card__info">
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
        const video = document.createElement('div');
        video.classList.add('trailer');
        video.innerHTML =`
              <h2>
                Trailer
              </h2>
            <iframe width="700" height="394" src="${animeData[id].link}" title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>`
        container.append(video);
    });
    item.style.cursor = 'pointer';
})
}
function filterShow() {
    document.querySelector("#filter__show").classList.toggle("show");
}
function filterFunction() {
    main.innerHTML = '';
    const filters = new Set(animeDataCopy);
    filters.forEach(item => {
        FilterGenre.forEach(object =>{
            if(object.checked){
                if (!(Object.values(item.genre).includes(object.id))) {
                    filters.delete(item);
                }
            }
        });
    });
    filters.forEach(item => {
        FilterYear.forEach(object =>{
            if(object.checked){
                if (!(item.year === Number(object.id))) {
                    filters.delete(item);
                }
            }
        });
    });
    filters.forEach(item=>{
        FilterCense.forEach(object=>{
            if(object.checked){
                if(!(item.age === object.id)){
                    filters.delete(item);
                }
            }
        })
    });
    Cards(filters);
    return filters;
};
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
function reset() {
    FilterGenre.forEach(item =>{
        item.checked = false;
    });
    FilterYear.forEach(item =>{
        item.checked = false;
    });
    FilterCense.forEach(item =>{
        item.checked = false;
    });
    Cards(animeData);
};
function ReturnCards(){
    const cards = filterFunction();
    Cards(cards);
}