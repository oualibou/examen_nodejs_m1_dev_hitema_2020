const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }
/**
 * 
 *var peoples = [
  { "attr1": "bob", "attr2": "pizza" },
  { "attr1": "john", "attr2": "sushi" },
  { "attr1": "larry", "attr2": "hummus" }
];

var index = peoples.map(function(o) { return o.attr1; }).indexOf("john");
console.log("index of 'john': " + index);

var index = peoples.map((o) => o.attr1).indexOf("larry");
console.log("index of 'larry': " + index);

var index = peoples.map(function(o) { return o.attr1; }).indexOf("fred");
console.log("index of 'fred': " + index);

var index = peoples.map((o) => o.attr2).indexOf("pizza");
console.log("index of 'pizza' in 'attr2': " + index);
 */
    updatePeople(id, people) {

        const index = this.peoples.findIndex(
            people => people.id === id
        );
        if(index === -1)return Promise.reject('invalide id');

        this.peoples[index] = people;
        return {isModified: true};
    }
    
    getPeople(filters) {
        // To be implemented!
        console.log(Object.keys(filters).length);
        if(Object.keys(filters).length === 0)
        {
            return this.peoples;
        }
        else
        {
            const index = this.peoples.filter(
                people => people[Object.keys(filters)[0]]===filters[Object.keys(filters)[0]] 
            );
            return index;
        }
    }
}