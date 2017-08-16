$(document).ready(function () {
    var divs=$('#content');
//Hide All Divs
    $('div#content').hide();
$('div#content:first').show();

    
});

$(document).on('click',function (e) {
   var wid= window.getComputedStyle(e.target).getPropertyValue("font-size");

   document.getElementById("columns").innerHTML=wid;
});

