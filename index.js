
//toggle
$(document).ready(function(){
  $("#box").click(function(){
    $("#design-img").slideToggle(1000);
    $("#design").slideToggle(1200);
  });
});

$(document).ready(function(){
  $("#box").click(function(){
    $("#development-img").slideToggle(1000);
    $("#development").slideToggle(1200);
  });
});

$(document).ready(function(){
  $("#box").click(function(){
    $("#product-img").slideToggle(1000);
    $("#product").slideToggle(1200);
  });
});
  
//portfio overlay 
$(document).ready(function(){
  $(".row").mouseover(function(){
    $("#work1").show(1000);
    $("#overlay1").hide(1200);
  });
});

$(document).ready(function(){
  $(".row").mouseover(function(){
    $("#work2").show(1000);
    $("#overlay2").hide(1200);
  });
});

$(document).ready(function(){
  $(".row").mouseover(function(){
    $("#work3").show(1000);
    $("#overlay3").hide(1200);
  });
});

$(document).ready(function(){
  $(".row").mouseover(function(){
    $("#work4").show(1000);
    $("#overlay4").hide(1200);
  });
});

$(document).ready(function(){
  $(".row").mouseover(function(){
    $("#work5").show(1000);
    $("#overlay6").hide(1200);
  });
});

$(document).ready(function(){
  $(".row").mouseover(function(){
    $("#work7").show(1000);
    $("#overlay7").hide(1200);
  });
});

$(document).ready(function(){
  $(".row").mouseover(function(){
    $("#work8").show(1000);
    $("#overlay9").hide(1200);
  });
});

$(document).ready(function(){
  $(".row").mouseover(function(){
    $("#work1").show(1000);
    $("#overlay1").hide(1200);
  });
});

  //form function
  $(document).ready(function(){
    $("form#form1").submit(function(event){
      var name = $("input#name").value();
      var email = $("input#email").value();
      var message = $("textarea#comment").value();
      if ($("input#name").val() && $("input#email").value()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });