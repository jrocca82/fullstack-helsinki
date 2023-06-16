import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ course }) => {
  const total = course.parts.reduce((s, p) => s + p.exercises, 0);

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total sum={total} />
    </>
  );
};

export default Course;
