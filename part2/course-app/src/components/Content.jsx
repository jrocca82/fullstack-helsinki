import Part from "./Part";

const Content = ({ course }) => (
  <>
    {course.parts.map((part) => {
      return <Part key={part.id} part={part} />;
    })}
  </>
);

export default Content;
