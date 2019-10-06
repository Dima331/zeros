module.exports = function zeros(expression) {
    expression = expression.split('*');

    var tmpFive = 0;
    var tmpTwo = 0;
    var tmpNumber = 0;

    for (var i = 0; i < expression.length; i++) {
        if (expression[i].indexOf('!!') == -1) {
            tmpNumber = +expression[i].replace('!', "")
            for (var j = tmpNumber; j > 0; j--) {
                var tmpNumber = j;
                while (tmpNumber % 5 == 0) {
                    tmpNumber /= 5;
                    tmpFive++;
                }
                while (tmpNumber % 2 == 0) {
                    tmpNumber /= 2;
                    tmpTwo++;
                }
            }
        } else {
            tmpNumber = +expression[i].replace('!!', "")
            for (var j = tmpNumber; j > 0; j -= 2) {
                var tmpNumber = j;
                while (tmpNumber % 5 == 0) {
                    tmpNumber /= 5;
                    tmpFive++;
                }
                while (tmpNumber % 2 == 0) {
                    tmpNumber /= 2;
                    tmpTwo++;
                }
            }
        }
    }
    if (tmpTwo > tmpFive) {
        return tmpFive
    } else {
        return tmpTwo
    }
}