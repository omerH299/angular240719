module.controller("historyCtrl", HistoryCtrl);

function HistoryCtrl($scope, globalConst, dataService, apiService) {

    $scope.$watch('numbers.a', function (newA, oldA) {
        $scope.aNumbers.push(newA);
    });

    $scope.$watch('numbers.b', function (newB, oldB) {
        $scope.bNumbers.push(newB);
    });

    $scope.numbers = dataService.ab;
    $scope.aNumbers = [];
    $scope.bNumbers = [];
}
