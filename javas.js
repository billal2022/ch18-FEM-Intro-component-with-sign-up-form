const form= document.getElementById("form")
const Fname= document.getElementById("first-name")
const Lname= document.getElementById("last-name")
const password= document.getElementById("password")
const email= document.getElementById("email")

form.addEventListener(("submit"),(e)=>{
e.preventDefault();

ValidateInput();
})
//error function
const seterror=(element,message)=>{

const inputElement = element.parentElement;
const errorDisplay = inputElement.querySelector(".error")
 errorDisplay.innerText=message;
 element.style.border="2px solid red"
 element.style.outlineColor="red"
}
//succes function
const setSUCCES= element=>{

const inputElement = element.parentElement;
const errorDisplay = inputElement.querySelector(".error")
 errorDisplay.innerText="";
 element.style.border="1px solid black"
 element.style.outlineColor="black"
}
 // chacking if input empty function
const ValidateInput = ()=>{
const fnamevalue = Fname.value.trim();
const lnamevalue = Lname.value.trim();
const passwordvalue = password.value.trim();
const emailvalue = email.value.trim();

var valido= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[hotmail||yahoo||outlook||gmail||icloud]+([com]+)*$/;
// first name    
if (fnamevalue==="") {
    seterror(Fname,"please enter  first name")
}else{
    setSUCCES(Fname)
}
//last name
if (lnamevalue==="") {
    seterror(Lname,"please enter last name")
}else{
    setSUCCES(Lname)
}
//password
if (passwordvalue==="") {
    seterror(password,"please enter  password")
}else if (passwordvalue.length<8) {
    seterror(password,"please enter more than 8 charecters of password")
}else{
    setSUCCES(password)
}
//email
if (emailvalue==="") {
    seterror(email,"please enter email ")
} else if (email.value.match(valido)) {
    seterror(email,"please eneter valid email ")
} else{
    setSUCCES(email)
}

}

