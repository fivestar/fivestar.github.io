export function toSeconds(timeString: string): number {
  const parts = timeString.split(':');
  if (parts.length !== 2) {
    throw new TypeError('Invalid time format. Expected "MM:SS".');
  }

  const [minutes, seconds] = parts.map(Number);
  if (isNaN(minutes) || isNaN(seconds) || Math.abs(seconds) >= 60) {
    throw new TypeError(
      'Invalid time values. Expected "MM:SS" with valid minute and second values.'
    );
  }

  return minutes * 60 + seconds;
}

export function isValidTimeString(timeString: string): boolean {
  try {
    toSeconds(timeString);
  } catch (e) {
    return false;
  }
  return true;
}

export function toTimeString(seconds: number): string {
  const absSeconds = Math.abs(seconds);
  const sign = seconds < 0 ? '-' : '';
  const minutes = Math.floor(absSeconds / 60);
  const remainingSeconds = absSeconds % 60;
  return `${sign}${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
