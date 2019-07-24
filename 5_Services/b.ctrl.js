module.controller("bCtrl", BCtrl)

function BCtrl($scope, globalConst, dataService, apiService,serviceService)
{
    $scope.$watch('numbers.b', function(newB , oldB){
        if($scope.numbers.b > 1)
            $scope.getNumbers()
    })
    $scope.numbers = dataService.ab 
    $scope.bError = globalConst.bError
    $scope.bNumbers = []
    $scope.getNumbers = function(){
        $scope.bNumbers = serviceService.getBto1();
    }
}

