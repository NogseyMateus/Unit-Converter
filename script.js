document.getElementById("type").addEventListener("change", function () {
  const unitSelct = document.getElementById("unit");
  const type = this.value; //this is refering to "type"
  if (type === "temp") {
    unitSelct.innerHTML = `   
      <option selected disabled>From/to</option>
      <option value="celsiusToFah">Celsius To Fahrenheit</option>
      <option value="fahToCelsius">Fahrenheit to Celsius</option>`;
    document.getElementById("unit").style.display = "block";
  } else {
    unitSelct.innerHTML = `   
      <option selected disabled>From/to</option>
      <option value="kmToMil">Kilometers To Miles</option>
      <option value="milToKm">Miles to Kilometers</option>`;
    document.getElementById("unit").style.display = "block";
  }
});
// Displaying the button after a unit has been chosen
document.getElementById("unit").addEventListener("change", function () {
  const button = document.querySelector("button");
  button.style.display = "block";
});

function convert() {
  const inputValue = document.getElementById("userInput").value;
  const unit = document.getElementById("unit").value;
  let result = 0;
  const resultElement = document.getElementById("resultElement");
  let resultString;

  if (unit === "milToKm") {
    result = (inputValue * 1.60934).toFixed(2);
    resultString = `${inputValue}Miles is ${result}Km`;
  } else if (unit === "kmToMil") {
    result = (inputValue / 1.60934).toFixed(2);
    resultString = `${inputValue}Km is ${result}Miles`;
  } else if (unit === "celsiusToFah") {
    result = (inputValue * (9 / 5) + 32).toFixed(2);
    resultString = `${inputValue}C° is ${result}F°`;
  } else if (unit === "fahToCelsius") {
    result = ((inputValue - 32) * (5 / 9)).toFixed(2);
    resultString = `${inputValue}F° is ${result}C°`;
  } //Add another operation Later

  resultElement.innerHTML = resultString;
}
