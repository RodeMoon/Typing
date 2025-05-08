(function () {
    var num1 = 55;
    var num2 = 45;
    var num3 = 30;
    function findBig(a, b, c) {
        var mayor = a;
        var nameMayor = "a";
        if (b > mayor) {
            mayor = b;
            nameMayor = "b";
        }
        if (c > mayor) {
            mayor = c;
            nameMayor = "c";
        }
        console.log("Biggest number:", mayor);
        console.log("Name:", nameMayor);
    }
    findBig(num1, num2, num3);
})();
