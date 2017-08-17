$(document).ready(function(){

    $("#container-1").show();
    $("#container-2").hide();
    $("#container-3").hide();
    $("#container-4").hide(); 

    $("#button-next-1").click(function(){
        $("#container-1").fadeOut();
        function fadesIn(){
            $("#container-2").fadeIn();
        }
        setTimeout(fadesIn,300);
    });
    $("#button-next-2").click(function(){
        $("#container-2").fadeOut();
        function fadesIn(){
            $("#container-3").fadeIn();
        }
        setTimeout(fadesIn,300);
    });
    $("#button-next-3").click(function(){
        $("#container-3").fadeOut();
        function fadesIn(){
            $("#container-4").fadeIn();
        }
        setTimeout(fadesIn,300);
    });
    $("#button-next-4").click(function(){
        $("#container-4").fadeOut();
        function fadesIn(){
            $("#container-1").fadeIn();
        }
        setTimeout(fadesIn,300);
    });

    $("#button-previous-1").click(function(){
        $("#container-1").fadeOut();
        function fadesIn(){
            $("#container-4").fadeIn();
        }
        setTimeout(fadesIn,300);
    });
    $("#button-previous-2").click(function(){
        $("#container-2").fadeOut();
        function fadesIn(){
            $("#container-1").fadeIn();
        }
        setTimeout(fadesIn,300);
    });
    $("#button-previous-3").click(function(){
        $("#container-3").fadeOut();
        function fadesIn(){
            $("#container-2").fadeIn();
        }
        setTimeout(fadesIn,300);
    });
    $("#button-previous-4").click(function(){
        $("#container-4").fadeOut();
        function fadesIn(){
            $("#container-3").fadeIn();
        }
        setTimeout(fadesIn,300);
    });
});