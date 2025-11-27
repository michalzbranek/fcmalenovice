import { Box, Container } from "@mui/material";

function Result() {
  return (
    <Box component="main" className="py-12 bg-white">
      <Container maxWidth="md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="bg-club-blue p-6 text-white text-center">
            <h2 className="font-russo text-3xl md:text-5xl mb-2">
              FC Malenovice <span className="text-club-red mx-2">3:0</span> Veselá
            </h2>
            <p className="text-xl opacity-90 font-medium">(2:0)</p>
          </div>
          
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-club-light px-6 py-3 rounded-full">
                <p className="text-club-dark font-bold text-lg">
                  ⚽ Střelci: <span className="text-club-blue">Páleníček Petr</span> - hattrick
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-4">
                V zápase, kdy jsme chtěli potvrdit záchranu v soutěži, jsme soupeře do
                moc šancí nepouštěli. První gól připravil Páleničkovi balónem do vápna
                Martin Bartek. Potom, když potřeboval náš celek podržet, tak nadvakrát
                zneškodnil Adam Juráň šanci soupeře.
              </p>
              <p className="mb-4">
                To zvedlo psychiku celého týmu, aby následně jsme před poločase zvýšili 
                náskok na 2:0. Ve druhém poločase zkompletoval hattrick Páleníček, po akci 
                na ose Kostka-Menša-Páleníček.
              </p>
              <p className="font-medium text-club-dark">
                Dokráčeli jsme si tak pro jasné tři body a potvrdili jsme jarní neporazitelnost 
                na domácí půdě. Abychom nezapomněli, tak Petr Páleníček ukazuje, že i ve svém 
                zlatém věku, zkompletovat hattrick dvakrát za sebou po sobě jdoucích zápasech 
                není pro něj žádný problém.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default Result;
