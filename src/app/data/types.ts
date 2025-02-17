// types.ts
type PersonalityTrait = string;

interface Option {
  text: string;
  score: Record<string, number>;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface Mushroom {
  name: string;
  description: string;
  match: PersonalityTrait[];
}