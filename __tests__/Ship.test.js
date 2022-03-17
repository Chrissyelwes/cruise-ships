const Ship = require("../src/Ship");

describe('Ship', () => {
    it('returns an object', () => {
        expect(new Ship('Violyn')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const ship = new Ship('Violyn');
    
        expect(ship.name).toEqual('Violyn');
    });
    it('sets the startingPort property', () => {
        const ship = new Ship('Violyn', 'Piltover');

        expect(ship.startingPort).toEqual('Piltover');
    });
});