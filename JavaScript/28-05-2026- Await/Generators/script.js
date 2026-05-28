function* ticketCounter(){
    let ticket = 1;
    while(true) {
        yield ticket ++;
    }
}
let counter = ticketCounter();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
