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