
let options = {
    Countries : ["Afghanisthan","Albania","Algeria","American Samoa","Algeria","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan",
    "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei Darussalem","Bulgaria","Burkina Faso","Burundi",
    "Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos Island","Colombia","Comoros","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
    "Denmark","Djibouti","Dominica","Dominican republic","East Timor","Equador","Egypt","El Salvador","Equatorial Guinea","Eritria","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Ghana","Greece","Greenland",
    "Hongkong","Hungary","Iceland","India","Indonesia","Iraq","Iran","Ireland","Italy","Japan","Jordan","Jamaica","Kenya","Kuwait","Libya","Malaysia","Mexico","Morocco",
    "Nepal","Netherlands","Nigeria","Norway","Oman","Pakistan","Panama","Peru","Potugal","Qatar","Romania","Russia","Turkey","United States","United Kingdom","Vietnam","Yemen","Zambia"] ,

    Animals : ["Aardvark","Albatross","Alligator","Alpaca","Ant","Anteater","Antelope","Ape","Armadillo","Donkey","Baboon","Badger",
    "Barracuda","Bat","Bear","Beaver","Bee","Bison","Boar","Buffalo","Butterfly","Camel","Capybara","Caribou","Cassowary","Cat",
    "Caterpillar","Cattle","Chamois","Cheetah","Chicken","Chimpanzee","Chinchilla","Chough","Clam","Cobra","Cockroach","Cod",
    "Cormorant","Coyote","Crab","Crane","Crocodile","Crow","Curlew","Deer","Dinosaur","Dog","Dogfish","Dolphin","Dotterel","Dove",
    "Dragonfly","Duck","Dugong","Dunlin","Eagle","Echidna","Eel","Eland","Elephant","Elk","Emu","Falcon","Ferret","Finch",
    "Fish","Flamingo","Fly","Fox","Frog","Gaur","Gazelle","Gerbil","Giraffe","Gnat","Gnu","Goat","Goldfinch","Goldfish","Goose",
    "Gorilla","Goshawk","Grasshopper","Grouse","Guanaco","Gull","Hamster","Hare","Hawk","Hedgehog","Heron","Herring","Hippopotamus",
    "Hornet","Horse","Human","Hummingbird","Hyena","Ibex","Ibis","Jackal","Jaguar","Jay","Jellyfish","Kangaroo","Kingfisher",
    "Koala","Kookabura", "Kouprey", "Kudu", "Lapwing", "Lark", "Lemur", "Leopard", "Lion", "Llama", "Lobster", "Locust", "Loris",
    "Louse","Lyrebird","Magpie","Mallard","Manatee","Mandrill","Mantis","Marten","Meerkat","Mink","Mole","Mongoose","Monkey",
    "Moose","Mosquito","Mouse","Mule","Narwhal","Newt","Nightingale","Octopus","Okapi","Opossum","Oryx","Ostrich","Otter",
    "Owl","Oyster","Panther","Parrot","Partridge","Peafowl","Pelican","Penguin","Pheasant","Pig","Pigeon","Pony","Porcupine",
    "Porpoise","Quail","Quelea","Quetzal","Rabbit","Raccoon","Rail","Ram","Rat","Raven","Red deer","Red panda","Reindeer","Rhinoceros",
    "Rook","Salamander", "Salmon", "Sand Dollar", "Sandpiper", "Sardine", "Scorpion", "Seahorse", "Seal", "Shark", "Sheep",
    "Shrew","Skunk","Snail","Snake","Sparrow","Spider","Spoonbill","Squid","Squirrel","Starling","Stingray","Stinkbug","Stork",
    "Swallow","Swan","Tapir","Tarsier","Termite","Tiger","Toad","Trout","Turkey","Turtle","Viper","Vulture","Wallaby","Walrus",
    "Wasp","Weasel", "Whale", "Wildcat","Wolf","Wolverine","Wombat","Woodcock","Woodpecker","Worm","Wren","Yak","Zebra"]
};

const loginBtn = document.querySelector(".login-button"),
popupLogin = document.querySelector(".popup-loginpop"),
popup = document.querySelector(".popup"),
closebtn = document.querySelector(".popup-close1"),
figure = document.querySelector("svg"),
optionsContainer = document.querySelector(".options-container"),
closeIcon = document.querySelector(".popup-close2");

const displayOptions = () => {
    optionsContainer.innerHTML += `<h2>Please Select An Option</h2>`;

    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }

    optionsContainer.appendChild(buttonCon);
};

const initializer = () => {
    displayOptions();
}
window.onload = initializer;
loginBtn.addEventListener("click" , () => {

    popupLogin.classList.add("show");
});

closeIcon.addEventListener("click" , () => {
    
    popupLogin.classList.remove("show");
});

closebtn.addEventListener("click" , () => {
    
    popupLogin.classList.remove("show");
});

