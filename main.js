console.log('main.js linked');
const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => { //make passenger object// 'seat' them on bus
    const passenger = {
        name: name,
        wallet: wallet,
        isStruggling: isStruggling,
        seat: seat
    };

    if (seat === 'back') {
        struggleBus.push(passenger);
    } else if (seat === 'front'){
        struggleBus.unshift(passenger);
    } else if (seat === 'middle'){
        struggleBus.splice(1, 0, passenger);
    };
};

const unloadPassenger = (bus, seat) => { // remove passenger from bus //return that passenger object
    if(seat === 'front'){
        return bus.shift(); //
    } else if (seat === 'back'){
        return bus.pop();
    };
};

const fareCollection = (bus) => { //loop over passengers // given the bus cost 5$ // if passenger can afford charge them // if not kick them off the bus
    const busFare = 5;
    const validPassengers = [];
    
    bus.forEach((passenger) => {
        if (passenger.wallet >= busFare){
            passenger.wallet -= busFare;
            validPassengers.push(passenger);
        };
    });

    return validPassengers;
};

const domPrint = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const busBuilder = (bus) => {
    let = busString = ' ';
    for (let i=0; i< bus.length; i++){
        busString += `<div class = "busSeat">`;
        busString +=    `<h4>NAME: ${bus[i].name}</h4>`;
        busString +=    `<p>$$: ${bus[i].wallet}</p>`;
        busString +=    `<p>STRUGGLING?: ${bus[i].isStruggling}</p>`;
        busString +=    `<p>SEAT: ${bus[i].seat}</p>`
        busString +=    `<hr>`
        busString += `</div>`;
    };
    domPrint('testDiv', busString);
};

const init = () => {
    addPassenger('Keith', 5, true, 'back');
    addPassenger('Frankie', 10, true, 'front');
    addPassenger('Loki', 6, false, 'back');
    addPassenger('Mom', 10, false, 'middle');
    addPassenger('Dad', 7, false, 'front');
    addPassenger('A bum', 0, true, 'middle')
    // addPassenger('middledude', 15, true, 'middle');

    // const firstPassenger = unloadPassenger(struggleBus, 'front');
    // const lastPassenger = unloadPassenger(struggleBus, 'back');

    const paidBus = fareCollection(struggleBus);

    busBuilder(paidBus);

};

init();