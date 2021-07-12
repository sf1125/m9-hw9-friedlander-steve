
class Desserts {
    constructor (type, calories) {
        this.type = type;
        this.calories = calories;
    }
}

var myDesserts = new Desserts('cake', '900 calories');
var myDesserts2 = new Desserts('Pie', 1000);
class IceCream extends Desserts {
    constructor (flavor, scoops, type, calories) {
        super(type, calories);
        this.flavor = flavor;
        this.scoops = scoops;  
    }

    includeSpoon() {
        console.log('Here is your spoon!');
    }
}

var vanillaIceCream = new IceCream('vanilla', '3', 'Ice Cream', '800');

vanillaIceCream.includeSpoon();

