console.log('main.js linked');
const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => { //make passenger and seat them on bus
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
        busString +=    `<h4>${bus[i].name}</h4>`;
        busString +=    `<p>${bus[i].wallet}</p>`;
        busString +=    `<p>${bus[i].isStruggling}</p>`;
        busString += `</div>`;
    };
    domPrint('testDiv', busString);
};

const init = () => {
    addPassenger('Keith', 5, true, 'front');
    busBuilder(struggleBus);
    console.log(struggleBus);
};

init();