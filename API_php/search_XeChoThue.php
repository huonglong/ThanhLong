<?php
 include 'DBConfig.php';

$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName); 
if ($conn->connect_error) { 
 die("Connection failed: " . $conn->connect_error);
} 
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);
  $SoCMND = $obj["SoCMND"];
  $BienSo = $obj["BienSo"];

 $sql ="SELECT * FROM `XeThue` WHERE SoCMND = '$SoCMND' OR BienSo = '$BienSo'";
 
 $result = $conn->query($sql);
 
if($result->num_rows >0) { 
	while($row[] = $result->fetch_assoc()) { 
		$tempt = $row; 
		$json = json_encode($tempt);
	}
	echo $json;
} else {
	echo json_encode('wrong');
}
$conn->close();
?>