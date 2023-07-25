"use strict"
const modalWindow = document.querySelector('#modal');
const menuBtn = document.querySelector('#burgerBtn');
const menu = document.querySelector('.burger__menu');
const body = document.body;

function closeBurgerMenu() {
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
  body.classList.remove('lock');
  body.classList.remove('bg-lock');
}

function isMenuOpen() {
  return menu.classList.contains("active") && menuBtn.classList.contains("active");
}

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock bg-lock');
})

body.addEventListener('click', function (e) {
  if (isMenuOpen()) {
    if (!e.target.classList.contains("burger__menu") && !e.target.classList.contains("burger-wrapper") && !e.target.classList.contains("burger")) {
      closeBurgerMenu();
    }
  }

})

const anchors = document.querySelectorAll('.burger__item');

anchors.forEach(anchor => {
  anchor.addEventListener('click', () => {
    closeBurgerMenu();
  })
})



function isModalOpen() {
  return modalWindow.classList.contains('active');
}

function openModal(name) {
  const img = document.getElementById("petImg");
  const petsName = document.getElementById("petName");
  const type = document.getElementById("petType");
  const description = document.getElementById("petDescription");
  const age = document.getElementById("petAge");
  const inoculations = document.getElementById("petInoculations");
  const diseases = document.getElementById("petDiseases");
  const parasites = document.getElementById("petParasites");
  const pet = pets[name];

  petsName.textContent = pet.name;
  description.textContent = pet.description;
  age.textContent = pet.age;
  type.textContent = `${pet.type} - ${pet.breed}`;
  inoculations.textContent = pet.inoculations.join(", ");
  diseases.textContent = pet.diseases.join(", ");
  parasites.textContent = pet.parasites.join(", ");
  img.src = pet.img;

  modalWindow.classList.add('active');
  body.classList.add('lock');
}


function closeModal() {
  modalWindow.classList.remove('active');
  body.classList.remove('lock');
}


const pets = {
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