import { useContext } from "react";
import { ControlsDisabledContext } from "./ControlsDisabledContext";

interface ControlButtonProps {
  text: string;
  handleControl: Function;
}

export function ControlButton({
  text,
  handleControl,
}: ControlButtonProps) {
  const disabled = useContext(ControlsDisabledContext);

  return (
    <button className="btn timer-control timer-control--button" onClick={() => handleControl()} disabled={disabled}>{text}</button>
  );
}