import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Club() {
  const accordionStyles = {
    boxShadow: 'none',
    '&:before': { display: 'none' },
    '&.Mui-expanded': { margin: 0 },
  };

  return (
    <Box className="bg-club-blue py-16 text-white relative">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" 
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
             backgroundSize: '24px 24px'
           }}>
      </div>
      
      <Typography
        align="center"
        variant="h4"
        className="font-russo text-4xl mb-12 relative z-10 pb-10"
      >
        O KLUBU
      </Typography>
      
      <Container maxWidth="md" className="relative z-10 space-y-6">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <Accordion
            defaultExpanded
            sx={{
              ...accordionStyles,
              backgroundColor: 'white',
              color: 'inherit',
            }}
            className="rounded-none"
          >
            <AccordionSummary 
              expandIcon={<ArrowDropDownIcon className="text-white" />}
              className="hover:bg-black/80 transition-colors"
              sx={{ 
                backgroundColor: '#D32F2F',
                color: 'white',
                '& .MuiTypography-root': { color: 'white !important' },
                '&:hover': { backgroundColor: '#B71C1C' }
              }}
            >
              <Typography className="font-russo text-xl tracking-wide text-white">ZÁKLADNÍ INFORMACE</Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white p-6">
              <ul className="space-y-3 list-none text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-club-red rounded-full"></span>
                  <span className="font-bold text-club-dark">Název klubu:</span> Fotbalový klub Malenovice
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-club-red rounded-full"></span>
                  <span className="font-bold text-club-dark">Adresa klubu:</span> Tyršova, 763 02 Zlín 4
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-club-red rounded-full"></span>
                  <span className="font-bold text-club-dark">Založení klubu:</span> 1932
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-club-red rounded-full"></span>
                  <span className="font-bold text-club-dark">Barvy klubu:</span> modrá, bílá, červená
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <Accordion
            defaultExpanded
            sx={{
              ...accordionStyles,
              backgroundColor: 'white',
              color: 'inherit',
            }}
            className="rounded-none"
          >
            <AccordionSummary 
              expandIcon={<ArrowDropDownIcon className="text-white" />}
              className="hover:bg-black/80 transition-colors"
              sx={{ 
                backgroundColor: '#D32F2F',
                color: 'white',
                '& .MuiTypography-root': { color: 'white !important' },
                '&:hover': { backgroundColor: '#B71C1C' }
              }}
            >
              <Typography className="font-russo text-xl tracking-wide text-white">
                SLOŽENÍ VÝBORU FC MALENOVICE
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white p-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <li><span className="font-bold text-club-blue block text-sm uppercase tracking-wider mb-1">Trenér A mužstva</span> Ivo Malota</li>
                <li><span className="font-bold text-club-blue block text-sm uppercase tracking-wider mb-1">Trenér dorostu</span> Zdeněk Gistr</li>
                <li><span className="font-bold text-club-blue block text-sm uppercase tracking-wider mb-1">Trenér žáků</span> Radoslav Střelec</li>
                <li><span className="font-bold text-club-blue block text-sm uppercase tracking-wider mb-1">Trenér přípravky</span> Radoslav Střelec</li>
                <li><span className="font-bold text-club-blue block text-sm uppercase tracking-wider mb-1">Manažer a viceprezident</span> Vladislav Hamrla</li>
                <li><span className="font-bold text-club-blue block text-sm uppercase tracking-wider mb-1">Správce hřiště</span> František Zálešák</li>
                <li><span className="font-bold text-club-blue block text-sm uppercase tracking-wider mb-1">Hlavní rozhodčí</span> Petr Bůžek</li>
                <li><span className="font-bold text-club-blue block text-sm uppercase tracking-wider mb-1">Vedoucí klubu</span> Zdeněk Vichorec</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <Accordion
            defaultExpanded
            sx={{
              ...accordionStyles,
              backgroundColor: 'white',
              color: 'inherit',
            }}
            className="rounded-none"
          >
            <AccordionSummary 
              expandIcon={<ArrowDropDownIcon className="text-white" />}
              className="hover:bg-black/80 transition-colors"
              sx={{ 
                backgroundColor: '#D32F2F',
                color: 'white',
                '& .MuiTypography-root': { color: 'white !important' },
                '&:hover': { backgroundColor: '#B71C1C' }
              }}
            >
              <Typography className="font-russo text-xl tracking-wide text-white">HISTORIE</Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white p-6">
              <Typography className="text-gray-700 leading-relaxed mb-4 text-justify">
                První krok k založení fotbalového klubu v Malenovicích se
                uskutečnil schůzí milovníků fotbalu v bývalém hostinci Podskalí,
                který ležel pod hradem v roce 1932. Karel Mrlík, Jaroslav Plšek a
                Vojtěch Číhal získali na ředitelství malenovického velkostatku
                dohodu o pronájmu pozemku v cihelnách nad starým hřbitovem pro
                provedení úprav na hřiště pro kopanou.
              </Typography>
              <Typography className="text-gray-700 leading-relaxed mb-6 text-justify">
                Z příspěvků prvních členů se nakoupily dresy, a tak nově vzniklo 
                mužstvo, které nemělo ani vlastní hřiště, ale mohlo vyjíždět k 
                prvním přátelským utkáním do širokého okolí.
              </Typography>
              
              <div className="mt-2 pt-2">
                <span className="font-bold text-club-blue block text-sm uppercase tracking-wider mb-1">Původní sestava</span>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-gray-700 mt-3">
                  <li className="text-sm">Benešovský</li>
                  <li className="text-sm">Němec</li>
                  <li className="text-sm">Khýr</li>
                  <li className="text-sm">Číhal</li>
                  <li className="text-sm">Landsfeld</li>
                  <li className="text-sm">Jiřík ml.</li>
                  <li className="text-sm">Jiřík st.</li>
                  <li className="text-sm">Plšek</li>
                  <li className="text-sm">Strojil</li>
                  <li className="text-sm">Mrlík</li>
                  <li className="text-sm">Mal.</li>
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </Box>
  );
}

export default Club;
