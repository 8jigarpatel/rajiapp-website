import { MouseEventHandler } from 'react';

import { TbBrowserCheck } from 'react-icons/tb';
import {
  FaCalendarAlt,
  FaPaintRoller,
  FaSignOutAlt,
  FaUsers,
} from 'react-icons/fa';

import ButtonOld from '../ui/ButtonOld';
import { FaGear } from 'react-icons/fa6';
import { Button } from '../ui/button';

interface ISidebarProps {
  toggleThemeHandler: MouseEventHandler;
}

function Sidebar(props: ISidebarProps) {
  const { toggleThemeHandler } = props;

  return (
    <>
      <button className="mx-auto flex flex-row content-end gap-2 p-2 text-2xl">
        <h5 className="my-auto text-green-600">
          <TbBrowserCheck />
        </h5>
        <h5 className="font-semibold">raji app</h5>
      </button>

      <div className="space-y-2">
        <ButtonOld
          text="Appointments"
          icon={FaCalendarAlt}
          onClick={toggleThemeHandler}
        />
        <ButtonOld
          text="Clients"
          icon={FaUsers}
          onClick={toggleThemeHandler}
          selected
        />
        <ButtonOld text="Settings" onClick={toggleThemeHandler} icon={FaGear} />
        <ButtonOld
          text="Change Theme"
          icon={FaPaintRoller}
          onClick={toggleThemeHandler}
        />
        <ButtonOld
          className="bg-red-600 text-white hover:bg-red-700 dark:hover:bg-red-700"
          text="Log out"
          icon={FaSignOutAlt}
          onClick={toggleThemeHandler}
        />
        <Button>Shad cn button</Button>
      </div>
    </>
  );
}

export default Sidebar;
