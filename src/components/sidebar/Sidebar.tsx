import React from 'react';

import { TbBrowserCheck } from 'react-icons/tb';
import {
  FaCalendarAlt,
  FaPaintRoller,
  FaSignOutAlt,
  FaUsers,
} from 'react-icons/fa';

import Button from '../ui/Button';
import { FaGear, FaGears } from 'react-icons/fa6';

function Sidebar() {
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

  return (
    <>
      <button className="mx-auto flex flex-row content-end gap-2 p-2 text-2xl">
        <h5 className="my-auto text-green-600">
          <TbBrowserCheck />
        </h5>
        <h5 className="font-semibold">raji app</h5>
      </button>

      <div className="space-y-2">
        <Button
          text="Appointments"
          onClick={toggleTheme}
          icon={FaCalendarAlt}
        />
        <Button text="Clients" onClick={toggleTheme} icon={FaUsers} selected />
        <Button text="Settings" onClick={toggleTheme} icon={FaGear} />
        <Button
          text="Change Theme"
          onClick={toggleTheme}
          icon={FaPaintRoller}
        />
        <Button
          className="bg-red-600 text-white hover:bg-red-700 hover:dark:bg-red-700"
          text="Log out"
          onClick={toggleTheme}
          icon={FaSignOutAlt}
        />
      </div>
    </>
  );
}

export default Sidebar;
