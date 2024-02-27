import React from 'react';
import Button from './ui/Button';

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
      <div className="">Hello</div>
      <div>
        <Button text="Change Theme" onClick={toggleTheme} />
      </div>
    </>
  );
}

export default Sidebar;
