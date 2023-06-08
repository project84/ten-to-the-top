export interface IRound {
  joker: number;
  questions?: boolean[];
}

export interface IRoundTransport {
  round: IRound;
  setRound: React.Dispatch<React.SetStateAction<IRound>>;
}
