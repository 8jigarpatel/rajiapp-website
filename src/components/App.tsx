import React from 'react';

import { FaCircleNotch } from 'react-icons/fa';

import Sidebar from './sidebar/Sidebar';
import Dashboard from './Dashboard';

function App() {
  const [theme, setTheme] = React.useState<string>(
    window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
  );

  React.useEffect(() => {
    if (theme === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((thm) => {
      return thm === 'light' ? 'dark' : 'light';
    });
  };

  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [isReady, setIsReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsReady(() => true);
  }, []);

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      {isReady && (
        <div className="flex divide-x divide-slate-100 dark:divide-slate-800">
          <div className="w-60">
            <div className="h-svh min-w-full overflow-auto p-2">
              <Sidebar toggleThemeHandler={toggleTheme}></Sidebar>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-svh overflow-auto p-2">
              <Dashboard></Dashboard>
            </div>
          </div>
        </div>
      )}
      {!isReady && (
        <div className="flex h-svh w-svw animate-pulse items-center justify-center text-6xl">
          <div className="">Loading</div>
          <FaCircleNotch className="ml-3 mt-3 animate-spin text-5xl" />
        </div>
      )}
    </div>
  );
}

export default App;
