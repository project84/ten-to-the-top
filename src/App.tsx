import { useState } from 'react';
import './App.css';
import PlayRound from './layouts/PlayRound';
import RoundResults from './layouts/RoundResults';
import StartRound from './layouts/StartRound';
import { IRound } from './models/round';

function App() {
  const [round, setRound] = useState<IRound>({ joker: 9 });

  if (!round.questions) {
    return <StartRound setRound={setRound} />;
  }

  if (round.questions.length === 10) {
    return <RoundResults round={round} setRound={setRound} />;
  }

  return <PlayRound round={round} setRound={setRound} />;
}

export default App;
