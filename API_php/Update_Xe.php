<?php
	include 'DBConfig.php';
	$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
  
	$MaSP = $obj["MaSP"];
	$TenSP= $obj["TenSP"];
	$BienSo = $obj["BienSo"];
	$LoaiXe = $obj["LoaiXe"];
	$MauXe = $obj["MauXe"];
	$PhanKhoiXe = $obj["PhanKhoiXe"];

	$Sql_Query = "UPDATE `XeMay` SET `TenSP`= '$TenSP' ,`BienSo`= '$BienSo',
	  `LoaiXe`= '$LoaiXe',`MauXe`= '$MauXe',`PhanKhoiXe`='$PhanKhoiXe' WHERE `MaSP`= '$MaSP'";
 
	if(mysqli_query($con,$Sql_Query)){
		 $MSG = 'Sửa dữ liệu thành công!' ;

		 $json = json_encode($MSG);
		 echo $json ; 
	}
	else{ 
		echo 'Wrong'; 
	}
 mysqli_close($con);
 
?>