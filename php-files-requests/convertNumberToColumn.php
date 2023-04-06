<?php
header('Content-Type: application/json; charset=utf-8');
$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

if(isset($data->numberValue)){
    $numberValue = $data->numberValue;
    //Check if filed is positive number
    if(is_numeric($numberValue) && (int)$numberValue > 0){
        $result = columnNumberToString((int)$numberValue);
        echo json_encode(array('result' => $result));
    }else {
        echo json_encode(
            array(
                'error' => 'Please insert positive number',
            )
        );
    }
}else {
    echo json_encode(
        array(
            'error' => 'Request body error',
        )
    );
}

function columnNumberToString($columnNumber) {
    $columnName = '';
    while ($columnNumber > 0) {
        $modulo = ($columnNumber - 1) % 26;
        $columnName = chr(65 + $modulo) . $columnName;
        $columnNumber = (int)(($columnNumber - $modulo) / 26);
    }
    return $columnName;
}