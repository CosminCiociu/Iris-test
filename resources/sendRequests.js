const sendRequestColumnTitleToNumber = (event) => {
  event.preventDefault();
  inputValue = document.getElementById("phpColumnTitle").value;
  postData("./php-files-requests/convertColumnToNumber.php", {
    columnTitle: inputValue,
  }).then((data) => {
    if (data.result) {
      populateFieldById("resultColumnToNumberPHP", data.result);
      populateErrorById("errorColumnToNumberPhp", "", false);
    }
    if (data.error) {
      populateFieldById("resultColumnToNumberPHP", "");
      populateErrorById("errorColumnToNumberPhp", data.error, true);
    }
  });
};

const sendRequestNumberToColumnTitle = (event) => {
  event.preventDefault();
  inputValue = document.getElementById("phpNumberInput").value;
  postData("./php-files-requests/convertNumberToColumn.php", {
    numberValue: inputValue,
  }).then((data) => {
    console.log(data);
    if (data.result) {
      populateFieldById("resultNumberToColumnPhp", data.result);
      populateErrorById("errorNumberToColumnPhp", "", false);
    }
    if (data.error) {
      populateFieldById("resultNumberToColumnPhp", "");
      populateErrorById("errorNumberToColumnPhp", data.error, true);
    }
  });
};
