app.directive('swiper', [function() {
    return {
        replace: true,
        templateUrl: `html/swiper.html`,
        controller: ['$scope', '$ionicSlideBoxDelegate', function($scope, $ionicSlideBoxDelegate) {
            $scope.goTo = function(index) {
                $ionicSlideBoxDelegate.slide(index, 1000)
            }
        }]
    }
}])