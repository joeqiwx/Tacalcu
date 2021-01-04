getStops = (flights) => {
    switch (flights.length) {
        case 1:
            return "Direct"
        case 2:
            return "1 stop"
        default:
            return `${flights.length - 1} stops`
    }
}


const flights = [{ origin: 'MEL', destination: 'CAN' }];
const flights2 = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'CAN', destination:'PVG' }];
const flights3 = [{ origin: 'MEL', destination: 'CAN' }, {}, {} ,{ origin: 'CAN',destination: 'PVG' }];
console.log(getStops(flights3));

calTax = (num) => {
    return Math.min(Math.max((num-18200) * 0.19,  0), 3572 )
    +      Math.min(Math.max((num-37000) * 0.325, 0), 17225)
    +      Math.min(Math.max((num-90000) * 0.37,  0), 33299)
    +      Math.max((num-180000)* 0.45,  0);
}
console.log(calTax(150000));