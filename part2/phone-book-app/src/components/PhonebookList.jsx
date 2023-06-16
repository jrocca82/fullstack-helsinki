import React from "react";

const PhonebookList = ({ filter, persons }) => (
  <>
    <h2>Numbers</h2>
    {filter
      ? persons
          .filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((person) => (
            <p key={person.id}>
              {person.name} {person.number}
            </p>
          ))
      : persons.map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        ))}
  </>
);

export default PhonebookList;
