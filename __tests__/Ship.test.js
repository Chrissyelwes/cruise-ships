const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");

describe('Ship', () => {
    const port = new Port('Zaun');
    const violyn = new Ship(port);

    it('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
    
        expect(violyn.currentPort).toBe(port);
    });
});

describe('setSail', () => {
    const port = new Port('Zaun');
    const violyn = new Ship();

    it('lets ship sail', () => {

        violyn.setSail();

        expect(violyn.currentPort).toBeFalsy();
    });
});