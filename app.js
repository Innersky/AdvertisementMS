(function() {
    angular.module('AdvertisementMs', [])
        .service('adService', function($interval) {
            var currentAds = {
                1: {
                    startTime: new Date().getTime(),
                    duration: 0,
                    base: 30,
                    click: 0
                },
                5: {
                    startTime: new Date().getTime(),
                    duration: 0,
                    base: 30,
                    click: 0
                },
                7: {
                    startTime: new Date().getTime(),
                    duration: 0,
                    base: 30,
                    click: 0
                }
            };

            var advertisers = [
                {
                    id: 1,
                    name: 'BMW',
                    histories: getRandomHis()
                },
                {
                    id: 2,
                    name: 'Toyota',
                    histories: getRandomHis()
                },
                {
                    id: 3,
                    name: 'Honda',
                    histories: getRandomHis()
                },
                {
                    id: 4,
                    name: 'Buick',
                    histories: getRandomHis()
                },
                {
                    id: 5,
                    name: 'Ford',
                    histories: getRandomHis()
                },
                {
                    id: 6,
                    name: 'GMC',
                    histories: getRandomHis()
                },
                {
                    id: 7,
                    name: 'Benz',
                    histories: getRandomHis()
                },
                {
                    id: 8,
                    name: 'Chevrolet',
                    histories: getRandomHis()
                }
            ];

            this.getAll = function() {
                return advertisers;
            };
            this.getCurrent = function() {
                return currentAds;
            };

            var clicks;
            clicks = $interval(function() {
                currentAds[1].click += getRandomInt(100,700);
                currentAds[1].duration += 1;
                currentAds[5].click += getRandomInt(300,1000);
                currentAds[5].duration += 1;
                currentAds[7].click += getRandomInt(100,500);
                currentAds[7].duration += 1;

            }, 1000);
        })
        .controller('advertiserController', function($scope, adService) {
            $scope.allAdvertisers = adService.getAll();
            $scope.currentAds = adService.getCurrent();

            $scope.selected = 1;
            $scope.isSet = function(id) {
                return $scope.selected === id;
            };
            $scope.setTab = function(id) {
                $scope.selected = id;
            };
            $scope.isRun = function(id) {
                return $scope.currentAds[id] != null;
            };
        });
    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    //initiate random history data
    function getRandomHis() {
        var his = [];

        var n = getRandomInt(3,20);

        var start = new Date(2015, getRandomInt(1, 9), getRandomInt(1, 31)).getTime();

        for(var i = 0; i < n; i++) {
            if(start > new Date().getTime())
                break;
            start = start + getRandomInt(3600000, 3600000000);
            var duration = getRandomInt(3600, 360000);
            his.push({
                startTime: start,
                duration: duration,
                base: getRandomInt(5, 20),
                click: getRandomInt(Math.floor(duration * 0.5), duration * 2)
            });


        }
        return his.reverse();
    }
})();