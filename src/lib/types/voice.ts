export type VoiceState = 'idle' | 'listening' | 'processing' | 'responding';

export type RobotExpression = {
  type: 'idle' | 'listening' | 'thinking' | 'explaining';
  animation: 'idle' | 'pulse' | 'bounce' | 'wave';
};

export interface QAExample {
  id: string;
  question: string;
  answer: string;
  topic: string;
  category: string;
  ageRange: string;
}

export const sampleQA: QAExample[] = [
  {
    id: "physics-1",
    question: "Why do planes fly?",
    answer: "Planes stay up because of something called 'lift'. Their special wing shape makes air move faster over the top than the bottom, pushing the plane upward!",
    topic: "Physics",
    category: "aviation",
    ageRange: "7-9"
  },
  {
    id: "earth-1",
    question: "Why is the sky blue?",
    answer: "The sky looks blue because sunlight bounces off tiny particles in the air. Blue light bounces around more than other colors, so that's what we see most!",
    topic: "Science",
    category: "earth-science",
    ageRange: "6-8"
  },
  {
    id: "biology-1",
    question: "How do plants grow?",
    answer: "Plants grow by using sunlight, water, and nutrients from the soil. They turn these into food through a process called photosynthesis, which helps them get bigger!",
    topic: "Biology",
    category: "plants",
    ageRange: "4-6"
  }
];

export interface VoiceInteractionState {
  state: VoiceState;
  currentQuestion?: string;
  currentAnswer?: string;
  expression?: RobotExpression;
  isProcessing: boolean;
}

// Web Speech API type declarations
export interface SpeechRecognitionResult {
  transcript: string;
  confidence: number;
}

export interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult[];
  [index: number]: SpeechRecognitionResult[];
}

export interface SpeechRecognitionEvent extends Event {
  readonly results: SpeechRecognitionResultList;
}

export interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  start(): void;
  stop(): void;
}

export type SpeechRecognitionCtor = new () => SpeechRecognition;

// Type declarations for Web Speech API
declare global {
  interface Window {
    webkitSpeechRecognition: new () => SpeechRecognition;
  }

  interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    onstart: () => void;
    onend: () => void;
    onresult: (event: SpeechRecognitionEvent) => void;
    start: () => void;
    stop: () => void;
  }

  interface SpeechRecognitionEvent {
    results: {
      [index: number]: {
        [index: number]: {
          transcript: string;
          confidence: number;
        };
      };
    };
  }
} 