function devopsTest($scope, $http) {

    $scope.messages = {};

    $scope.init = function () {
        $scope.messages.text = 'Front end build passed';
    };
};