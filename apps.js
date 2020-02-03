name = 'Tremain-Ajena Jones';
var name;
setName();
step11();
let myFruit = ['apples', 'pears', 'peaches'];
newSomething();


function setName() {
    var name = 'Covalence';
    console.log(name);
};

function step11(p1, p2) {
    console.log('some text');
    let avg = findAvg(2, 2);
    console.log('some text', avg);
    function findAvg(a, b) {
        console.log('some text');
        var answer = (a + b) / 2;
        return answer;
    };
};

let leastFav = myFruit[1];

function fruit() {
    console.log(myFruit[0]);
    let favFruit = myFruit[2];

    function printFavFruit() {
        console.log(favFruit);
    };
    printFavFruit();
    console.log(leastFav)
};

fruit();

function newSomething() {
    console.log('Hello ' + name);
};

let testFunction = function () {
    alert('Sorry, Charley!');
};

testFunction();