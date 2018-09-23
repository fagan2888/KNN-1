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

        let topk = (KNN.sort(this.data,this.k));
        return KNN.getlabel(topk);
    };
    static getlabel(data) {
        let arr = [];
        data.forEach(flower => {
            arr.push(flower.species);
        });
        return arr.sort((a,b) =>
                arr.filter(v => v===a).length
            - arr.filter(v => v===b).length
        ).pop();
    }

    static sort(data,k) {
        let result = Array(k).fill({ 'dist': Infinity });
        // console.log(result);
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < result.length; j++) {
                if ((data[i]['dist']) < result[j]['dist']) {
                    result.splice(j, 0, data[i]);
                    break;
                }
            }
        }
        result = result.slice(0, k);
        return result;
    }

    distance(x, y) {
        return Math.sqrt((x.sepalLength - y.sepalLength) ** 2 +
            (x.sepalWidth - y.sepalWidth) ** 2 +
            (x.petalLength - y.petalLength) ** 2 +
            (x.petalWidth - y.petalWidth) ** 2);
    };
}