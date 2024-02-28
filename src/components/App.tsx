import React from 'react';

import Sidebar from './sidebar/Sidebar';
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
        <div className="flex divide-x divide-slate-100 bg-white text-slate-800 dark:divide-slate-800 dark:bg-slate-900 dark:text-slate-100">
          <div className="w-60">
            <div className="h-svh min-w-full overflow-auto p-2">
              <Sidebar></Sidebar>
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
        <div className="flex h-svh w-svw items-center justify-center">
          <div className="animate-pulse text-6xl">Loading...</div>
        </div>
      )}
    </>
  );
}

export default App;
