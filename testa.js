class Fordon {
    constructor() {
    }
    render() {
        return "hej";
    }
}

class Bil extends Fordon {
    constructor() {
        super();
    }
}

// import Bil from './testa';
// let volvo = new Bil;
// let ut = volvo.render();
// console.log(ut);

export default Bil
