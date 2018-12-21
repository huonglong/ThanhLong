<?php
 include 'DBConfig.php';

$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName); 
if ($conn->connect_error) { 
 die("Connection failed: " . $conn->connect_error);
} 
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);
 
  $user = $obj["username"];
  $pass = $obj["password"];

 $Sql_Query ="SELECT * FROM `Users` WHERE `username` ='$user' AND `password`='$pass'";
 
 $result = $conn->query($Sql_Query);
 
if($result->num_rows >0) { 
 
 echo json_encode('successfully');
 
} else {
	echo json_encode('wrong');
}

mysqli_close($conn);
 
?>