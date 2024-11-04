function showthediv(var1) {
console.log(var1)
// Hide the one dive that is shown
document.getElementsByClassName("show")[0].className="hide";
// Hide the one div you sent to this function
document.getElementById(var1).className="show";
}
