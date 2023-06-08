import { Box, Button, Typography } from '@mui/material';
import QuestionResult from '../components/QuestionResult';
import { IRoundTransport } from '../models/round';
import { calculateScore } from '../utils/score';

export default function RoundResults({ round, setRound }: IRoundTransport) {
  const score = calculateScore(round);

  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap="10px"
      sx={{
        bgcolor: '#ffffff',
        outlineColor: '#b3b3b3',
        outlineWidth: 3,
        outlineStyle: 'solid',
        boxShadow: 3,
        borderRadius: 5,
        p: 2,
        minWidth: 300,
        maxWidth: 400,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Box>
        <Typography variant="h1" sx={{ fontSize: 30 }}>
          {score
            ? score === 65
              ? 'Full house!'
              : 'Congratulations!'
            : 'Better luck next time...'}
        </Typography>
        <Typography variant="body1">You scored {score} points</Typography>
      </Box>

      <QuestionResult round={round} />
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setRound({ joker: 9, questions: [] });
        }}
      >
        Play again
      </Button>
    </Box>
  );
}
