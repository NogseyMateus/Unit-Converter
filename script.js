function convert() {
  const inputValue = document.getElementById("userInput").value; //getting the imput value
  const unit = document.getElementById("unit").value; // getting the unit value
  let milesToKm = unit === "milesToKm";
  let result = 0;
  const resultElement = document.getElementById("resultElement");

  if (milesToKm) {
    result = inputValue * 1.60934; // conversion from miles to KM
  } else {
    result = inputValue / 1.60934; //Convesion from Km to miles
  }

  const resultString = `${inputValue} miles are ${result} Km`;
  resultElement.innerHTML = resultString;
  console.log(resultString);
}  