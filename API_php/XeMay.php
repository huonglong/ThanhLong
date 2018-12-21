<?php
	include 'DBConfig.php';
	$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName); 
	 $obj = json_decode($json,true);
	$bienSo =$obj["BienSo"];
    $arrayXeMay = array();

    //Tao class chua du lieu
    class XeMay{
        var $idXe;
        var $tenXe;
        var $bienSo;
        var $loaiXe;
        var $hinhAnh;
        var $giaThueTheoGio;
        var $giaThueTheoNgay;
        var $mauXe;
        var $phanKhoi;

        //Contructor
        function XeMay($idXe, $tenXe, $bienSo, $loaiXe, $hinhAnh, $giaThueTheoGio, $giaThueTheoNgay, $mauXe, $phanKhoi){
            $this->idXe = $idXe;
            $this->tenXe = $tenXe;
            $this->bienSo = $bienSo;
            $this->loaiXe = $loaiXe;
            $this->hinhAnh = $hinhAnh;
            $this->giaThueTheoGio = $giaThueTheoGio;
            $this->giaThueTheoNgay = $giaThueTheoNgay;
            $this->mauXe = $mauXe;
            $this->phanKhoi = $phanKhoi;
        }
	}

    $sql = "SELECT * FROM XeMay WHERE BienSo = '$bienSo'";
    $query = $conn->query($sql);

    while($row = mysqli_fetch_array($query)){
        array_push($arrayXeMay, new XeMay($row["MaSP"], $row["TenSP"], $row["BienSo"], $row["LoaiXe"], $row["HinhAnh"], $row["GiaThueTheoGio"], $row["GiaThueTheoNgay"], $row["MauXe"], $row["PhanKhoi"]));
    }
    echo json_encode($arrayXeMay);
?>