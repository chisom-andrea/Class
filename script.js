class Animal {
    constructor(eyes, nose, ears, mouth, hands, legs){
        this.eyes=eyes
        this.nose=nose
        this.ears=ears
        this.mouth=mouth
        this.hands=hands
        this.legs=legs
    }

    see(eyes){
        console.log('can see')
    }
    smell(nose){
        console.log('can smell')
    }
    hear(){
        console.log('can hear')
    }
    eat(mouth){
        console.log('can eat')
    }
    hands(grab){
        console.log('can grab')
    }
    legs(move){
        console.log('can move')
    }
}

const pig = new Animal()
