<?php
header('Content-Type: application/json; charset=utf-8');
$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

if(isset($data->columnTitle)){
    $columnTitle = $data->columnTitle;
    //Check if is only letters
    if(ctype_alpha($columnTitle)){
        $result = excelColumnToNumber(strtoupper($columnTitle));
        echo json_encode(array('result' => $result));
    }else {
        echo json_encode(
            array(
                'error' => 'Please insert only letters',
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

function excelColumnToNumber($column) {
    $result = 0;
    $length = strlen($column);
    for ($i = 0; $i < $length; $i++) {
      $result *= 26;
      $result += ord($column[$i]) - ord('A') + 1;
    }
    return $result;
}