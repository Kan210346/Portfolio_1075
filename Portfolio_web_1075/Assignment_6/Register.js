window.onload = pageLoad;
function pageLoad(){
    var regis = document.getElementById("myForm");
	regis.onsubmit = checkRegis
}

function checkRegis() {
    var pass =document.forms["myForm"]["password"].value
    var repass =document.forms["myForm"]["repassword"].value
    if(pass !== repass){
        alert("not same pass");
        document.getElementById("errormsg").innerHTML = "**wrong password**";
        return false;
    }
    else{
        alert("regis success");
    }

}