<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Creative - Bootstrap 3 Responsive Admin Template">
    <meta name="author" content="GeeksLabs">
    <meta name="keyword" content="Creative, Dashboard, Admin, Template, Theme, Bootstrap, Responsive, Retina, Minimal">
    <link rel="shortcut icon" href="img/favicon.png">

    <title>Big Gym - Istruttore Sabrina</title>

     <!-- Bootstrap CSS -->    
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <!-- bootstrap theme -->
    <link href="../css/bootstrap-theme.css" rel="stylesheet">
       <!--fonts css-->
      <link href='http://fonts.googleapis.com/css?family=Pacifico|Bangers|Montserrat|Gloria+Hallelujah' rel='stylesheet' type='text/css'>
    <!-- font icon -->
    <link href="../css/elegant-icons-style.css" rel="stylesheet" />
    <link href="../css/font-awesome.min.css" rel="stylesheet" />
    <!-- Custom styles -->
    <link href="../css/style.css" rel="stylesheet">
    <link href="css/style-responsive.css" rel="stylesheet" />
      
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
      <script src="js/respond.min.js"></script>
      <script src="js/lte-ie7.js"></script>
    <![endif]-->
  </head>

  <body>
  <!-- container section start -->
  <section id="container" class="">
      <!--header start-->
        <?php include 'header.php' ?>   
      <!--header end-->

      <!--sidebar start-->
      <aside>
        <?php include 'sidebar.php'?> 
      </aside>
      <!--sidebar end-->
      
      <!--main content start-->
      <section id="main-content">
          <section class="wrapper" >
              <div class="row">
                    <div class="col-lg-12">
                        <h3 class="page-header">Istruttori</h3>
                        <ol class="breadcrumb">
                            <li><i class="fa fa-home"></i><a href="../index.html">Home</a></li>
                            <li>Istruttori</li>
                            <li>Sabrina</li>
                        </ol>
                    </div>
                </div>
                <?php
                    require_once('dbclass.php');
                    $result = DB::getDB()->query("select * from istruttori where nome sabrina. ");

                    if($result->num_rows >0)
                    {
                        $istruttore = array();
                        while($row = $result->fetch_array(MYSQL_ASSOC)) {
                            $istruttore[] = $row;
                        }

                        print_r($istruttore);
                ?>
                <section id="profili-centrato">
                     <div class="row">
                        <!-- profile-widget -->
                        <div class="col-lg-10">
                            <div class="profile-widget profile-widget-info">
                                  <div class="panel-body">
                                    <div class="col-lg-4 col-sm-4">
                                      <h2>Sabrina</h2> 
                                      <div class="follow-ava">
                                          <img src="../img/istruttori/   <?php echo $istruttore['nome']; ?>.jpg" alt="">
                                            <br>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 follow-info">
                                        <h3>Ciao sono <?php echo $istruttore['nome']; ?>.!</h3><br>
                                        <h4>I Miei Social</h4>
                                        <ul class="list-inline">
                                            <li>
                                            <a href="#" class="btn-social btn-outline"><i class="fa fa-facebook fa-4x"></i></a>
                                            </li>
                                            <li>
                                            <a href="#" class="btn-social btn-outline"><i class="fa fa-4x fa-twitter"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <!-- page end--> 
                </section>
            </section>
            <!--main content end-->
    </section>
<!-- container section end -->
      
<!-- FOOTER -->      
<!--<?php include 'footer.php'?>-->
<!-- END FOOTER -->
      
    <!-- javascripts -->
    <script src="../js/jquery.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <!-- nice scroll -->
    <script src="../js/jquery.scrollTo.min.js"></script>
    <script src="../js/jquery.nicescroll.js" type="text/javascript"></script>
    <!-- jquery knob -->
    <script src="../assets/jquery-knob/js/jquery.knob.js"></script>
    <!--custome script for all page-->
    <script src="../js/scripts.js"></script>
  </body>
</html>
