<?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/styles.css">
    <title>IRIS</title>
</head>
<body>
    <div class="container">
        <div>
            <label>Javascript Section Column Title ~ Number</label>
        </div>
        <div class="JsContainer">
            <div class="jsDiv">
                <label for="columnTitle">Introduce a string containing only letters</label>
                <input onkeyup="convertColumnToNumber()" style="text-transform: uppercase;" type="text" id="columnTitle" placeholder="Type ...">
                <span class="error" id="errorColumnToNumber"></span>
            </div>
            
            <div class="jsDiv">
                <label for="columnTitle">Result</label>
                <input disabled type="text" id="resultColumnToNumber">
            </div>
        </div>
        <div class="JsContainer">
            <div class="jsDiv">
                <label for="numberInput">Introduce a string containing only numbers</label>
                <input onkeyup="convertNumberToColumn()" type="text" id="numberInput" placeholder="Type ...">
                <span class="error" id="errorNumberToColumn"></span>
            </div>
            
            <div class="jsDiv">
                <label for="columnTitle">Result</label>
                <input disabled type="text" id="resultNumberToColumn">
            </div>
        </div>
    </div>

    <div class="container">
        <div>
            <label>PHP Section Column Title ~ Number</label>
        </div>
        <form onsubmit="sendRequestColumnTitleToNumber(event)" class="JsContainer">
            <div class="jsDiv">
                <label for="phpColumnTitle">Introduce a string containing only letters</label>
                <input id="phpColumnTitle" style="text-transform: uppercase;" type="text">
                <span class="error" id="errorColumnToNumberPhp"></span>
            </div>
            
            <div class="jsDiv">
                <label for="columnTitle">Result</label>
                <input disabled type="text" id="resultColumnToNumberPHP">
            </div>
            <div class="jsDiv">
                <button type="submit" >Send Request</button>
            </div>
        </form>
        <form onsubmit="sendRequestNumberToColumnTitle(event)" class="JsContainer">
            <div class="jsDiv">
                <label for="phpNumberInput">Introduce a string containing only numbers</label>
                <input id="phpNumberInput" type="text">
                <span class="error" id="errorNumberToColumnPhp"></span>
            </div>
            
            <div class="jsDiv">
                <label for="resultNumberToColumnPhp">Result</label>
                <input disabled type="text" id="resultNumberToColumnPhp">
            </div>
            <div class="jsDiv">
                <button type="submit" >Send Request</button>
            </div>
        </form>
        
    </div>
    
</body>
<script src="./resources/utils.js"></script>
<script src="./resources/convertColumnToNumber.js"></script>
<script src="./resources/convertNumberToColumn.js"></script>
<script src="./resources/sendRequests.js"></script>
</html>