function showthediv(var1) {
console.log(var1)
// Hide the one dive that is shown
document.getElementById("div1").style.display="none";
document.getElementById("div2").style.display="none";
document.getElementById("div3").style.display="none";
document.getElementById("div4").style.display="none";
// Hide the one div you sent to this function
document.getElementById(var1).style.display="block";
}

var list=['-','-','-','-','-','-','-','-','-']
var list=['1','2','3','4','5','6','7','8','9']
var count=1
	
function select(input) {

    if (count % 2 === 0) {
    document.getElementById(input.id).className = "used1"
    }
    else 
    {
    document.getElementById(input.id).className = "used2"
    }
    count+=1
	}
