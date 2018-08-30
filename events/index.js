var events = require('events');
var util = require('util');

var Cars = function(model){
    this.model = model;
};

util.inherits(Cars,events.EventEmitter);

var bmw = new Cars('BMW');
var audi = new Cars('audi');

var cars = [bmw,audi];
cars.forEach(function(car){
    car.on('speed',function(text){
        console.log(car.model + " speed is - "+ text);    
    });
});

audi.emit('speed','2432.234');
bmw.emit('speed','1213.234');
