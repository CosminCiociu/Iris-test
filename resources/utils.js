const matchExpression = (str) => {
  var rgularExp = {
    contains_alphaNumeric: /^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/,
    containsNumber: /\d+/,
    containsAlphabet: /[a-zA-Z]/,

    onlyLetters: /^[A-Za-z]+$/,
    onlyNumbers: /^[0-9]+$/,
    onlyMixOfAlphaNumeric: /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/,
  };

  var expMatch = {};
  expMatch.containsNumber = rgularExp.containsNumber.test(str);
  expMatch.containsAlphabet = rgularExp.containsAlphabet.test(str);
  expMatch.alphaNumeric = rgularExp.contains_alphaNumeric.test(str);

  expMatch.onlyNumbers = rgularExp.onlyNumbers.test(str);
  expMatch.onlyLetters = rgularExp.onlyLetters.test(str);
  expMatch.mixOfAlphaNumeric = rgularExp.onlyMixOfAlphaNumeric.test(str);

  return expMatch;
};

const displayError = (id, bool, message) => {
  errorField = document.getElementById(id);
  if (bool) {
    errorField.style.display = "block";
    errorField.textContent = message;
  } else {
    errorField.style.display = "none";
  }
};

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const populateFieldById = (id, value) => {
  let field = document.getElementById(id);
  field.value = value;
};

const populateErrorById = (id, value, show) => {
  let field = document.getElementById(id);
  field.innerText = value;
  if (show) {
    field.style.display = "block";
  } else {
    field.style.display = "none";
  }
};
