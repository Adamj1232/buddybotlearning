import { writable } from 'svelte/store';
import type { VoiceState, RobotExpression } from '$lib/types/voice';

interface VoiceStore {
  state: VoiceState;
  robotExpression: RobotExpression;
  currentQuestion: string;
  currentAnswer: string;
  isTyping: boolean;
}

const initialState: VoiceStore = {
  state: 'idle',
  robotExpression: {
    type: 'listening',
    animation: 'idle'
  },
  currentQuestion: '',
  currentAnswer: '',
  isTyping: false
};

function createVoiceStore() {
  const { subscribe, set, update } = writable<VoiceStore>(initialState);

  return {
    subscribe,
    setVoiceState: (state: VoiceState) => 
      update(store => ({ ...store, state })),
    setExpression: (expression: RobotExpression) => 
      update(store => ({ ...store, robotExpression: expression })),
    setQuestion: (question: string) => 
      update(store => ({ ...store, currentQuestion: question })),
    setAnswer: (answer: string) => 
      update(store => ({ ...store, currentAnswer: answer })),
    setTyping: (isTyping: boolean) => 
      update(store => ({ ...store, isTyping })),
    reset: () => set(initialState)
  };
}

export const voiceStore = createVoiceStore(); 