const convertColumnToNumber = () => {
  inputValue = document.getElementById("columnTitle").value;
  resultField = document.getElementById("resultColumnToNumber");

  if (inputValue.length === 0) {
    resultField.value = "";
    displayError("errorColumnToNumber", false);
    return;
  }

  //Check Only Letters Input
  if (handleInputOnlyLetters(inputValue)) {
    //Hide Error
    displayError("errorColumnToNumber", false);

    // Convert string Excel to Number
    result = excelColumnToNumber(inputValue.toUpperCase());

    // display result
    resultField.value = result;
  } else {
    resultField.value = "";
    displayError("errorColumnToNumber", true, "Please insert only letters");
  }
};

const excelColumnToNumber = (columnName) => {
  let result = 0;
  for (let i = 0; i < columnName.length; i++) {
    result *= 26;
    result += columnName.charCodeAt(i) - "A".charCodeAt(0) + 1;
  }
  return result;
};

const handleInputOnlyLetters = (inputValue) => {
  if (matchExpression(inputValue).onlyLetters === true) {
    return true;
  } else {
    return false;
  }
};
