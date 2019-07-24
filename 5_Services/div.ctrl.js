module.controller("divCtrl", DivCtrl)

function DivCtrl($scope, globalConst, dataService, apiService)
{
    $scope.numbers = dataService.ab 
    $scope.divError = globalConst.divideError
}