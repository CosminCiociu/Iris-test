const convertNumberToColumn = () => {
  inputValue = document.getElementById("numberInput").value;
  resultField = document.getElementById("resultNumberToColumn");
  if (inputValue.length === 0) {
    resultField.value = "";
    displayError("errorNumberToColumn", false);
    return;
  }
  //Check Only Letters Input
  if (handleInputOnlyNumbers(inputValue)) {
    //Hide Error
    displayError("errorNumberToColumn", false);

    // Convert string Excel to Number
    result = numberToExcelColumn(inputValue);
    // display result
    resultField.value = result;
  } else {
    resultField.value = "";
    displayError(
      "errorNumberToColumn",
      true,
      "Introduce only positive numbers"
    );
  }
};

const numberToExcelColumn = (number) => {
  let result = "";
  while (number > 0) {
    let remainder = (number - 1) % 26;
    result = String.fromCharCode(65 + remainder) + result;
    number = Math.floor((number - 1) / 26);
  }
  return result;
};

const handleInputOnlyNumbers = (inputValue) => {
  if (matchExpression(inputValue).onlyNumbers === true) {
    return true;
  } else {
    return false;
  }
};
