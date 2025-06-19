//create an object to hole information about the sandwich
let sandwich = {
toasted: false,
//store the veggie and veggies as arrays inside the object
protein: [],
veggie: [],
// store information about the bread as an object within this object
bread: {
    kind: "", //an empty string
    glutenfree: false
}
}

//add an event listener to the "toasted" checkbox
//because this is a vey simple function, we don't need to store the element in a variable.
//we can also use an anonymous function (unnamed) which exists only as part of the event listener

document.querySelector('#toasted').addEventListener("change", function (){
//use a sorthand if statement to ask the question
//figure out whether the checkbox is checked or unchecked
sandwich.toasted =(this.checked) ? true: false;
});

//check the type of bread and add it to the object

//use a classic for loop to add event listeners to all the radio buttons

const breadTypes = document.querySelectorAll('input[name="bread"]');

for (let i=0; i<breadTypes.length; i++){
    breadTypes[i].addEventListener("change", addBread);
};

//the function for adding a bread type to the object

function addBread(){
    //when we're adding the text content, use trim() to remove any spaces from the beginning or the end of the text
    sandwich.bread.kind = this.parentNode.textContent.trim();
    //console.log(sandwich);
};

document.querySelector('#gluten').addEventListener("change", function (){
sandwich.bread.glutenfree =(this.checked) ? true: false;
//console.log(sandwich);
});

//add the protein to the array inside of the object
//users can check and uncheck options, so we have to able to add and remove from the array

const allProtein = document.querySelectorAll(".protein input");
//use a for ... of loop, which doesn't require you to know the length of the array

for (const eachProtein of allProtein){
    //console.log(eachProtein);
    //"eachProtein" will temporarily store each of the objects from the array allProtein
    eachProtein.addEventListener("change", addProtein);
}

function addProtein (){
    //check to see if the checkbox is checked or unchecked
    //get the value of the label and store it in a variable
    const proteinName = this.parentNode.textContent.trim();
    if(this.checked){
        //if checked, add this object to the protein array
        sandwich.protein.push(proteinName);
    }else{
        //if unchecked, remove this object from the array
        //first, we have to figure out if the think is in the array and if it is, what position it is at.
        const proteinPos = sandwich.protein.indexOf(proteinName);
        //if the object not in the array, indexOf will return -1
        if (proteinPos > -1){
            //if the position (index) is greater than -1, then the think is in the array
            //use splice to remove it - splice (position, number of things to remove)
            sandwich.protein.splice(proteinPos, 1);
            console.log(proteinPos);
        }
    };
    console.log(sandwich);
}

//veggie

const allVeggie = document.querySelectorAll(".veggies input");
for (const eachVeggie of allVeggie){
    eachVeggie.addEventListener("change", addVeggie);
}

function addVeggie (){
    const veggieName = this.parentNode.textContent.trim();
    if(this.checked){
        sandwich.veggie.push(veggieName);
    }else{
        const veggiePos = sandwich.veggie.indexOf(veggieName);
        if (veggiePos > -1){
            sandwich.veggie.splice(veggiePos, 1);
            console.log(veggiePos);
        }
    };
    console.log(sandwich);
}