import './Button.css';

export interface ButtonProps {
  label: string;
}

export function ShButton({ label }: ButtonProps) {
  return <button className="sh-button">{label}</button>;
}
