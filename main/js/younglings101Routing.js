var app = angular.module('main', ['ngRoute']);
app.config(function ($routeProvider){
    $routeProvider
    .when('/twitter', {
        templateUrl: "socialMedia/twitter.html"
    })
    .when('/facebook', {
        templateUrl: "socialMedia/facebook.html"
    })
    .when('/instagram', {
        templateUrl: "socialMedia/instagram.html"
    })
    .when('/youtube', {
        templateUrl: "socialMedia/youtube.html"
    })
    .when('/linkedin', {
        templateUrl: "socialMedia/linkedin.html"
    })
    .otherwise({
        redirectTo: '/'
    });
})
.controller('randomiser', ['$scope', '$sce', function ($scope, $sce) {
    $scope.links = [{ "name": "Ernst", "surname": "Kaese", "link": "./pages/younglingsProfilesSites/ernst/index.html", "src": "./pages/younglingsProfilesSites/ernst/img/faceshot.jpg", "display": "CYshow" }, { "name": "Malcolm", "surname": "Carelse", "link": "./pages/younglingsProfilesSites/malcolm/malcolmyoungling.html", "src": "./pages/younglingsProfilesSites/malcolm/IMG_20170624_130227.jpg", "display": "CYshow" }, { "name": "Athandile", "surname": "Tembile", "link": "./pages/younglingsProfilesSites/athandile/index.html", "src": "./pages/younglingsProfilesSites/athandile/Images/Head.jpg", "display": "CYshow" }, { "name": "Keenan", "surname": "Idas", "link": "./pages/younglingsProfilesSites/keenan/index.html", "src": "./pages/younglingsProfilesSites/keenan/images/Keenan_Idas.jpg", "display": "CYshow" }, { "name": "Zahirah", "surname": "Ismail", "link": "./pages/younglingsProfilesSites/zahirah/index.html", "src": "./pages/younglingsProfilesSites/zahirah/img/z3.jpg", "display": "CYshow" }, { "name": "Zafiera", "surname": "Davids", "link": "./pages/younglingsProfilesSites/zafiera/index.html", "src": "./pages/younglingsProfilesSites/zafiera/img/logo.png", "display": "CYshow" }, { "name": "Sixolile", "surname": "Mtengwana", "link": "./pages/younglingsProfilesSites/sixolile/index.html", "src": "./pages/younglingsProfilesSites/sixolile/img/sm.dp.jpg", "display": "CYshow" }, { "name": "Jean-Pierre", "surname": "Olwagen", "link": "./pages/younglingsProfilesSites/jean-pierre/index.html", "src": "./pages/younglingsProfilesSites/jean-pierre/profile picture.jpg", "display": "CYshow" }, { "name": "Dewald", "surname": "Mouton", "link": "./pages/younglingsProfilesSites/dewald/index.html", "src": "./pages/younglingsProfilesSites/dewald/images/profile.jpg", "display": "CYshow" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/400x400", "display": "CYhide" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/400x400", "display": "CYhide" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/400x400", "display": "CYhide" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/400x400", "display": "CYhide" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/400x400", "display": "CYhide" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/400x400", "display": "CYhide" }, { "name": "", "surname": "", "link": "", "src": "./img/alienWorldp1.png", "display": "CYhide" }, { "name": "", "surname": "", "link": "", "src": "./img/alienWorldp2.png", "display": "CYhide" }, { "name": "", "surname": "", "link": "", "src": "./img/alienWorldp3.png", "display": "CYhide" }];
    links = shuffle($scope.links);

    $scope.currentUrl = "";
    $scope.setCurrentUrl = function (url) {
        $scope.currentUrl = url;
    }

    $scope.getUrl = function () {
        return $sce.trustAsResourceUrl($scope.currentUrl);
    }

    $scope.iframeResize = function () {
        var frame = document.getElementById('CYframe');
        if ($scope.getUrl() === $sce.trustAsResourceUrl("")) {
            frame.style.height = '0%';
            console.log('shrunk');
        }
        else {
            frame.style.height = window.innerHeight;
            console.log(window.innerHeight);
        }
    }

    $scope.iframeMinimise = function(){
        $scope.setCurrentUrl("");
        console.log("I did a thing");
    }
}]);

function shuffle(array) {
var currentIndex = array.length, temporaryValue, randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
}

return array;
}