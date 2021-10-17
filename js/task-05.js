const name = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
}

name.input.addEventListener("input", inputChange);

function inputChange(nameUser) {
  name.output.textContent = nameUser.currentTarget.value;
  if (name.input.value.trim() === "".trim()) {
    name.output.textContent = "Anonymous";

   }
  console.log(nameUser.currentTarget.value);
 }
