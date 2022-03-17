const Port = require("../src/Port");
const Ship = require("../src/Ship");

describe('Port', () => {
    it('returns an object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const port = new Port('Zaun');
    
        expect(port.portName).toEqual('Zaun');
    });
});

describe('Dock', () => {
    it('can dock at a different port', () => {
        const violyn = new Port('Zaun');
        const ship = new Ship(violyn);

        const piltover = new Port('Piltover');
        ship.dock(piltover)

        expect(ship.currentPort).toBe(piltover);
    });
});