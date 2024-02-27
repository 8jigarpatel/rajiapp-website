import { MouseEventHandler } from 'react';

interface IButtonProps {
  text: string;
  onClick: MouseEventHandler;
}

function Button(props: IButtonProps) {
  const { text, onClick } = props;
  return (
    <button
      className="w-full border rounded p-1 border-slate-500 dark:hover:bg-slate-600 hover:bg-slate-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
