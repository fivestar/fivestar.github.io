interface ControlButtonProps {
  text: string;
  handleControl: Function;
}

export function ControlButton({
  text,
  handleControl,
}: ControlButtonProps) {
  return (
    <button className="btn timer-control timer-control--button" onClick={() => handleControl()}>{text}</button>
  );
}