import { useState, useEffect, useMemo } from "react";

const App = () => {
  const anecdotes = useMemo(
    () => [
      "If it hurts, do it more often.",
      "Adding manpower to a late software project makes it later!",
      "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      "Premature optimization is the root of all evil.",
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      "The only way to go fast, is to go well.",
    ],
    []
  );

  const points = new Array(anecdotes.length).fill(0);

  const [votes, setVotes] = useState(points);
  const [selected, setSelected] = useState(0);
  const [mostPopular, setMostPopular] = useState("");

  const handleClick = () => setSelected(Math.floor(Math.random() * 8));

  useEffect(() => {
    const findMostPopular = () => {
      const maxVotes = Math.max(...votes);
      votes.map((vote, i) => {
        if (vote === maxVotes) {
          setMostPopular(anecdotes[i]);
        }
        return i;
      });
    };
    findMostPopular();
  }, [votes, anecdotes]);

  return (
    <div>
      <h1>anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button
        onClick={() => {
          const newVotes = [...votes];
          newVotes[selected] += 1;
          setVotes(newVotes);
        }}
      >
        vote
      </button>
      <button onClick={handleClick}>Next anecdote</button>
      <h1>most popular anecdote</h1>
      <p>{mostPopular}</p>
      <p>has {Math.max(...votes)} votes</p>
    </div>
  );
};

export default App;
