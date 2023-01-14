let h;
let b;
let rresult;
let answer;
function result() {
    h=document.getElementById("height").value;
    b=document.getElementById("base").value;
    rresult=1/2 * b * h;
    answer=document.getElementsByClassName("result");
    // answer.innerText=rresult
}