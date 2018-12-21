<?php
	include 'DBConfig.php';
	$conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
  
	$TenSP= $obj["TenSP"];
	$BienSo = $obj["BienSo"];
	$LoaiXe = $obj["LoaiXe"];
	$MauXe = $obj["MauXe"];
	$PhanKhoiXe = $obj["PhanKhoiXe"];

	$sql = "SELECT * FROM `XeMay` WHERE `BienSo` = '$BienSo'";
	
	$result = $conn->query($sql);
	if ($result->num_rows >0) { 
		echo json_encode('failed');		
	} 
	else {
		$Sql_Query = "INSERT INTO `XeMay`(`TenSP`, `BienSo`, `LoaiXe`, `MauXe`, `PhanKhoiXe`) 
		VALUES ('$TenSP','$BienSo','$LoaiXe' ,'$MauXe','$PhanKhoiXe')";
 
		if(mysqli_query($conn,$Sql_Query)){
			echo json_encode('successfully');
		}
		else{		 
			echo 'Wrong'; 
		}
	}
 mysqli_close($conn);
 
?>