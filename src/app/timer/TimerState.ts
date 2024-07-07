export type TimerState = {
  state: TimerStateType;
  startTime: string;
  secondsRemaining: number;
};

export type TimerStateType = 'STOPPED' | 'STARTED' | 'PAUSED';
