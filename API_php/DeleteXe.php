<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 if ($conn->connect_error) { 
 die("Connection failed: " . $conn->connect_error);
} 
 $json = file_get_contents('php://input');
 $obj = json_decode($json,true);
 $MaSP =$obj["MaSP"];
 $Sql_Query = "DELETE FROM XeMay WHERE MaSP = '$MaSP'";
 
 if(mysqli_query($con,$Sql_Query)){
	 $MSG = 'Xóa dữ liệu thành công' ;
	 $json = json_encode($MSG);
	 echo $json ; 
 } else{
	echo 'Wrong';
 
 }
 mysqli_close($con);
?>