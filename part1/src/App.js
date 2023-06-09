const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.title} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part title={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const calculateExercises = () => {
    let noOfExercises = 0;
    props.parts.forEach((part) => {
      noOfExercises += part.exercises;
    });
    return noOfExercises;
  };

  return <p>Number of exercises {calculateExercises()}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
