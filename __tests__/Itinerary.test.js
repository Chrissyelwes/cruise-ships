const Itinerary = require("../src/Itinerary");
const Port = require("../src/Port");

describe('Itinerary', () => {
    it('returns an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('has a ports property', () => {
        const zaun = new Port('Zaun');
        const piltover = new Port('Piltover');

        const itinerary = new Itinerary([zaun, piltover]);

        expect(itinerary.ports).toEqual([zaun, piltover]);
    });
});