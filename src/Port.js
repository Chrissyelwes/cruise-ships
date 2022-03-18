function Port(name) {
    this.portName = name;
    this.ships = []

    Port.prototype.addShip = function (ship) {
       this.ships.push(ship);
    }

    Port.prototype.removeShip = function (ship) {
        this.ships.splice(this.ships.indexOf(ship), 1);
    };
};

module.exports = Port;