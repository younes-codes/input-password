//VARIABLES
const passwordBtn = document.getElementById("password-btn");
const inputPassword = document.getElementById("password");
const imgBtn = document.getElementById("img-btn");
let isPasswordHidden = true;

//FUNCTION ADD & REMOVE ATTRITBUTE
//FUNCTION ADD
const addAttributePassword = () => {
  inputPassword.setAttribute("type", "password");
  isPasswordHidden = !isPasswordHidden;
};

//FUNCTION REMOVE
const removeAttributePassword = () => {
  inputPassword.setAttribute("type", "text");
  isPasswordHidden = !isPasswordHidden;
};

//FUNCTION ADD & REMOVE EYE CLOSED IMG
//FUNCTION ADD
const setEyeOpenImg = () => {
  imgBtn.setAttribute("src", "./assets/eye-open.png");
  imgBtn.setAttribute(
    "alt",
    "oeil ouvert signifiant que le mot de passe n'est pas crypté"
  );
};

//FUNCTION REMOVE
const removeEyeOpenImg = () => {
  imgBtn.setAttribute("src", "./assets/eye-closed.png");
  imgBtn.setAttribute(
    "alt",
    "oeil fermé signifiant que le mot de passe est crypté"
  );
};

//CLICK EVENT LISTENER ON BTN PASSWORD
passwordBtn.onclick = (event) => {
  event.preventDefault();
  inputPassword.value !== ""
    ? isPasswordHidden
      ? removeAttributePassword()
      : addAttributePassword()
    : "";

  /* 
  IF PASSWORD IS HIDDEN (TRUE) 
  OR PASSWORD IS EMPTY
  THEN SET CLOSED EYE IMG 
  ELSE SET OPEN EYE IMG 
  */
  isPasswordHidden || inputPassword.value === ""
    ? removeEyeOpenImg()
    : setEyeOpenImg();
};

//ONKEYUP EVENT LISTENER ON INPUT PASSWORD
inputPassword.onkeyup = () => {
  //console.log(inputPassword.value === "");
  //IF PASSWORD IS EMPTY, THEN addAttributePassword()
  inputPassword.value === ""
    ? (addAttributePassword(), removeEyeOpenImg())
    : "";
};
