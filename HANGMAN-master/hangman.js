
const letterContainer = document.getElementsByClassName
("keyboard");
const optionsContainer = document.getElementsByClassName
("options-container");
const UserInputSection = document.getElementsByClassName
("word");
const loginContainer = document.getElementsByClassName
("popup loginpop");
const resultPopup = document.getElementsByClassName
("popup");
const newGameBtn = document.getElementsByClassName
("newgame");
const closebtn = document.getElementsByClassName
("popup-close");
const figure = document.getElementsByClassName
("figure-container");
const resultText = document.getElementById
("result-text");


//options

let options = {
    Countries : ["Afghanisthan","Albania","Algeria","American Samoa","Algeria","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan",
    "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei Darussalem","Bulgaria","Burkina Faso","Burundi",
    "Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos Island","Colombia","Comoros","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
    "Denmark","Djibouti","Dominica","Dominican republic","East Timor","Equador","Egypt","El Salvador","Equatorial Guinea","Eritria","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Ghana","Greece","Greenland",
    "Hongkong","Hungary","Iceland","India","Indonesia","Iraq","Iran","Ireland","Italy","Japan","Jordan","Jamaica","Kenya","Kuwait","Libya","Malaysia","Mexico","Morocco",
    "Nepal","Netherlands","Nigeria","Norway","Oman","Pakistan","Panama","Peru","Potugal","Qatar","Romania","Russia","Turkey","United States","United Kingdom","Vietnam","Yemen","Zambia"] ,

    Animals : ["Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"]
};

//count:
let winCount = 0;
let count = 0;
let chosenWord = "";

//display:
const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
    let buttonCon = document.createElement("div");
    for(let value in options) {
        buttonCon.innerHTML += `<button class = "options" onclick = "generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
};

//clock all buttons:
const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");
    
    //disable:
    letterButtons.forEach ((keyboard) => {
        keyboard.disabled.true;
    });
    resultPopup.classList.remove("hide");
};

//Word Generator:
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll
    (".options");
    // if option value matches the button innertext then highlight the button
    optionsButtons.forEach((button) => {
        if(button.innerText.toLowerCase() == optionValue){
            button.classList.add("active");
        }
        button.disabled = true;
    });
    
    
    let optionArray = options[optionValue];
    //chose random word:
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();
    
    let displayItem = chosenWord.replace(/./g, '<span c;ass="dashes">_</span>');
    
    UserInputSection.innerHTML = displayItem;
};


//initial function when user refreshes the page or presses retry or newgame

const initializer = () => {
    winCount = 0;
    count = 0;
    
    UserInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    resultPopup.classList.add("hide");
    letterContainer.innerHTML = "";
    
    //letters:
    for(let i = document.getElementById("1"); i <= document.getElementById("26"); i++){
        keyboard.addEventListener("click". () => {
            let array = chosenWord.split("");
            let dashes = document.getElementsByClassName("dashes");
            
            
            if(array.includes(keyboard.innerText)) {
                array.forEach((i, index) => {
                    if(i == keyboard.innertext) {
                        dashes[index].innerText = i;
                        winCount += 1;
                        if(winCount == array.length) {
                            resultText.innerHTML = `<h2 class='win-msg'>YOU WIN!!</h2><p>The Wird was <span>${chosenWord}</span></p>`;
                            blocker();
                        }
                    
                    }
                });
            }
            else{
                count += 1;
                
                drawMan(count);
                
                if (count==10){
                    resultText.innerHTML = `<h2 class='lose-msg'>YOU LOSE!!</h2><p>The Word was <span>${chosenWord}</span></p>`;
                    blocker();
                }
            }
            button.disabled = true;
        });
        letterContainer.append(keyboard);
    }
    
    displayOptions();
    
    let{ initialDrawing } = figurecreator();
    
    initialDrawing();
};
 const figureCreator = () => {
     let initialDrawing = () => {
         
     }
     let base = document.getElementById("try1");
     let rodv = document.getElementById("try2");
     let rodh = document.getElementById("try3");
     let rope = document.getElementById("try4");
     let head = document.getElementById("try5");
     let body = document.getElementById("try6");
     let arm1 = document.getElementById("try7");
     let arm2 = document.getElementById("try8");
     let leg1 = document.getElementById("try9");
     let leg2 = document.getElementById("try10");
     return{ base,rodv,rodh,rope,head,body,arm1,arm2,leg1,leg2};
 };
const drawMan = (count) => {
    let { base,rodv,rodh,rope,head,body,arm1,arm2,leg1,leg2} = figureCreator();
    switch(count){
        case 1:
            base();
            break;
        case 2:
            rodv();
            break;
        case 3:
            rodh();
            break;
        case 4:
            rope();
            break;
        case 5:
            head();
            break;
        case 6:
            body();
            break;
        case 7:
            arm1();
            break;
        case 8:
            arm2();
            break;
        case 9:
            leg1();
            break;
        case 10:
            leg2();
            break;
        default:
            break;
    }
};

//reload or New game:
newGameBtn.addEvenlistener("click",initializer);
window.onload = initializer;








