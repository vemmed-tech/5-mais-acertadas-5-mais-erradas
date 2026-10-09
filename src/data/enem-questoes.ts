/** Editorial data only. Fill these fields after receiving and validating sources. */
export interface EnemQuestionSlot {
  number: number;
  status: 'Pendente';
  question: null;
  answer: null;
  source: null;
}

const emptySlots = (): EnemQuestionSlot[] =>
  Array.from({ length: 5 }, (_, index) => ({
    number: index + 1,
    status: 'Pendente',
    question: null,
    answer: null,
    source: null,
  }));

export const mostCorrect = emptySlots();
export const mostIncorrect = emptySlots();
