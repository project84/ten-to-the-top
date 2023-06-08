import { IRound } from '../models/round';

export const calculateScore = (round: IRound) =>
  (round.questions || []).reduce(
    (totalScore, question, i, questions) =>
      totalScore +
      (question
        ? calculateQuestionValue(questions.slice(0, i)) *
          (round.joker === i ? 2 : 1)
        : 0),
    0
  );

export const calculateQuestionValue = (questions: boolean[]) =>
  questions.reduce((value, question) => (question ? value + 1 : 1), 1);
