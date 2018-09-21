class KNN {
    constructor(data, k) {
        this.data = data;
        this.k = k;
    };
    train() {
        //modify data if necessary
    };
    predict(x) {
        this.data.forEach(flower => {
            flower['dist'] = this.distance(x, flower);
        });

        this.data.sort((a, b) => {
            return (a['dist'] > b['dist']);
        });

        let result = this.data.slice(0, (this.k)).reduce((acc, obj) => {
            var key = obj['species'];
            if (!acc[key]) {
                acc[key] = 0;
            }
            acc[key]++;
            return acc;
        }, {});

        return result;

        // return result.data.sort((a, b) => {
        //     return (a['key'] < b['key']);
        // });
    };

    // groupBy(objectArray, property) {
    //     return objectArray.reduce(function(acc, obj) {
    //         var key = obj[property];
    //         if (!acc[key]) {
    //             acc[key] = [];
    //         }
    //         acc[key].push(obj);
    //         return acc;
    //     }, {});
    // }

    distance(x, y) {
        return Math.sqrt((x.sepalLength - y.sepalLength) ** 2 +
            (x.sepalWidth - y.sepalWidth) ** 2 +
            (x.petalLength - y.petalLength) ** 2 +
            (x.petalWidth - y.petalWidth) ** 2);
    };


}
