const person = {
    name: 'Alice',
    greet: function(greeting, punctuation) {
        console.log(`${greeting}, I'm ${this.name}${punctuation}`);
    }
};

const anotherPerson = { name: 'Bob' };

person.greet.call(anotherPerson, 'Hello', '!');

person.greet.apply(anotherPerson, ['Hi', '.']); 

const boundGreet = person.greet.bind(anotherPerson);
boundGreet('Hey', '?'); 

const boundAsyncGreet = person.greet.bind(anotherPerson, 'Async hello');
setTimeout(boundAsyncGreet, 300, '!'); 