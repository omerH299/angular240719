
module.controller("inputCtrl", InputCtrl)

function InputCtrl($scope, globalConst, dataService, apiService)
{
    $scope.numbers = dataService.ab
    $scope.ds = dataService
}