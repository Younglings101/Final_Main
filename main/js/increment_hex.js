$(document).ready(function() {
    BAY_hex_increment();

});

$(window).resize(function() {
    BAY_hex_increment();
});


function BAY_hex_increment() {
    var count = 0;

    windowSize = $(window).width();
    if (windowSize > 1471) {

        if (count > 8) {

            $(".BAYhex").remove();
            count = 0;
            while (count < 8) {
                $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                count++;

            }
        }
    };

    if (windowSize < 1470 && windowSize > 1351) {

        if (count < 9 || count > 9) {
            $(".BAYhex").remove();
            count = 0;
            while (count < 9) {
                $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                count++;

            }
        }
    };

    if (windowSize < 1320 && windowSize > 1201) {

        if (count < 12 || count > 12) {
            $(".BAYhex").remove();
            count = 0;
            while (count < 12) {
                $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                count++;

            }
        }
    };

    if (windowSize < 1200 && windowSize > 1101) {

        if (count < 15 || count > 15) {
            $(".BAYhex").remove();
            count = 0;
            while (count < 15) {
                $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                count++;

            }
        }
    };
    if (windowSize < 1100 && windowSize > 1051) {

        if (count < 17 || count > 17) {
            $(".BAYhex").remove();
            count = 0;
            while (count < 17) {
                $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                count++;

            }
        }
    };
    if (windowSize < 1050 && windowSize > 981) {

        if (count < 18 || count > 18) {
            $(".BAYhex").remove();
            count = 0;
            while (count < 18) {
                $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                count++;

            }
        }
    };
    if (windowSize < 980 && windowSize > 931) {

        if (count < 21 || count > 21) {
            $(".BAYhex").remove();
            count = 0;
            while (count < 21) {
                $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                count++;

            }
        }
    };
    if (windowSize < 930 && windowSize > 891) {

        if (count < 24 || count > 24) {
            $(".BAYhex").remove();
            count = 0;
            while (count < 24) {
                $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                count++;

            }
        }
    };
    if (windowSize < 880 && windowSize > 851) {

        if (count < 27 || count > 27) {
            $(".BAYhex").remove();
            count = 0;
            while (count < 27) {
                $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                count++;

            }
        }
    };
    if (windowSize < 850 && windowSize > 811) {

        if (count < 30 || count > 30) {
            $(".BAYhex").remove();
            count = 0;
            while (count < 30) {
                $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                count++;

            }
        }
    };
    if (windowSize < 810 && windowSize > 800) {

        if (count < 32 || count > 32) {
            $(".BAYhex").remove();
            count = 0;
            while (count < 32) {
                $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                count++;

            }
        }
    };

}