$(function(){

var expressionReguliere = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 


function unvalidAddress(e){
   var email = $("#adress-email").val(); 
   var resultat = expressionReguliere.test(email);
   console.log(resultat);
   console.log(email);
   

   if (resultat == true ){
      console.log("adresse envoyée!");
      $(".form>p>img").css("display", "none");
      $(".alert").css("display", "none");
      $(".form>p>img").css("display", "none");
      $(".form").css("border", "solid 1px hsl(0, 36%, 70%)")

   }
   else {
    $(".form").css({"border": "2px solid hsl(0, 93%, 68%)", "transition": "0.3s"});
    $(".alert").css("display", "block");
    $(".form>p>img").css("display", "block");
    e.preventDefault();         

   } 
 
}


$(".form").on("input", unvalidAddress);

});