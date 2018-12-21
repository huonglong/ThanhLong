<?php
	include 'DBConfig.php';
	$conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	if ($conn->connect_error) { 
		die("Connection failed: " . $conn->connect_error);
	} 
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
 
	$tk = $obj["username"];
	$pas = $obj["password"];

	$sql = "SELECT * FROM `Users` WHERE `username` = '$tk'";
	
	$result = $conn->query($sql);
	if ($result->num_rows >0) { 
	 	echo json_encode('thatbai');		
	} else {
		$sql_query= "INSERT INTO `Users`(`username`, `password`) VALUES ('$tk','$pas') ";
	 	if(mysqli_query($conn,$sql_query)){
			echo json_encode('successfully');
		}
	} 
	mysqli_close($conn);
?>