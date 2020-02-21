
//toggle
$(document).ready(function(){
  $("#box").click(function(){
    $("#design-img").slideToggle();
    $("#design").slideToggle();
  });

  $("#box").click(function(){
    $("#development-img").slideToggle();
    $("#development").slideToggle();
  });

  $("#box").click(function(){
    $("#product-img").slideToggle();
    $("#product").slideToggle();
  });
});
  
//portfio overlay 
$(document).ready(function(){
  $(".row").mouseover(function(){
    $("#work1").show();
    $("#overlay1").hide();
  });

  $(".row").mouseover(function(){
    $("#work2").show();
    $("#overlay2").hide();
  });

  $(".row").mouseover(function(){
    $("#work3").show();
    $("#overlay3").hide();
  });

  $(".row").mouseover(function(){
    $("#work4").show();
    $("#overlay4").hide();
  });

  $(".row").mouseover(function(){
    $("#work5").show();
    $("#overlay6").hide();
  });

  $(".row").mouseover(function(){
    $("#work7").show();
    $("#overlay7").hide();
  });

  $(".row").mouseover(function(){
    $("#work8").show();
    $("#overlay9").hide();
  });

  $(".row").mouseover(function(){
    $("#work1").show();
    $("#overlay1").hide();
  });
});

  // //form function
  // $(document).ready(function(){
  //   $("form#form1").submit(function(event){
  //     var name = $("input#name").value();
  //     var email = $("input#email").value();
  //     var message = $("textarea#comment").value();
  //     if ($("input#name").val() && $("input#email").value()){
  //       alert (name + ", we have received your message. Thank you for reaching out to us.");
  //     }
  //     else {
  //       alert("Please enter your name and email!");
  //     }
      
  //   });
  
  // });