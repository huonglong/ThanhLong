-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 18, 2018 at 08:10 AM
-- Server version: 5.6.37
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `QuanLyXeChoThue`
--

-- --------------------------------------------------------

--
-- Table structure for table `LoaiXe`
--

CREATE TABLE IF NOT EXISTS `LoaiXe` (
  `MaLoai` int(11) NOT NULL,
  `TenLoai` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `SoLuong` int(11) NOT NULL,
  `HinhAnh` varchar(1000) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'https://znews-photo.zadn.vn/w660/Uploaded/fsmuy/2018_10_13/Yamaha_zing.jpg'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `LoaiXe`
--

INSERT INTO `LoaiXe` (`MaLoai`, `TenLoai`, `SoLuong`, `HinhAnh`) VALUES
(1, 'Xe so', 5, 'https://znews-photo.zadn.vn/w660/Uploaded/fsmuy/2018_10_13/Yamaha_zing.jpg'),
(2, 'Xe tay ga', 5, 'http://imgs.vietnamnet.vn/Images/2016/03/23/07/20160323074235-xe-tay-ga.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE IF NOT EXISTS `Users` (
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(500) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`username`, `password`) VALUES
('huongnguyen', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `XeMay`
--

CREATE TABLE IF NOT EXISTS `XeMay` (
  `MaSP` int(11) NOT NULL,
  `TenSP` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `BienSo` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `LoaiXe` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `HinhAnh` varchar(1000) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'https://znews-photo.zadn.vn/w660/Uploaded/fsmuy/2018_10_13/Yamaha_zing.jpg',
  `MauXe` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PhanKhoiXe` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '125cc'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `XeMay`
--

INSERT INTO `XeMay` (`MaSP`, `TenSP`, `BienSo`, `LoaiXe`, `HinhAnh`, `MauXe`, `PhanKhoiXe`) VALUES
(1, 'Vision ', '76G1-89097', '2', 'https://znews-photo.zadn.vn/w660/Uploaded/fsmuy/2018_10_13/Yamaha_zing.jpg', 'Do', '125cc'),
(2, 'Air-Blade', '79M1-98990', '2', 'https://znews-photo.zadn.vn/w660/Uploaded/fsmuy/2018_10_13/Yamaha_zing.jpg', 'Den-Do', '125cc'),
(3, 'Sirius', '78G1-89098', '1', 'https://znews-photo.zadn.vn/w660/Uploaded/fsmuy/2018_10_13/Yamaha_zing.jpg', 'Den', '125cc');

-- --------------------------------------------------------

--
-- Table structure for table `XeThue`
--

CREATE TABLE IF NOT EXISTS `XeThue` (
  `id` int(11) NOT NULL,
  `SoCMND` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `TenXe` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `BienSo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `HoTenKH` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `NgayThue` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `SoGioThue` int(11) NOT NULL,
  `GiaThue` double DEFAULT NULL,
  `TongTienDuKien` double DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `XeThue`
--

INSERT INTO `XeThue` (`id`, `SoCMND`, `TenXe`, `BienSo`, `HoTenKH`, `NgayThue`, `SoGioThue`, `GiaThue`, `TongTienDuKien`) VALUES
(2, '223456099', 'Air-Blade', '79M1-98990', 'Nguyen Van A', '13/12/2018', 2, 35000, 70000),
(3, '334533097', 'Vision', '76G1-89097', 'Tran Van B', '16/12/2018', 2, 30000, 60000),
(23, '6757', 'Sirius', '6675', '56756', '7565', 87, 77, 6699);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `LoaiXe`
--
ALTER TABLE `LoaiXe`
  ADD PRIMARY KEY (`MaLoai`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `XeMay`
--
ALTER TABLE `XeMay`
  ADD PRIMARY KEY (`MaSP`);

--
-- Indexes for table `XeThue`
--
ALTER TABLE `XeThue`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `LoaiXe`
--
ALTER TABLE `LoaiXe`
  MODIFY `MaLoai` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `XeMay`
--
ALTER TABLE `XeMay`
  MODIFY `MaSP` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `XeThue`
--
ALTER TABLE `XeThue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=24;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
