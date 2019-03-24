function User(object) {
  name = object.name;
  age = object.age;
  friends = object.friends;

  this.getInfo = function() {
    console.log(`User ${name} is ${age} years old and has ${friends} friends`);
  };
}

const mango = new User({ name: "Mango", age: 2, friends: 20 });
mango.getInfo(); // User Mango is 2 years old and has 20 friends

const poly = new User({ name: "Poly", age: 3, friends: 17 });
poly.getInfo(); // User Poly is 3 years old and has 17 friends
