const display = document.getElementById("display");


function appendtoDisplay(input){
    
    display.value += input;

}

function clears(){

    display.value = "";

}

function clearOnedigit(){

     display.value = display.value.slice(0,-1);
    
}

function calculate(){

    display.value = eval(display.value);


}