interface ControlButtonProps {
  text: string;
  handleControl: Function;
  disabled?: boolean;
}

export function ControlButton({
  text,
  handleControl,
  disabled = false,
}: ControlButtonProps) {
  return (
    <button className="btn timer-control timer-control--button" onClick={() => handleControl()} disabled={disabled}>{text}</button>
  );
}