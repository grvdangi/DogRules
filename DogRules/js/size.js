$(document).ready(function()
{
      //$("#div2").hide(0);
$("#l1").click(function()
{
$("#maindiv").css({"display":"none"});
    $("#div3").css({"display":"none"});
$("#div2").show();      
});
$("#l2").click(function()
{
         $("#maindiv").css({"display":"none"});
    $("#div2").css({"display":"none"});
        $("#div3").show();      
});
         
  });