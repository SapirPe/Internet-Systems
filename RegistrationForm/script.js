// //variables
// const inputName = document.getElementById("name");
// const inputEmail = document.getElementById("email");
// const inputPassword = document.getElementById("password");
// const inputConfirmPassword = document.getElementById("confirm-password");
// const inputSelectGender = document.getElementById("gender");
// const btnSubmit = document.getElementById("submit");
// const messageBox = document.getElementById("message");
// let inputValueName;
// let inputValueEmail;
// let inputValuePassword;
// let inputValueConfirmPassword;
// let inputValueSelectGender;

// //functions:
// function validatePassword() {
//   if (inputValuePassword !== inputValueConfirmPassword) {
//     inputConfirmPassword.style.backgroundColor = "red";
//     alert("Passwords do not match");
//   } else {
//     messageBox.style.display = "content";
//     messageBox.innerText = `Welcome ${inputValueName}`;
//   }
// }
// //eventListeners
// inputName.addEventListener("input", (e) => {
//   inputValueName = e.target.value;
// });
// inputEmail.addEventListener("input", (e) => {
//   inputValueEmail = e.target.value;
// });
// inputPassword.addEventListener("input", (e) => {
//   inputValuePassword = e.target.value;
// });
// inputConfirmPassword.addEventListener("input", (e) => {
//   inputValueConfirmPassword = e.target.value;
// });
// inputSelectGender.addEventListener("change", () => {
//   inputValueSelectGender = inputSelectGender.value;
//   //   console.log(inputSelectGender.value);
// });
// btnSubmit.addEventListener("click", validatePassword);

// btnSubmit.addEventListener("mouseover", () => {
//   btnSubmit.style.backgroundColor = "#caeccb";
//   btnSubmit.style.cursor = "pointer";
// });
// btnSubmit.addEventListener("mouseleave", () => {
//   btnSubmit.style.backgroundColor = "";
// });

const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  //   const user = {
  //     name: e.target.element["name"].value,
  //     email: e.target.element["email"].value,
  //     password: e.target.element["password"].value,
  //     gender: e.target.element["gender"],
  //   };
  //   console.log(user);
});
