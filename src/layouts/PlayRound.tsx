import { Box, Button, Typography } from '@mui/material';
import { IRoundTransport } from '../models/round';
import { calculateQuestionValue, calculateScore } from '../utils/score';

export default function PlayRound({ round, setRound }: IRoundTransport) {
  return (
    <Box
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
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h1" sx={{ fontSize: 30 }}>
          Question {(round.questions || []).length + 1}
        </Typography>
        <Typography variant="body1">Score: {calculateScore(round)}</Typography>
      </Box>

      <Box display="flex" justifyItems="left" sx={{ marginBottom: 1 }}>
        <Typography variant="body1">
          Value:{' '}
          {calculateQuestionValue(round.questions || []) *
            (round.joker === (round.questions || []).length ? 2 : 1)}
        </Typography>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="stretch"
        gap="10px 10px"
      >
        <Button
          variant="outlined"
          fullWidth
          disabled={round.joker <= (round.questions || []).length}
          onClick={() =>
            setRound({ ...round, joker: (round.questions || []).length })
          }
        >
          Joker
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{
            flexGrow: 1,
          }}
          onClick={() => {
            setRound({
              ...round,
              questions: [...(round.questions || []), false],
            });
          }}
        >
          Incorrect
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{
            flexGrow: 1,
          }}
          onClick={() => {
            setRound({
              ...round,
              questions: [...(round.questions || []), true],
            });
          }}
        >
          Correct
        </Button>
      </Box>
    </Box>
  );
}
