export interface TrancheEnum {
  'A': 'A';
  'B': 'B';
  'C': 'C';
}

export interface Loan {
  id: number;
  title: string;

  // TODO @@@dr ADD ENUm
  // tranche: TrancheEnum;
  tranche: string;
  available: number;
  annualisedReturn: number;
  termRemaining: number;
  ltv: number;
  amount: number;
  isInvested?: boolean;
}
