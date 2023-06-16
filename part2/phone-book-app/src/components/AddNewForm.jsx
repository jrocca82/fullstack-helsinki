const AddNewForm = ({
  newName,
  setNewName,
  newPhoneNumber,
  setNewPhoneNumber,
  onSubmit,
}) => (
  <form>
    <h2>Add New:</h2>
    <div>
      name:
      <input onChange={(e) => setNewName(e.target.value)} value={newName} />
    </div>
    <div>
      phone number:
      <input
        onChange={(e) => setNewPhoneNumber(e.target.value)}
        value={newPhoneNumber}
      />
    </div>
    <div>
      <button onClick={onSubmit} type="submit">
        add
      </button>
    </div>
  </form>
);

export default AddNewForm;
