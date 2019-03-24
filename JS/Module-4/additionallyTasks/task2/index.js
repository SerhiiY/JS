const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
};

function maxResult(object) {
  const entries = Object.entries(object);
  let key = 0;
  let value = 0;
  let mas = [];
  let i = 0;
  for (const entry of entries) {
    if(entry[1] > value){
      key = entry[0];
      value = entry[1];
    }
  }
    console.log(`${key}: ${value}`);
}

maxResult(tasksCompleted);
