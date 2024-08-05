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
  return (
    <Box sx={{ backgroundColor: "#0062A1", py: 5 }}>
      <Typography
        align="center"
        fontFamily={"Russo One"}
        variant="h4"
        sx={{ color: "white" }}
        py={5}
      >
        O KLUBU
      </Typography>
      <Container>
        <Accordion
          defaultExpanded
          sx={{
            ":hover": {
              backgroundColor: "red",
              color: "white",
            },
          }}
        >
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <Typography fontFamily={"Russo One"}>ZÁKLADNÍ INFORMACE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>Název klubu: Fotbalový klub Malenovice</li>
                <li>Adresa klubu: Tyršova, 763 02 Zlín 4</li>
                <li>Založení klubu: 1932</li>
                <li>Barvy klubu: modrá, bílá, červená</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{
            ":hover": {
              backgroundColor: "red",
              color: "white",
            },
          }}
        >
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <Typography fontFamily={"Russo One"}>
              SLOŽENÍ VÝBORU FC MALENOVICE
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>Trenér A mužstva: Ivo Malota</li>
                <li>Trenér dorostu: Zdeněk Gistr</li>
                <li>Trenér žáků: Radoslav Střelec</li>
                <li>Trenér přípravky: Radoslav Střelec</li>
                <li>Manažer a viceprezident: Vladislav Hamrla</li>
                <li>Správce hřiště a metodik mládeže: František Zálešák</li>
                <li>Hlavní postranní rozhodčí: Petr Bůžek</li>
                <li>Vedoucí klubu: Zdeněk Vichorec</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{
            ":hover": {
              backgroundColor: "red",
              color: "white",
            },
          }}
        >
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <Typography fontFamily={"Russo One"}>HISTORIE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              První krok k založení fotbalového klubu v Malenovicích se
              uskutečnil schůzí milovníků fotbalu v bývalém hostinci Podskalí ,
              který ležel pod hradem v roce 1932. Karel Mrlík, Jaroslav Plšek a
              Vojtěch Číhal získali na ředitelství malenovického velkostatku
              dohodu o pronájmu pozemku v cihelnách nad starým hřbitovem pro
              provedení úprav na hřiště pro kopanou. Z příspěvků prvních členů
              se nakoupily dresy, a tak nově vzniklo mužstvo, které nemělo ani
              vlastní hřiště, ale mohlo vyjíždět k prvním přátelským utkáním do
              širokého okolí. Složení:
              <ul>
                <li>Benešovský</li>
                <li>Němec</li>
                <li>Khýr</li>
                <li>Číhal</li>
                <li>Landsfeld</li>
                <li>Jiřík ml.</li>
                <li>Jiří k st.</li>
                <li>Plšek</li>
                <li>Strojil</li>
                <li>Mrlík</li>
                <li>Mal.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
}

export default Club;
