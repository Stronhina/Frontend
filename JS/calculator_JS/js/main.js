//Forms elements
const squareInput = document.getElementById('square-input');
const squareRange = document.getElementById('square-range');

//Radiobuttons
const typeReconstructionElements = document.querySelectorAll('input[name="type"]');
const typeBuildingElements = document.querySelectorAll('input[name="building"');
const roomsElements = document.querySelectorAll('input[name="rooms"');

//Checkboxes
const ceilingElement = document.querySelector('input[name="ceiling"]');
const wallsElement = document.querySelector('input[name="walls"]');
const floorElement = document.querySelector('input[name="floor"]');

//Base price and total price output element
const basePrice = 6000;
const totalPriceElement = document.getElementById('total-price');

const inputs = document.querySelectorAll('input');

//Connection square range with square input
squareRange.addEventListener('input', function(){
    squareInput.value = squareRange.value;
});
//Connection square input with square range
squareInput.addEventListener('input', function(){
    squareRange.value = squareInput.value;
});

//Iterate over all input elements, if one of this element was changed, start total price recalculation
// inputs.forEach(function(item){
//     item.addEventListener('input', calculate);
// });

//Arrow function
inputs.forEach((item) => item.addEventListener('input', calculate));

calculate();

function calculate(){
//Flat square
const square = parseInt(squareInput.value);

//Reconstruction type
let typeReconstructionCost;
typeReconstructionElements.forEach(function(item){
    if (item.checked){
        typeReconstructionCost = parseFloat(item.value);
    }
});

//Building type
let typeBuildingCost;
typeBuildingElements.forEach(function(item){
    if (item.checked){
    typeBuildingCost = parseFloat(item.value);
    } 
});

//Rooms amount
let roomsCost;
roomsElements.forEach(function(item){
    if (item.checked){
        roomsCost = parseFloat(item.value);
    }
});

//Add option
const ceilingCost = ceilingElement.checked ? parseFloat(ceilingElement.value) : 1;
const wallsCost = wallsElement.checked ? parseFloat(wallsElement.value) : 1;
const floorCost = floorElement.checked ? parseFloat(floorElement.value) : 1;

//Let's count total price
const totalPrice = basePrice * square * typeReconstructionCost * typeBuildingCost * roomsCost * ceilingCost * wallsCost * floorCost;

const formatter = new Intl.NumberFormat('ru');

totalPriceElement.innerText = formatter.format(totalPrice);

};