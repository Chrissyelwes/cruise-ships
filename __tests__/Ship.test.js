const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary");

describe('Ship', () => {
    it('returns an object', () => {
        const port = new Port('Zaun');
        const itinerary = new Itinerary([port]);
        const violyn = new Ship(itinerary);

        expect(violyn).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const port = new Port('Zaun');
        const itinerary = new Itinerary([port]);
        const violyn = new Ship(itinerary);
    
        expect(violyn.currentPort).toBe(port);
    });
});

describe('setSail', () => {
    it('lets ship sail', () => {
        const zaun = new Port('Zaun');
        const piltover = new Port('Piltover');
        const itinerary = new Itinerary([zaun,piltover]);
        const violyn = new Ship(itinerary);

        violyn.setSail();

        expect(violyn.currentPort).toBeFalsy();
        // expect(violyn.previousPort).toBe(port);
    });
    it('cannot set sail further than the last index in the itinerary', () => {
        const zaun = new Port('Zaun');
        const piltover = new Port('Piltover');
        const itinerary = new Itinerary([zaun,piltover]);
        const violyn = new Ship(itinerary);

        violyn.setSail();
        violyn.dock();

        expect(() => violyn.setSail()).toThrowError('Reached end of itinerary');
    });
});

describe('Dock', () => {
    it('can dock at a different port', () => {
        const zaun = new Port('Zaun');
        const piltover = new Port('Piltover');
        const itinerary = new Itinerary([zaun,piltover]);
        const violyn = new Ship(itinerary);

        violyn.setSail()
        violyn.dock()

        expect(violyn.currentPort).toBe(piltover);
    });
});