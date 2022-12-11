{
  const exchangedAmount = (amount, currency) => {
    const rateEUR = 4.68078;
    const rateUSD = 4.44976;
    const rateJPY = 0.03302;
    const rateQAR = 1.21497;
    const rateGBP = 5.4537;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "USD":
        return amount / rateUSD;

      case "JPY":
        return amount / rateJPY;

      case "QAR":
        return amount / rateQAR;

      case "GBP":
        return amount / rateGBP;
    }
  };

  const updateResult = (amount, result, currency) => {
    const formResult = document.querySelector(".js-result");
    formResult.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
  };

  const onEventSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = amountElement.value;
    const currency = currencyElement.value;

    const result = exchangedAmount(amount, currency);

    updateResult(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onEventSubmit);
  };

  init();
}
