import { useState } from "react";

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

const Persons = () => {
  const [person, setPerson] = useState({});
  return (
    <div>
      <h3>Current Recipes</h3>
      <button onClick={() => setPerson(users)}>Users</button>
      <button onClick={() => setPerson(newUser)}>newUsers</button>

      <ul>
        {Object.keys(person).map((material) => (
        <li>{material}: {person[material]}
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Persons;