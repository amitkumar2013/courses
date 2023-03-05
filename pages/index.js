import { getCourses } from '../utils/db';
import { useUser } from '@auth0/nextjs-auth0/client';
import Container from '../components/Container';

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
    <Container>
      <div>
        <div>User: {user ? user.email : 'Guest'}</div>
        <h1>Available Courses:</h1>
        <pre>{JSON.stringify(courses, null, 2)}</pre>
      </div>
    </Container>
  );
};
export default Index;
