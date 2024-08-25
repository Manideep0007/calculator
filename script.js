
const show=document.getElementById("display");

function appendToDisplay(input){
    show.value += input;

}
function cleardisplay(){
    show.value="";
}
function calculate(){
    show.value=eval(show.value);
}