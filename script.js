function showthediv(var1) {
console.log(var1)
// Hide the one dive that is shown
document.getElementById("instructor").style.display="none";
document.getElementById("contact").style.display="none";
document.getElementById("quotes").style.display="none";
document.getElementById("classes").style.display="none";
document.getElementById("gallery").style.display="none";
// Hide the one div you sent to this function
document.getElementById(var1).style.display="block";
}
