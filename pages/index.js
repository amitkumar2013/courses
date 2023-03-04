import { getCourses } from '../utils/db';

export const getStaticProps = async () => {
  const data = await getCourses();
  return {
    props: {
      courses: JSON.parse(JSON.stringify(data)),
    },
  };
};

const Index = ({ courses }) => {
  return (
    <div>
      <h1>Courses</h1>
      <pre>{JSON.stringify(courses, null, 2)}</pre>
    </div>
  );
};
export default Index;
