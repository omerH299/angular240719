module.factory("apiService", function(globalConst,dataService) {
    const result = {}
    result.get1toA = function(){
        arr = []
        for(let i=1 ; i<=dataService.ab.a ; i++)
            arr.push(i);
        return arr
    }
    return result
})