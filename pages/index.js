import { getCourses } from '../utils/db';
import { useUser } from '@auth0/nextjs-auth0';

export const getStaticProps = async () => {
  const data = await getCourses();
  return {
    props: {
      courses: JSON.parse(JSON.stringify(data)),
    },
  };
};

const Index = ({ courses }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {
        <div>
          user ? Welcome {user.name}! <a href="/api/auth/logout">Logout</a> :
          Welcome Guest! <a href="/api/auth/login">Login</a>
        </div>
      }
      <h1>Full Courses</h1>
      <pre>{JSON.stringify(courses, null, 2)}</pre>
    </div>
  );
};
export default Index;
