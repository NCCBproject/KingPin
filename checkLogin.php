<?php
$name=$_REQUEST['uname'];
$password=$_REQUEST['psw'];

 //This is trying to check ton see if it is in the database already. 
$query = mysql_query("SELECT * FROM users WHERE Username ='$name'");
if(mysql_num_rows ($query) >0){
  echo 'It already exists :(';
}else{
 mysql_query("Insert INTO users (Username, Password) VALUES ('$name', '$password')") 
}
?>
