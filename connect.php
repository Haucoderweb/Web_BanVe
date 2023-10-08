<?php 
$maso = $_POST['maso'];
$name = $_POST['name'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$sothich = $_POST['sothich'];
$quoctich = $_POST['quoctich'];
$ghichu = $_POST['ghichu'];

// data connection
$conn = new mysqli('localhost','root','','testt');
if($conn->connect_error){
    die('Connection Failed : ' .$conn->connect_error);
    print "khong thanh cong ";

}else{
    $stmt= $conn->prepare("insert into registration(maso,name,email,gender, sothich, quoctich,ghichu)
    values(?,?,?,?,?,?,?) ");
    $stmt->bind_param("issssss",$maso,$name,$email,$gender,$sothich,$quoctich,$ghichu);
    $stmt->execute();
    echo "registration successfully....";
    $stmt->close();
    $conn->close();
}

?>