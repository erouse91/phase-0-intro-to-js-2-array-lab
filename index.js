// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat() {
    cats.push("Ralph")
};

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyPrependCat() {
    cats.unshift("Bob")
};

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyRemoveLastCat() {
    cats.pop()
};

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyRemoveFirstCat() {
    cats.shift()
};

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function appendCat(name) {
 const copyOfCats = [
    ...cats.slice(),
    "Broom",
  ];
};