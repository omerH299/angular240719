
module.controller("sumCtrl", SumCtrl)

function SumCtrl($scope, globalConst, dataService, apiService)
{
    $scope.numbers = dataService.ab 
    $scope.getColor = function()
    {
        if(dataService.color == "green")
        {
            if($scope.numbers.a + $scope.numbers.b < 0)
                return "red"
            else return "green"    
        }
        else 
        {
            if($scope.numbers.a + $scope.numbers.b < 0)
                return "brown"
            else return "blue" 
        }
    }
}