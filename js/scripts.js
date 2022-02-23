$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
      if ($("#carouselButton").children("span").hasClass('fa-pause')){
          $("#mycarousel").carousel('pause');
          $("#carouselButton").children("span").removeClass('fa-pause');
          $("#carouselButton").children("span").addClass('fa-play');
          $("#carouselButton-icon").parent("button").removeClass('btn-danger');
          $("#carouselButton-icon").parent("button").addClass('btn-success');
      }
      else if ($("#carouselButton").children("span").hasClass('fa-play')){
          $("#mycarousel").carousel('cycle');
          $("#carouselButton").children("span").removeClass('fa-play');
          $("#carouselButton").children("span").addClass('fa-pause');
          $("#carouselButton-icon").parent("button").addClass('btn-danger');
          $("#carouselButton-icon").parent("button").removeClass('btn-success');
      }
   
    });
    $("#menuuthapizza").hover(function(){
      if ($("#menuuthapizza").children("p").hasClass('d-none')){
        $("#menuuthapizza").children("p").removeClass('d-none');
        $("#menuuthapizza").children("p").addClass('d-block');
      }
      else {
        $("#menuuthapizza").children("p").removeClass('d-block');
        $("#menuuthapizza").children("p").addClass('d-none');
      }
    });
    $("#menubuffet").hover(function(){
      if ($("#menubuffet").children("p").hasClass('d-none')){
        $("#menubuffet").children("p").removeClass('d-none');
        $("#menubuffet").children("p").addClass('d-block');
      }
      else {
        $("#menubuffet").children("p").removeClass('d-block');
        $("#menubuffet").children("p").addClass('d-none');
      }
    });
    $("#menuzucchipakoda").hover(function(){
      if ($("#menuzucchipakoda").children("p").hasClass('d-none')){
        $("#menuzucchipakoda").children("p").removeClass('d-none');
        $("#menuzucchipakoda").children("p").addClass('d-block');
      }
      else {
        $("#menuzucchipakoda").children("p").removeClass('d-block');
        $("#menuzucchipakoda").children("p").addClass('d-none');
      }
    });
    $("#menuelaicheesecake").hover(function(){
      if ($("#menuelaicheesecake").children("p").hasClass('d-none')){
        $("#menuelaicheesecake").children("p").removeClass('d-none');
        $("#menuelaicheesecake").children("p").addClass('d-block');
      }
      else {
        $("#menuelaicheesecake").children("p").removeClass('d-block');
        $("#menuelaicheesecake").children("p").addClass('d-none');
      }
    });
    $("#menuvadonut").hover(function(){
      if ($("#menuvadonut").children("p").hasClass('d-none')){
        $("#menuvadonut").children("p").removeClass('d-none');
        $("#menuvadonut").children("p").addClass('d-block');
      }
      else {
        $("#menuvadonut").children("p").removeClass('d-block');
        $("#menuvadonut").children("p").addClass('d-none');
      }
    });
    $("#menuspecial").hover(function(){
      if ($("#menuspecial").children("p").hasClass('d-none')){
        $("#menuspecial").children("p").removeClass('d-none');
        $("#menuspecial").children("p").addClass('d-block');
      }
      else {
        $("#menuspecial").children("p").removeClass('d-block');
        $("#menuspecial").children("p").addClass('d-none');
      }
    });
   
  


  $("#login").click(function(){
      
    $("#LoginModal").modal('show');
  });
  $("#table").click(function(){
      
      $("#reservemodal").modal('show');
    });
        var count=1;
       
    $("#minus").click(function(){
    count--;
    $("#count").html(count);
    var price= 3.99*count;
    $("#price").html("$"+price);
      
      
    });
    $("#plus").click(function(){
      count++;
      var price= 3.99*count;
      $("#count").html(count);
     
      $("#price").html("$"+price);
        
        
      });
      var count=1;
       
      $("#minus1").click(function(){
      count--;
      $("#count").html(count);
      var price= 6.99*count;
      $("#price1").html("$"+price);
        
        
      });
      $("#plus1").click(function(){
        count++;
        var price= 6.99*count;
        $("#count").html(count);
       
        $("#price1").html("$"+price);
          
          
        });
        var count=1;
       
        $("#minus2").click(function(){
        count--;
        $("#count").html(count);
        var price= 3.99*count;
        $("#price2").html("$"+price);
          
          
        });
        $("#plus2").click(function(){
          count++;
          var price= 3.99*count;
          $("#count").html(count);
         
          $("#price2").html("$"+price);
            
            
          });
          var count=1;
       
          $("#minus3").click(function(){
          count--;
          $("#count").html(count);
          var price= 5.99*count;
          $("#price3").html("$"+price);
            
            
          });
          $("#plus3").click(function(){
            count++;
            var price= 5.99*count;
            $("#count").html(count);
           
            $("#price3").html("$"+price);
              
              
            });
            var count=1;
       
            $("#minus4").click(function(){
            count--;
            $("#count").html(count);
            var price= 1.99*count;
            $("#price4").html("$"+price);
              
              
            });
            $("#plus4").click(function(){
              count++;
              var price= 1.99*count;
              $("#count").html(count);
             
              $("#price4").html("$"+price);
                
                
              });
              var count=1;
       
              $("#minus5").click(function(){
              count--;
              $("#count").html(count);
              var price= 3.99*count;
              $("#price5").html("$"+price);
                
                
              });
              $("#plus5").click(function(){
                count++;
                var price= 3.99*count;
                $("#count").html(count);
               
                $("#price5").html("$"+price);
                  
                  
                });
    // $("#cross").click(function(){
    //   $(".card").addClass('d-none');
    //   $(".card").removeClass('d-block');
    // })
    // $("#cart").click(function(){
    //   $(".card").addClass('d-block');
    //   $(".card").removeClass('d-none');
     
    // })
    // $(#button2).click(function(){
    //   if((#two).hasClass('d-none')){
    //   $(#two).removeClass('d-none');
      
    //   $(#two).addClass('d-block');
    //   }
      
      
    // })
   
   
});
document.addEventListener("DOMContentLoaded", function(event) {


  const cartButtons = document.querySelectorAll('.cart-button');
  
  cartButtons.forEach(button => {
  
  button.addEventListener('click',cartClick);
  
  });
  
  function cartClick(){
  let button =this;
  button.classList.add('clicked');
  }
  
  
  
  });