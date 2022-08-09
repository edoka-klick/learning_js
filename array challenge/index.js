
const dogs = [
    { 
        weight: 22, 
        curFood: 250,
        owners: ['Alice', 'Bob']
    },
    { 
        weight: 8, 
        curFood: 200,
        owners: ['Matilda']
    },
    { 
        weight: 13, 
        curFood: 275,
        owners: ['Sarah', 'John']
    },
    { 
        weight: 32, 
        curFood: 340,
        owners: ['Michael']
    }
];

function eatingTooMuch(dog){
    return (dog.curFood > dog.recommendedFood * 0.9) ? true : false;
}

function eatingLess(dog){
    return (dog.curFood < dog.recommendedFood * 1.1) ? true : false;
}

function displayMess(el){
    if(eatingTooMuch(el)){
        console.log("The dog is eating much than normal");
    } else if(eatingLess(el)){
        console.log("The dog is eating less than normal");
    } else {
        console.log("The dog is eating in normal parameters");
    }
}

///1. Add a new property to each object for the recommended food of each dog
function calcRecommendedFood(){
    dogs.map(el => {
        el.recommendedFood = Math.trunc(el.weight ** 0.75 * 28);
    });
}

calcRecommendedFood();
console.log(dogs);


///2. Find whether Sarah's dog is eating too much
function displayDogsEatingHabit(own){
    let indexOfDog = -1;
    dogs.map((el, i) => {
        if(el.owners.includes(own)){
            indexOfDog = i;
        }        
    })
    if(indexOfDog < 0){
        console.log("There isn't an owner with this name" + own);
    } else {
        displayMess(dogs[indexOfDog]);
    }
}

displayDogsEatingHabit("Sarah");

///3. create an array containing all owners of dogs who eat too much

let ownersEatTooMuch = new Array(), ownersEatTooLittle = new Array();

dogs.map((el) => {
    if(eatingTooMuch(el)){
        ownersEatTooMuch.push(el.owners);
    } else if(eatingLess(el)){
        ownersEatTooLittle.push(el.owners);
    }
});

console.log(ownersEatTooLittle.flat(), ownersEatTooMuch.flat());

//4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat  too little!"


console.log(ownersEatTooMuch.join(" and ") + " dogs eat too much");
console.log(ownersEatTooLittle.join(" and ") + " dogs eat too little");

///5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)

console.log(dogs.some(el => el.curFood === el.recommendedFood ? true : false));

///6. Log to the console whether there is any dog eating an okay amount of food just true or false

console.log(dogs.some(el => eatingTooMuch(el) || eatingLess(el)));

///7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.

let eatingOkay = dogs.filter((dog) => eatingTooMuch(dog) && eatingLess(dog));

console.log(eatingOkay[0]);

///8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects �)

const dogsCopy = dogs;

dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);


