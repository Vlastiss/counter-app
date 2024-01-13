$(document).ready(function() {
  
  var counter = 0;
  $("#minus").click(function(){
    $("#number").html(counter--);
  })

  $("#plus").click(function(){
    $("#number").html(counter++);
  })

  $("#reset").click(function(){
    $("#number").html(counter = 0);
  })
});