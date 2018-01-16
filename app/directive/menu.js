app.directive('menu', function() {
    return {
        templateUrl: "html/menu.html",
        replace: true,
        controller: ['$scope', function($scope) {
            $scope.dis = false;
            $scope.menu = function() {
                if ($scope.dis) {
                    $scope.dis = false
                } else {
                    $scope.dis = true
                }
            }
        }]
    }
})