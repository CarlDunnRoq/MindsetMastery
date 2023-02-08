class Fibonacci {

    // Where does your sequence start by default?
    //Initialize fib seeds
    constructor() {
        this.previous = 0;
        this.current = 1;
    }

    // Returns the next Fibonacci number in the current sequence
    next() {
        //Calculate the next fib number
        const next = this.previous + this.current;
        //Move on the sequence
        this.previous = this.current;
        this.current = next;
        //Return the calculated fib number
        return next;
    }

    // Initializes the sequence with number to start from
    init(seed) {
        //Reset seeds back from the start
        this.previous = 0;
        this.current = 1;
        while (this.current < seed) {
            this.next();
        }
        //Check if this is a real fib number
        if (this.current != seed) {
            throw new Error('Not a real fib number');
        }
    }
    
     // Returns the Fibonacci number further on in the sequence
    skip(forward) {
        if (forward < 0) {
            throw new Error('Only positive intergers')
        }
        for (let i = 0; i < forward; i++) {
            this.next();
       }
       return this.current;
    }

}

module.exports = Fibonacci;