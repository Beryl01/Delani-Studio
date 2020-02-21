
//toggle
$(document).ready(function(){
  $("#box").click(function(){
    $("#design-img").toggle();
    $("#design").toggle();
  });

  $("#box").click(function(){
    $("#development-img").toggle();
    $("#development").toggle();
  });

  $("#box").click(function(){
    $("#product-img").toggle();
    $("#product").toggle();
  });
});
  
//portfio overlay 
$(document).ready(function(){
  $(".row").hover(function(){
    $("#work1").show();
    $("#overlay1").hide();
  });

  $(".row").hover(function(){
    $("#work2").show();
    $("#overlay2").hide();
  });

  $(".row").hover(function(){
    $("#work3").show();
    $("#overlay3").hide();
  });

  $(".row").hover(function(){
    $("#work4").show();
    $("#overlay4").hide();
  });

  $(".row").hover(function(){
    $("#work5").show();
    $("#overlay5").hide();
  });

  $(".row").hover(function(){
    $("#work6").show();
    $("#overlay6").hide();
  });

  $(".row").hover(function(){
    $("#work7").show();
    $("#overlay7").hide();
  });

  $(".row").hover(function(){
    $("#work8").show();
    $("#overlay8").hide();
  });
});

  // //form function
  $(document).ready(function(){
    $("form#form1").submit(function(){
      var name = $("input#name").value();
      var email = $("input#email").value();
      var message = $("textarea#comment").value();
      if ($("input#name").value() && $("input#email").value()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  });