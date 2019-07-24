module.service("serviceService", function (globalConst, dataService) {

    const result = {};
    result.getBto1 = function () {
        let arr = [];
        for (let i = dataService.ab.b; i >= 1; i--) {
            arr.push(i);
        }
        return arr
    };
    return result

});