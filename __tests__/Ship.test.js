const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary");

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let ship;
        let zaun;
        let piltover;
        let itinerary;

        beforeEach(() => {
            zaun = new Port('Zaun');
            piltover = new Port('Piltover');
            itinerary = new Itinerary([zaun,piltover]);
            ship = new Ship(itinerary);
        });

        it('can be instantiated', () => {
            expect(ship).toBeInstanceOf(Object);
        });

    it('has a starting port', () => {

        expect(ship.currentPort).toBe(zaun);
    });

    it('lets ship sail', () => {

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(zaun.ships).not.toContain(ship);

    });

    it('cannot set sail further than the last index in the itinerary', () => {

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('Reached end of itinerary');
    });
   
    it('can dock at a different port', () => {

        ship.setSail()
        ship.dock()

        expect(ship.currentPort).toBe(piltover);
        expect(piltover.ships).toContain(ship);
    });

    it('gets added to Port on instantiation', () => {

        expect(zaun.ships).toContain(ship);
    });
});
});