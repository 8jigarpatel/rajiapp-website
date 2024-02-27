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
        <div className="flex">
          <div className="w-60">
            <div className="min-w-full bg-gray-50-400 h-svh p-2 overflow-auto">
              <Sidebar></Sidebar>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-gray-200 h-svh p-2 overflow-auto">
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
