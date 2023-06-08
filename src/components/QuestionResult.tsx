import {
  CancelRounded,
  CheckCircleRounded,
  TheaterComedyRounded,
} from '@mui/icons-material';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { IRoundTransport } from '../models/round';
import { calculateQuestionValue, calculateScore } from '../utils/score';

export default function QuestionResult({
  round,
}: Pick<IRoundTransport, 'round'>) {
  const rows = (round.questions || []).map((question, i) => ({
    question: i + 1,
    correct: question,
    joker: round.joker === i,
    value:
      calculateQuestionValue(round.questions?.slice(0, i) || []) *
      (i === round.joker ? 2 : 1),
    cumulative: calculateScore({
      ...round,
      questions: round.questions?.slice(0, i + 1),
    }),
  }));

  const StyledHeaderTableRow = styled(TableRow)(() => ({
    backgroundColor: grey[500],
  }));

  const StyledBodyTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
      backgroundColor: grey[100],
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const StyledHeaderTableCell = styled(TableCell)(() => ({
    color: 'white',
    fontWeight: 'bold',
  }));

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <StyledHeaderTableRow>
            <StyledHeaderTableCell align="center">
              Question
            </StyledHeaderTableCell>
            <StyledHeaderTableCell align="center"></StyledHeaderTableCell>
            <StyledHeaderTableCell align="center"></StyledHeaderTableCell>
            <StyledHeaderTableCell align="center">Value</StyledHeaderTableCell>
            <StyledHeaderTableCell align="center">
              Cumulative
            </StyledHeaderTableCell>
          </StyledHeaderTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledBodyTableRow key={row.question}>
              <TableCell align="center">{row.question}</TableCell>
              <TableCell align="center">
                {row.correct ? (
                  <CheckCircleRounded color="success" />
                ) : (
                  <CancelRounded color="error" />
                )}
              </TableCell>
              <TableCell align="center">
                {row.joker && <TheaterComedyRounded color="secondary" />}
              </TableCell>
              <TableCell align="center">{row.value}</TableCell>
              <TableCell align="center">{row.cumulative}</TableCell>
            </StyledBodyTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
