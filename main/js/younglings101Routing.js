var app = angular.module('main', []);
app.controller('mainController', ['$scope', '$sce', function ($scope, $sce) {
    $scope.links = [{ "name": "Ernst", "surname": "Kaese", "link": "https://ernst-kaese.firebaseapp.com/", "src": "./img/current younglings/ernst.png", "display": "CYshow" }, { "name": "Malcolm", "surname": "Carelse", "link": "https://malcolmc-d8fbe.firebaseapp.com/", "src": "./img/current younglings/malcolm.png", "display": "CYshow" }, { "name": "Athandile", "surname": "Tembile", "link": "https://athandile-pro-profile.firebaseapp.com/", "src": "./img/current younglings/athandile.png", "display": "CYshow" }, { "name": "Keenan", "surname": "Idas", "link": "https://keenan-idas-web-portfolio.firebaseapp.com/", "src": "./img/current younglings/keenan.png", "display": "CYshow" }, { "name": "Zahirah", "surname": "Ismail", "link": "https://zahirah-ismail-e97bb.firebaseapp.com/", "src": "./img/current younglings/zahirah.png", "display": "CYshow" }, { "name": "Zafiera", "surname": "Davids", "link": "https://zafiera-davids-portfolio.firebaseapp.com/", "src": "./img/current younglings/zafiera.png", "display": "CYshow" }, { "name": "Sixolile", "surname": "Mtengwana", "link": "https://smtengwana-absa.firebaseapp.com/", "src": "./img/current younglings/sixolile.png", "display": "CYshow" }, { "name": "Jean-Pierre", "surname": "Olwagen", "link": "https://jpolwagen.firebaseapp.com/", "src": "./img/current younglings/jp.png", "display": "CYshow" }, { "name": "Dewald", "surname": "Mouton", "link": "https://iamdewaldmouton.firebaseapp.com/", "src": "./img/current younglings/dewald.png", "display": "CYshow" }, { "name": "Gert", "surname": "Minnie", "link": "https://profile-site-91eb4.firebaseapp.com/", "src": "./img/current younglings/gert.png", "display": "CYshow" }, { "name": "Lihle", "surname": "Mdikili", "link": "https://lihle-mdikili.firebaseapp.com/", "src": "./img/current younglings/lihle.png", "display": "CYshow" }, { "name": "Aphelele", "surname": "Lupondo", "link": "https://myspasite-101.firebaseapp.com/", "src": "./img/current younglings/aphelele.png", "display": "CYshow" }, { "name": "Vuyo", "surname": "Base", "link": "https://vuyo-base.firebaseapp.com/", "src": "./img/current younglings/vuyo.png", "display": "CYshow" }, { "name": "Nicholas", "surname": "Smith", "link": "https://nicholas-smith.firebaseapp.com/", "src": "./img/current younglings/nicholas.png", "display": "CYshow" }, { "name": "Tazmane", "surname": "Hoon", "link": "https://tazmane-project.firebaseapp.com/", "src": "./img/current younglings/tazmane.png", "display": "CYshow" }, { "name": "", "surname": "", "link": "", "src": "./img/current younglings/alienWorldp1.png", "display": "CYhide" }, { "name": "", "surname": "", "link": "", "src": "./img/current younglings/alienWorldp2.png", "display": "CYhide" }, { "name": "", "surname": "", "link": "", "src": "./img/current younglings/alienWorldp3.png", "display": "CYhide" }];
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
            frame.style.height = '0px';
        }
        else {
            frame.style.height = window.innerHeight + "px";
        }
    }

    $scope.iframeMinimise = function () {
        $scope.setCurrentUrl("");
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