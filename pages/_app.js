import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <div className="min-h-screen w-full flex flex-col bg-indigo-400 text-white">
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
};

export default MyApp;
