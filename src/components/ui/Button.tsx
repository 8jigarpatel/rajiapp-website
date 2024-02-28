import { MouseEventHandler } from 'react';

import { twMerge } from 'tailwind-merge';
import { IconType } from 'react-icons';

interface IButtonProps {
  text: string;
  onClick?: MouseEventHandler;
  icon: IconType;
  selected?: boolean;
  className?: string;
}

function Button(props: IButtonProps) {
  const { text, onClick, className, selected, icon: Icon } = props;
  return (
    <button
      className={twMerge(
        'flex w-full gap-3 rounded p-2 pl-3 text-left transition-all duration-200 hover:bg-slate-200 hover:dark:bg-slate-700',
        className,
        selected && 'bg-slate-200 font-semibold dark:bg-slate-950',
      )}
      onClick={onClick}
    >
      <Icon className="my-auto" />
      {text}
    </button>
  );
}

export default Button;
