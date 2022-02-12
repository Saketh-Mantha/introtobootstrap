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


  $("#login").click(function(){
      
    $("#LoginModal").modal('show');
  });
  $("#table").click(function(){
      
      $("#reservemodal").modal('show');
    });
   
});