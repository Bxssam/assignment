<?php
require_once('./db_connection.php');
$sql="SELECT * FROM news";
$result = mysqli_query($GLOBALS['conn'],$sql);
$numResults = mysqli_num_rows($result);
$counter =0;
while($row = mysqli_fetch_assoc($result)) {
    if (++$counter == $numResults) {
    echo '{"by":"'.$row['list_by'].'",';
    echo '"descendants":"'.$row['list_descendants'].'",';
    echo '"id":"'.$row['list_id'].'",';
    echo '"score":"'.$row['list_score'].'",';
    echo '"time":"'.$row['list_time'].'",';
    echo '"title":"'.$row['list_title'].'",';
    echo '"url":"'.$row['list_url'].'"}';
    } else {
    echo '{"by":"'.$row['list_by'].'",';
    echo '"descendants":"'.$row['list_descendants'].'",';
    echo '"id":"'.$row['list_id'].'",';
    echo '"score":"'.$row['list_score'].'",';
    echo '"time":"'.$row['list_time'].'",';
    echo '"title":"'.$row['list_title'].'",';
    echo '"url":"'.$row['list_url'].'"}';
    echo '~';
    }
    
}
$result->close();
?>