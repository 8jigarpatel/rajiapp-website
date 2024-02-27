import React from 'react';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [isReady, setIsReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsReady(() => true);
  }, []);

  return (
    <>
      {isReady && (
        <div className="flex text-black dark:text-white">
          <div className="w-60 bg-slate-200 dark:bg-slate-800">
            <div className="min-w-full h-svh p-2 overflow-auto">
              <Sidebar></Sidebar>
            </div>
          </div>
          <div className="flex-1 bg-slate-100 dark:bg-slate-700">
            <div className="h-svh p-2 overflow-auto">
              <Dashboard></Dashboard>
            </div>
          </div>
        </div>
      )}
      {!isReady && (
        <div className="w-svw h-svh flex justify-center items-center">
          <div className="text-6xl animate-pulse">Loading...</div>
        </div>
      )}
    </>
  );
}

export default App;
