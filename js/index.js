const calculate = () => {
    let a, b;

    a = +document.getElementById("first-number").value;
    b = +document.getElementById("second-number").value;

    const sum = a + b;
    const subtractionAuB = a - b;
    const subtractionBuA = b - a;
    const multiplication = a * b;
    const divisionAuB = Number(a / b).toFixed(2);
    const divisionBuA = Number(b / a).toFixed(2);
    const powerAuB = a ** b;
    const powerBuA = b ** a;

    function factorize(num) {
        if (num === 0 || num === 1)
          return 1;
        for (var i = num - 1; i >= 1; i--) {
          num *= i;
        }

        let result = num % 1 !== 0 ? num.toFixed(2) : num;
        return result;
    }

    function percentage(numA, numB) {
        if (numA === 0 && numB === 0) { return 0 };
        
        let calc = numA / numB * 100;
        let result = calc % 1 !== 0 ? calc.toFixed(2) : calc;

        return result;
    }

    function averange(numA, numB) {
        if (numA === 0 && numB === 0) { return 0 };
        media = (numA + numB) / 2;
        
        return media;
    }

    let resSum = document.getElementById('sum');
    resSum.appendChild(document.createTextNode(sum));

    let resSubAuB = document.getElementById('subAuB');
    resSubAuB.appendChild(document.createTextNode(subtractionAuB));

    let resSubBuA = document.getElementById('subBuA');
    resSubBuA.appendChild(document.createTextNode(subtractionBuA));

    let resMult = document.getElementById('mult');
    resMult.appendChild(document.createTextNode(multiplication));

    let resDivAuB = document.getElementById('divAuB');
    resDivAuB.appendChild(document.createTextNode(divisionAuB));

    let resDivBuA = document.getElementById('divBuA');
    resDivBuA.appendChild(document.createTextNode(divisionBuA));

    let resPotAuB = document.getElementById('potAuB');
    resPotAuB.appendChild(document.createTextNode(powerAuB));

    let resPotBuA = document.getElementById('potBuA');
    resPotBuA.appendChild(document.createTextNode(powerBuA));

    let resSRootA = document.getElementById('sRootA');
    resSRootA.appendChild(document.createTextNode(Math.sqrt(a).toFixed(2)));

    let resSRootB = document.getElementById('sRootB');
    resSRootB.appendChild(document.createTextNode(Math.sqrt(b).toFixed(2)));

    let resFactA = document.getElementById('factorialA');
    resFactA.appendChild(document.createTextNode(factorize(a)));

    let resFactB = document.getElementById('factorialB');
    resFactB.appendChild(document.createTextNode(factorize(b)));

    let resPercentAuB = document.getElementById('percentAuB');
    resPercentAuB.appendChild(document.createTextNode(percentage(a, b)));

    let resPercentBuA = document.getElementById('percentBuA');
    resPercentBuA.appendChild(document.createTextNode(percentage(b, a)));

    let resAverage = document.getElementById('average');
    resAverage.appendChild(document.createTextNode(averange(a, b)));
};
