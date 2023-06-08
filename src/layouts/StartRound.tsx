import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IRoundTransport } from '../models/round';

export default function StartRound({
  setRound,
}: Pick<IRoundTransport, 'setRound'>) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="10px"
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
          Ten to the top
        </Typography>
        <Typography variant="body1">Get ready to play!</Typography>
      </Box>

      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setRound({ joker: 9, questions: [] });
        }}
      >
        Start round
      </Button>
    </Box>
  );
}
