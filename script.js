function ChangeTheme(){
 var f1 = document.getElementById("frmRegister");
 var theme = document.getElementById("theme");
 var button = document.querySelector("button");
 var moon = document.getElementById("Moon");
 var sun = document.getElementById("Sun");
 if(theme.checked){
    f1.className = "bg-dark text-white border border-2 w-25 m-2 p-2";
    button.className = "btn btn-light w-100"
    moon.style.visibility = "hidden";
 }else{
    f1.className = "bg-light text-dark border border-2 w-25 m-2 p-2";
    button.className = "btn btn-dark w-100";
    moon.style.visibility = "visible";
 }
}
