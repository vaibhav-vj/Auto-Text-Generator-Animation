const containerE = document.querySelector(".container"); // Selected that container to work on 
const careers = ["Coder", "Learner", "Web Developer", "student"]; // create a array to assign the options
let careers_index = 0; // to change the array positions like from youtuber to freelancer 
let charcter_index = 0; // to chnage the charcters like in youtuber y after o after u and so on...
uptdate(); // called functions so that start working 

function uptdate() {  // creating a functions for loop the proceess
    charcter_index++; // increased charcter every time so its create next charcter 
    containerE.innerHTML = `<h1>I am  ${careers[careers_index].slice(0,1) === 's'?'an':'a'} ${careers[careers_index].slice(0, charcter_index)} </h1>`;
 // if careers in that postions that have a I that is then its fix Grammer is that change a to an
    if (charcter_index === careers[careers_index].length) { // if the first postition reach end of the word its stops 
        careers_index++; // its increase position so that it change the postition from array[0] to next and so on
        charcter_index = 0; // increase the charcter in that array
        if (careers_index === careers.length) { //when array end this stop 
            careers_index = 0; // when array end this stop and reset from position 1
        }
    }
    setTimeout(uptdate, 200); // this time out function and work to call function after every time miliseconds that given 
}
