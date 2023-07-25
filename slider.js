const petsObj = {
    "Jennifer": {
        "name": "Jennifer",
        "img": "./images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    "Sophia": {
        "name": "Sophia",
        "img": "./images/pets-sohpia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    "Woody": {
        "name": "Woody",
        "img": "./images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    "Scarlett": {
        "name": "Scarlett",
        "img": "./images/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    "Katrine": {
        "name": "Katrine",
        "img": "./images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    "Timmy": {
        "name": "Timmy",
        "img": "./images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    "Freddie": {
        "name": "Freddie",
        "img": "./images/pets-last__cat.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    "Charly": {
        "name": "Charly",
        "img": "./images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        let context = this,
            args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

let sliderArr = [0, 1, 2, 3, 4, 5, 6, 7];
let prevArr = [];
let nextArr = [];

let screen = window.innerWidth;
let slidesCount = getSlidesCount(screen);

let [currentSlides, restSlides] = getRandomFromArr(sliderArr, slidesCount);
makeItemsActive(currentSlides);

function recalculation() {
    let newSlidesCount = getSlidesCount(window.innerWidth);
    makeItemsNotActive();
    if (newSlidesCount < slidesCount) {
        if (nextArr.length > 0) {
            nextArr = nextArr.slice(0, newSlidesCount);
        }
        if (prevArr.length > 0) {
            prevArr = prevArr.slice(0, newSlidesCount);
        }
        makeItemsActive(currentSlides.slice(0, newSlidesCount));
    } else {
        let [newCurrentSlides, newRestSlides] = getRandomFromArr(sliderArr, newSlidesCount);
        currentSlides = newCurrentSlides;
        restSlides = newRestSlides;
        makeItemsActive(newCurrentSlides);
    }
    slidesCount = newSlidesCount;
}

const debouncedRecalculation = debounce(recalculation, 400);

window.addEventListener('resize', debouncedRecalculation, true);

function getSlidesCount(screenWidth) {
    let s;
    if (screenWidth <= 670) {
        s = 1;
    } else if (screenWidth > 670 && screenWidth <= 1100) {
        s = 2;
    } else {
        s = 3;
    }
    return s;
}


function onClickNext() {

    if (nextArr.length === 0) {
        prevArr = currentSlides;
        let [newCurrentSlides, newRestSlides] = getRandomFromArr(restSlides, slidesCount);
        newRestSlides.push(...currentSlides);

        currentSlides = newCurrentSlides;
        restSlides = Array.from(new Set(newRestSlides));

        makeItemsNotActive();
        makeItemsActive(newCurrentSlides);
    } else {
        prevArr = currentSlides;
        currentSlides = nextArr;
        restSlides = Array.from(new Set(filterArray(nextArr)));
        makeItemsNotActive();
        makeItemsActive(nextArr);

        nextArr = [];
    }
}

function onClickPrev() {

    if (prevArr.length === 0) {
        nextArr = currentSlides;
        let [newCurrentSlides, newRestSlides] = getRandomFromArr(restSlides, slidesCount);
        newRestSlides.push(...currentSlides);

        currentSlides = newCurrentSlides;
        restSlides = Array.from(new Set(newRestSlides));

        makeItemsNotActive();
        makeItemsActive(newCurrentSlides);
    } else {

        nextArr = currentSlides;
        currentSlides = prevArr;
        restSlides = Array.from(new Set(filterArray(prevArr)));
        makeItemsNotActive();
        makeItemsActive(prevArr);

        prevArr = [];
    }
}

function getRandomFromArr(array, n) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    const slicedArr = shuffled.slice(0, n);
    const newArr = filterArray(slicedArr);

    return [slicedArr, newArr];
}

function filterArray(arr) {
    const toDeleteSet = new Set(arr);
    return sliderArr.filter((el) => {
        return !toDeleteSet.has(el);
    });
}

function makeItemsActive(arr) {
    arr.forEach(element => {
        const id = petsObj[Object.keys(petsObj)[element]].name;
        const el = document.getElementById(id);
        el.classList.add("active");
    });
}

function makeItemsNotActive() {
    const list = document.querySelectorAll(".slider__item.active");

    list.forEach(element => {
        element.classList.remove("active");
    });
}