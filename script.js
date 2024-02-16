// const data = [{
//         img: "./Assets/images/webDeveloper.jpeg",
//         name: "Susan Smith",
//         profession: "WEB DEVELOPER",
//         text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
//     },
//     {
//         img: "./Assets/images/Webdisigner.jpeg",
//         name: "Anna Johnson",
//         profession: "WEB DESIGNER",
//         text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
//     },
//     {
//         img: "./Assets/images/intern.jpeg",
//         name: "Peter Jones",
//         profession: "INTERN",
//         text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
//     },
//     {
//         img: "./Assets/images/theboos.jpeg",
//         name: "Bill Anderson",
//         profession: "THE BOSS",
//         text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
//     }
// ]



// // here are the from html
// const DocCeo = document.querySelector(".main");
// let count = 0;

// for (let i = 0; i < data.length; i++) {
//     DocCeo.innerHTML +=
//         `        <div class ="InsCard">

//         <div class ="images"> 
//         <img src="${data[i].img}" alt="hel" id="img">
//         </div>

//        <div class = "textArea">
//         <h2>${data[i].name}</h2>
//         <h3>${data[i].profession}</h3>
//         <p>${data[i].text}</p>
//         </div>

//         </div>
//     `

// }




const data = [{
        img: "./Assets/images/webDeveloper.jpeg",
        name: "Susan Smith",
        profession: "WEB DEVELOPER",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        img: "./Assets/images/Webdisigner.jpeg",
        name: "Anna Johnson",
        profession: "WEB DESIGNER",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        img: "./Assets/images/intern.jpeg",
        name: "Peter Jones",
        profession: "INTERN",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        img: "./Assets/images/theboos.jpeg",
        name: "Bill Anderson",
        profession: "THE BOSS",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
];

const docCeo = document.querySelector(".main");
let count = 0;

for (let i = 0; i < data.length; i++) {
    docCeo.innerHTML +=
        `        <div class ="InsCard">

        <div class ="images"> 
        <img src="${data[i].img}" alt="hel" id="img">
        </div>

       <div class = "textArea">
        <h2>${data[i].name}</h2>
        <h3>${data[i].profession}</h3>
        <p>${data[i].text}</p>
        </div>
        <div class="myButns">
          <button id="pre" onclick="prevSlide()" class="Cbutn"> < </button>
          <button id="nex" onclick="nextSlide()" class="Cbutn"> > </button>
        </div>
    <button id="random" onclick="random()" class="Sbtn"> Surprise me<button>
        </div>`
}



const slides = document.querySelectorAll(".InsCard");
const counts = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`

    }
)
const slideImage = () => {

        slides.forEach(
            (slide) => {
                slide.style.transform = `translateX(-${counts * 100}%)`;
            })



    }
    // function showSlide(n) {
    //     count += n;
    //     if (count < 0) {
    //         count = data.length - 1;
    //     } else if (count >= data.length) {
    //         count = 0;
    //     }
    //     displaySlide();
    // }

// function displaySlide() {
//     const slides = document.querySelectorAll(".InsCard");
//     slides.forEach((slide, index) => {
//         if (index === count) {
//             slide.style.display = "block";
//         } else {
//             slide.style.display = "none";
//         }
//     });
// }

// document.addEventListener("DOMContentLoaded", () => {
//     displaySlide();
// });

// function prevSlide() {
//     showSlide(-1);
// }

// function nextSlide() {
//     showSlide(1);
// }