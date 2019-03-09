console.log('main.js linked');
const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => { //make passenger object// 'seat' them on bus
    const passenger = {
        name: name,
        wallet: wallet,
        isStruggling: isStruggling
    };

    if (seat === 'back') {
        struggleBus.push(passenger);
    } else if (seat === 'front'){
        struggleBus.unshift(passenger);
    };
};

const unloadPassenger = (bus, seat) => { // remove passenger from bus //return that passenger object
    if(seat === 'front'){
        return bus.shift(); //
    } else if (seat === 'back'){
        return bus.pop();
    };
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
        busString +=    `<p>STUGGLING?: ${bus[i].isStruggling}</p>`;
        busString +=    `<hr>`
        busString += `</div>`;
    };
    domPrint('testDiv', busString);
};

const init = () => {
    addPassenger('Keith', 5, true, 'front');
    addPassenger('Frankie', 10, true, 'back');
    addPassenger('Loki', 1, false, 'back');
    addPassenger('Lame Person', 10000, true, 'front');
    addPassenger('Other Lame Person', 0, true, 'back');

    const firstPassenger = unloadPassenger(struggleBus, 'front');
    const secondPassenger = unloadPassenger(struggleBus, 'back');

    busBuilder(struggleBus);
};

init();