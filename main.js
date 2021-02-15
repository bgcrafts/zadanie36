let f = function (a, b) {

    if (a == 20 || b == 20) {
        return true;
    }

    else if (a + b < 20 || a + b == 20) {
        return true;
    }
}
console.log(f(5,6));
