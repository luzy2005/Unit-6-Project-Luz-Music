// Declare your genre arrays here
let IndieRock = [
    "https://niceplaymusic.jp/wp-content/uploads/2022/11/cigarettes.jpeg ", "https://media.zenfs.com/en/globenewswire.com/daac4cb047ff07b46b899046d5309ae6",

    "https://cdns-images.dzcdn.net/images/cover/e674e4d5aff8f3e725e78c0d8c00aca3/264x264.jpg"
];

let Pop = ["https://preview.redd.it/jgtdf7np75u71.jpg?auto=webp&s=979d5ce4efc7a98abd58e8e69ee8f2733b371346", "https://m.media-amazon.com/images/M/MV5BMjdiYTYyMDAtNGNlYS00ODA0LTk3M2MtOTlmYzkyZmM4M2VjXkEyXkFqcGdeQXVyMTA1NTIxMzA3._V1_FMjpg_UX1000_.jpg", "https://i.scdn.co/image/ab67616d0000b27313ea55103bb98c6f5b0869a2"];

let Rock = ["https://thisis-images.scdn.co/37i9dQZF1DZ06evO3XXJZe-default.jpg", "https://static.wikia.nocookie.net/albumcovers/images/0/08/Beatles-the-the-beatles-1192706.jpg/revision/latest?cb=20111007201134", "https://i5.walmartimages.com/asr/89f6ca50-9e6b-4dde-9f2e-d14b1e93d2e3.4dc5560b76223021dfd002459e04f5fa.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"];

// Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".music");
let counterDisplayElem = document.querySelector(".counter-display");
let counter = 0;


// Submit Button 
let submitButton = document.querySelector(".Sb1");

function updateCounter() {
    counter++;
    counterDisplayElem.innerHTML = counter;
}


function updatePhoto(url) {
    let img = "<img src=" + url + ">";
    result.insertAdjacentHTML("beforeend", img);
}

submitButton.onclick = function() {

    let sbInput = document.querySelector(".Ip1").value.toLowerCase();

    console.log(sbInput);

    if (sbInput === "indie rock") {
        console.log(IndieRock.length);
        for (let Indierock of IndieRock) {
            console.log(Indierock);
            updatePhoto(Indierock);
        }
        updateCounter();

    } else if (sbInput === "pop") {
        console.log(Pop.length);
        for (let Popgenre of Pop) {
            console.log(Popgenre);
            updatePhoto(Popgenre);

        }
        updateCounter();


    } else if (sbInput === "rock") {
        console.log(Rock.length);
        for (let Rockgenre of Rock) {
            console.log(Rockgenre);
            updatePhoto(Rockgenre);

        }
        updateCounter();


    }

};


let suggestButton = document.querySelector(".Sb2");
suggestButton.onclick = function() {
    let phInput = document.querySelector(".ip2").value;
    IndieRock.push(phInput);
    Pop.push(phInput);
    Rock.push(phInput);
    let img = "<img src=" + phInput + ">";
    result.insertAdjacentHTML("beforebegin", "<p>" + "Thanks for your suggestion!" + "</p>");
};