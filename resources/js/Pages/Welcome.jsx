import { Link } from '@inertiajs/react';
import React from 'react';
import Logo from '../components/Logo';
import { Typewriter } from 'react-simple-typewriter';

const Welcome = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <header className="bg-gray-50 dark:bg-gray-800 px-5 sm:px-20 flex flex-row w-full py-3 items-center justify-between">
        <Logo />
        <div className="flex sm:flex-row flex-col gap-2 sm:gap-4">
          <Link
            href="/login"
            className="bg-white text-primary text-sm sm:text-base px-2 text-center sm:px-4 py-2 rounded-md hover:bg-blue-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
          >
            Se connecter
          </Link>
          <Link
            href="/signup"
            className="bg-white text-primary text-sm sm:text-base px-2 text-center sm:px-4 py-2 rounded-md hover:bg-blue-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
          >
            Créer un compte
          </Link>
        </div>
      </header>

      <main className="bg-white dark:bg-gray-900">
        <div className="absolute top-[60%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-0 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-primary text-center dark:text-white">
              <Typewriter
                words={['Créez un compte et commencez']}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p className="mt-4 text-sm sm:text-lg text-gray-600 dark:text-gray-300">
              Rejoignez notre communauté pour vous connecter à d'autres personnes et commencer à profiter des avantages que nous offrons !
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
