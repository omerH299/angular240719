module.controller("aCtrl", ACtrl)

function ACtrl($scope, globalConst, dataService, apiService)
{
    $scope.$watch('numbers.a', function(newA , oldA){
        $scope.getNumbers()
    })
    $scope.numbers = dataService.ab 
    $scope.aError = globalConst.aError
    $scope.aNumbers = []
    $scope.getNumbers = function(){
        $scope.aNumbers = apiService.get1toA();
    }
}

