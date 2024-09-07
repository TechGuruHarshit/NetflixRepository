import { useState } from "react";
export const DrivedState = () => {
  const [users, setUsers] = useState( [
    { name: "Harshit", age: 22 },
    { name: "Rahul", age: 24 },
    { name: "Tushar", age: 46 },
    { name: "Golu", age: 26 }
  ]);
  const usercount=users.length;
  const averageAge=users.reduce((accum,currElem)=>accum+currElem.age,0)/usercount;
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((currElem, index) => {
          // console.log("Current array:", arr); 
          return (
            <li key={index}>
              {currElem.name} - {currElem.age} years old
            </li>
          );
        })}
      </ul>
      <p>Total user:{usercount}</p>
      <p>Average age:{averageAge}</p>
    </div>
  );
};
export default DrivedState;
