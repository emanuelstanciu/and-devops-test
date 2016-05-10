function envMgr($scope, $http) {

    $scope.messages = {};

    $scope.init = function () {
        $scope.messages.text = 'test';
    };
};