console.log("Witam witam, i o zdrowie pytam.");

let formElement = document.querySelector(".js-form");
let ammountElement = document.querySelector(".js-ammount");
let currencyElement = document.querySelector(".js-currency");
let formResult = document.querySelector(".js-result");
let rateEUR = 4.68078;
let rateUSD = 4.44976;
let rateJPY = 0.03302;
let rateQAR = 1.21497;
let rateGBP = 5.4537;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let ammount = ammountElement.value;
  let currency = currencyElement.value;

  let result;

  switch (currency) {
    case "EUR":
      result = ammount / rateEUR;
      break;
    case "USD":
      result = ammount / rateUSD;
      break;
    case "JPY":
      result = ammount / rateJPY;
      break;
    case "QAR":
      result = ammount / rateQAR;
      break;
    case "GBP":
      result = ammount / rateGBP;
  }

  formResult.innerText = `${ammount} PLN = ${result.toFixed(2)} ${currency}`;
});
