const Itinerary = require("../src/Itinerary");
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

describe('addShip', () => {
    it('adds a Ship that docks at Port', () => {
        const port = new Port('Zaun');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
});

describe('removeShip', () => {
    it('removes a Ship from a Port', () => {
        const port = new Port('Zaun');
        const violyn = {};
        const jaymel = {};

        port.addShip(violyn);
        port.addShip(jaymel);
        port.removeShip(jaymel);

        expect(port.ships).not.toContain(jaymel);
    });
});