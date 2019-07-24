
module.controller("parentCtrl", ParentCtrl)

function ParentCtrl($scope) {

    $scope.name = ''
    $scope.phone = ''
    $scope.age = '';

    $scope.getClass = function() {
        if ($scope.name != '' && $scope.phone != '' && $scope.age  < 18  )
        {
            return 'illegalAge'
        }
        else if ($scope.name != '' && $scope.phone != '' && $scope.age  != '')
        {
            return 'ok'
        }
        else if($scope.name == '' && $scope.phone == '' && $scope.age  == '' )
        {
            return 'missing'
        }
        else{
            return 'halfMissing'
        }
    }
}
