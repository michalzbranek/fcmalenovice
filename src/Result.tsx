import { Box, Container, Divider, Toolbar, Typography } from "@mui/material";

function Result() {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Container sx={{ py: 10 }}>
        <Typography variant="h3" gutterBottom>
          FC Malenovice - Veselá 3:0 (2:0)
        </Typography>
        <Typography variant="h6" gutterBottom>
          Střelci: Páleníček Petr - hattrick
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" gutterBottom>
          V zápase, kdy jsme chtěli potvrdit záchranu v soutěži, jsme soupeře do
          moc šancí nepouštěli. První gól připravil Páleničkovi balónem do vápna
          Martin Bartek. Potom, když potřeboval náš celek podržet, tak nadvakrát
          zneškodnil Adam Juráň šanci soupeře. To zvedlo psychiku celého týmu,
          aby následně jsme před poločase zvýšili náskok na 2:0. Ve druhém
          poločase zkompletoval hattrick Páleníček, po akci na ose
          Kostka-Menša-Páleníček. Dokráčeli jsme si tak pro jasné tři body a
          potvrdili jsme jarní neporazitelnost na domácí půdě. Abychom
          nezapomněli, tak Petr Páleníček ukazuje, že i ve svém zlatém věku,
          zkompletovat hattrick dvakrát za sebou po sobě jdoucích zápasech není
          pro něj žádný problém.
        </Typography>
      </Container>
    </Box>
  );
}

export default Result;
