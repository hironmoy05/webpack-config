const users = {
  name: "Hironmoy Dhar",
  age: 32,
  job: "Web developer"
}

const newUser = {
  ...users, 
  name: "Gaurav",
  age: 31,
  job: "Full Stack Developer"
}

console.log(users);
console.log(newUser);