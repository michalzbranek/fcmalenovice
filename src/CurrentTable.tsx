import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// @ts-ignore: Object is possibly 'null'.
function CurrentTable({ rows }) {
  return (
    <Box pb={10}>
      <Typography align="center" fontFamily={"Russo One"} variant="h4" py={5}>
        TABULKA
      </Typography>
      <Container>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Klub</TableCell>
                <TableCell>Z</TableCell>
                <TableCell>V</TableCell>
                <TableCell>R</TableCell>
                <TableCell>P</TableCell>
                <TableCell>S</TableCell>
                <TableCell>B</TableCell>
                <TableCell>P+</TableCell>
                <TableCell>P-</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* @ts-ignore: Object is possibly 'null'. */}
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.ranking}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.z}</TableCell>
                  <TableCell>{row.v}</TableCell>
                  <TableCell>{row.r}</TableCell>
                  <TableCell>{row.p}</TableCell>
                  <TableCell>{row.s}</TableCell>
                  <TableCell>{row.b}</TableCell>
                  <TableCell>{row.pPlus}</TableCell>
                  <TableCell>{row.pMinus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

export default CurrentTable;
