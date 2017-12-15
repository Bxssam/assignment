 <?php
 
require_once('./db_connection.php');
$tim = strtotime(date("Y-m-d H:i:s"));
$a ="User";
$title = $_POST['name'];
$url = $_POST['url'];
$sql = "INSERT INTO news (list_by,list_descendants,list_id,list_score,list_time,list_title,list_url)
VALUES (? , 0, NULL, 0, ?, ?, ?)";
$stmt = $GLOBALS['conn']->prepare($sql);
$stmt->bind_param('siss',$a,$tim,$title, $url);
if ($stmt->execute()) { 
   echo "New record created successfully";
   header("Location: ./index.html"); /* Redirect browser */
    exit();
} else {
   echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
$stmt->close();
?> 