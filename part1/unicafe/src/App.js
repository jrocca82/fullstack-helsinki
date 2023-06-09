import { useState } from "react";

const StatisticLine = ({ title, value }) => {
  if (title === "positive") {
    return (
      <tr>
        <td>{title}</td>
        <td>{value.toFixed(2) * 100}%</td>
      </tr>
    );
  }

  if (title === "average") {
    return (
      <tr>
        <td>{title}</td>
        <td>{value.toFixed(1)}</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{title}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  return (
    <>
      <h2>statistics</h2>
      <table>
        <StatisticLine title="good" value={good} />

        <StatisticLine title="neutral" value={neutral} />

        <StatisticLine title="bad" value={bad} />

        <StatisticLine title="total" value={total} />

        <StatisticLine title="average" value={average} />

        <StatisticLine title="positive" value={positive} />
      </table>
    </>
  );
};

const Button = ({ title, handleClick }) => {
  return <button onClick={handleClick}>{title}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateAverage = () => {
    return (good + bad * -1) / total;
  };

  const calculatePositive = () => {
    return good / total;
  };

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button
          handleClick={() => {
            setGood(good + 1);
            setTotal(good + neutral + bad);
          }}
          title="good"
        />
        <Button
          handleClick={() => {
            setNeutral(neutral + 1);
            setTotal(good + neutral + bad);
          }}
          title="neutral"
        />
        <Button
          handleClick={() => {
            setBad(bad + 1);
            setTotal(good + neutral + bad);
          }}
          title="bad"
        />
      </div>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={calculateAverage()}
          positive={calculatePositive()}
        />
      )}
    </div>
  );
};

export default App;
