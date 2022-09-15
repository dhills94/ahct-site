<?php

  require_once('../lib/class.phpmailer.php');     




    // $f_name = $_POST["f_name"];
    // $l_name = $_POST["l_name"];
    // $email = $_POST["email"];
    // $u_message = $_POST["u_message"];




    $people = $_POST["people"];
    $zip_code = $_POST["zip"];
    $household_income = $_POST["money"];
    $gender = $_POST["gender"];
    $dob_month = $_POST["month"];
    $dob_day = $_POST["day"];
    $dob_year = $_POST["year"];
    $address = $_POST["address"];
    $city = $_POST["city"];
    $state = $_POST["state"];
    $zip_code_two = $_POST["zip_two"];
    $f_name = $_POST["first_name"];
    $l_name = $_POST["last_name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $DOB = $dob_month."/".$dob_day."/".$dob_year;

    $_ZAP_ARRAY = array(
      "First_Name" => $f_name,
      "Last_Name" => $l_name,
      "Address" => $address,
      "Zip" => $zip_code,
      "Primary_Phone" => $phone, 
      "Email" => $email,
      "Gender" => $gender,
      "State" => $state,
      "City" => $city,
      "DOB" => $DOB,
      "Estimated_Household_Income" => $household_income,
      "Household_Size" => $people,

    );

    // stuff it into a query
    $_ZAP_ARRAY = http_build_query($_ZAP_ARRAY );

    // get my zap URL
    $ZAPIER_HOOK_URL = "https://hooks.zapier.com/hooks/catch/11179056/bq34nkz/";

    // curl my data into the zap
    $ch = curl_init( $ZAPIER_HOOK_URL);
    curl_setopt( $ch, CURLOPT_POST, 1);
    curl_setopt( $ch, CURLOPT_POSTFIELDS, $_ZAP_ARRAY);
    curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt( $ch, CURLOPT_HEADER, 0);
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

    $response = curl_exec( $ch );

    print_r($response);


    $mail  = new PHPMailer(); // defaults to using php "mail()"
    $mail->isHTML();



      $mail->AddReplyTo("info@affordablehealthcoveragetoday.com","Affordable Health Coverage Today");

      $mail->SetFrom('info@affordablehealthcoveragetoday.com', 'Affordable Health Coverage Today');

      $mail->AddAddress("m.abdul8990@gmail.com");
      // $mail->AddCC("cha900852@gmail.com");
      // $mail->AddCC("m.abdul8990@gmail.com");
      // $mail->AddAddress("");

      $mail->Subject    = "Compare rates - ".$_POST['f_name'];

        
      $mail->Body .="  
        <p><b>People Need Coverage:</b> ".$people."</p>
        <p><b>Zip Code to Compare Plans:</b> ".$zip_code."</p>
        <p><b>Household Income:</b> ".$household_income."</p>
        <p><b>Gender:</b> ".$gender."</p>
        
        <p><b>Address:</b> ".$address."</p>
        <p><b>City:</b> ".$city."</p>
        <p><b>State:</b> ".$state."</p>
        <p><b>Zip Code:</b> ".$zip_code_two."</p>
        <p><b>First Name:</b> ".$f_name."</p>
        <p><b>Last Name:</b> ".$l_name."</p>
        <p><b>Email Address:</b> ".$email."</p>
        <p><b>Phone Number:</b> ".$phone."</p>
      ";
        
      if(!$mail->Send()) {

          
        echo "Mailer Error: " . $mail->ErrorInfo;
      

      } else {
              
        echo "done";
      
      }

?>

  