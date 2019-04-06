<?php
  session_start();
	ini_set('display_errors', 1);
	error_reporting(~0);
?>

<html>
  <head>  
    <title>Simple Login</title>
  </head>
  <body>
  
  <?php
  
    $username = $_POST["username"];
    $passwd= $_POST["password"];
    
    $host = "localhost";
    $user = "imaginb7_rgu";
    $pass = "rgurgurgu";
    $database = "imaginb7_rgu";
    $connection  = mysqli_connect($host, $user, $pass, $database) 
      or die ("Error is " . $mysqli_error ($connect));  
  
  	$user_in_db = null;
  	$salt = null;
  	$password_in_db = null;
  	    
    $username = $connection->real_escape_string ($username);
    $passwd = $connection->real_escape_string ($passwd);

     $query_check = "select Username, Salt, Password from User where Username = ?;";
     
     $prep = $connection->prepare ($query_check);
     $prep->bind_param ("s", $username);
     $prep->execute();
     
     $prep->bind_result ($user_in_db, $salt, $password_in_db);         
     $prep->fetch();
         

    if ($user_in_db != null) {
      $passwd = hash("sha256", $salt . $passwd);
           
      if ($passwd == $password_in_db) {
          echo "<p>Login successful.</p>";
      }
      else {
          echo "<p>Incorrect Password.</p>";
      }
        
    }
    else {
      echo "<p>Invalid login</p>";
      echo "<a href = \"example_registration.html\">Register</a>";
    } 


  ?>
  
  </body>
</html>  
