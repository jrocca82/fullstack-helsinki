import { useState, useEffect } from "react";
import axios from "axios";
import FilterInput from "./components/FilterInput";
import AddNewForm from "./components/AddNewForm";
import PhonebookList from "./components/PhonebookList";

const App = () => {
  const [persons, setPersons] = useState([]);
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

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
