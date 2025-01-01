export type TimerState = {
  state: TimerStateType;
  startTime: string;
  secondsAtStart: number;
  secondsRemaining: number;
};

export type TimerStateType = 'STOPPED' | 'STARTED' | 'PAUSED';
