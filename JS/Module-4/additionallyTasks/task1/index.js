const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

console.log(user);

function newKey(object) {
  let key = "mood";
  object[key] = "happy";
}

function newHobby(object) {
  object["hobby"] = "javascript";
}

function notPremium(object) {
  object["premium"] = false;
}

function showKeys(object) {
  const keys = Object.keys(object);
  for (const key of keys) {
    console.log(object[key]);
  }
}

function showEntries(object) {
  const entries = Object.entries(object);
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    console.log(`${key}: ${value}`);
  }
}

newKey(user);
newHobby(user);
notPremium(user);
showKeys(user);
showEntries(user);

console.log(user);
