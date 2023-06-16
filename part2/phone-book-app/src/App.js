import { useState } from "react";
import FilterInput from "./components/FilterInput";
import AddNewForm from "./components/AddNewForm";
import PhonebookList from "./components/PhonebookList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filter, setFilter] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (newName === "" || newPhoneNumber === "") {
      return;
    }
    for (let i = 0; i < persons.length; i++) {
      if (newName.toLowerCase() === persons[i].name.toLowerCase()) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }
    setPersons(persons.concat({ name: newName, number: newPhoneNumber }));
    setNewName("");
    setNewPhoneNumber("");
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <FilterInput filter={filter} setFilter={setFilter} />
      <AddNewForm
        newName={newName}
        setNewName={setNewName}
        newPhoneNumber={newPhoneNumber}
        setNewPhoneNumber={setNewPhoneNumber}
        onSubmit={onSubmit}
      />
      <PhonebookList filter={filter} persons={persons} />
    </div>
  );
};

export default App;
