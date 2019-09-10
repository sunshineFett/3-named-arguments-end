const makePerson = ({ firstName, age, lastName, job }) => {
  return {
    name: firstName + " " + lastName,
    age,
    job
  };
};

const dev = makePerson({
  firstName: "Scott",
  lastName: "Tolinski",
  age: 32,
  job: "Web Dev"
});

const mgr = makePerson({
  firstName: "Sunny",
  lastName: "Wear",
  age: 28,
  job: "Dev Mgr"
});

const dba = makePerson({
  firstName: "Guy",
  lastName: "Dater",
  age: 28,
  job: "DBA"
});

console.log(dev);
console.log(mgr);
console.log(dba);
