import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
// @ts-ignore: Object is possibly 'null'.
import { Gallery } from "react-grid-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// @ts-ignore: Object is possibly 'null'.
import ImageGallery from "react-image-gallery";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import firstImage from "/1.jpg";
import secondImage from "/2.jpg";
import thirdImage from "/3.jpg";
import fifthImage from "/5.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const drawerWidth = 240;
const images = [
  {
    original: firstImage,
    thumbnail: firstImage,
  },
  {
    original: secondImage,
    thumbnail: secondImage,
  },
  {
    original: thirdImage,
    thumbnail: thirdImage,
  },
  {
    original: fifthImage,
    thumbnail: fifthImage,
  },
];

function createData(
  ranking: number,
  name: string,
  z: number,
  v: number,
  r: number,
  p: number,
  s: number,
  b: number,
  pPlus: number,
  pMinus: number
) {
  return { ranking, name, z, v, r, p, s, b, pPlus, pMinus };
}

const rows = [
  createData(1, "Fryšták", 23, 20, 0, 3, 93 - 21, 59, 3, 2),
  createData(2, "Mladcová", 23, 17, 0, 6, 48 - 19, 51, 2, 2),
  createData(3, "Tečovice", 23, 16, 0, 7, 43 - 26, 46, 3, 1),
  createData(4, "Admira Hulín", 23, 15, 0, 8, 51 - 42, 44, 3, 2),
  createData(5, "Holešov B", 23, 13, 0, 10, 61 - 48, 38, 2, 1),
  createData(6, "Veselá", 23, 12, 0, 11, 49 - 48, 37, 0, 1),
  createData(7, "Lužkovice", 23, 10, 0, 13, 38 - 40, 32, 2, 4),
  createData(8, "Jaroslavice", 23, 10, 0, 13, 33 - 37, 32, 2, 4),
  createData(9, "Chropyně", 23, 12, 0, 11, 39 - 54, 32, 4, 0),
  createData(10, "Malenovice", 23, 10, 0, 13, 39 - 55, 30, 2, 2),
  createData(11, "Příluky", 23, 9, 0, 14, 33 - 53, 25, 3, 1),
  createData(12, "Louky", 23, 7, 0, 16, 37 - 48, 24, 0, 3),
  createData(13, "Slavkov pH", 23, 6, 0, 17, 42 - 50, 20, 0, 2),
  createData(14, "Kostelec u Hol", 23, 4, 0, 19, 30 - 95, 13, 0, 1),
];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

function Bar(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;
  const homeRef = useRef(null);
  const clubRef = useRef(null);
  const galleryRef = useRef(null);
  const resultRef = useRef(null);
  const tableRef = useRef(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToHome = () =>
    // @ts-ignore: Object is possibly 'null'.
    homeRef.current.scrollIntoView({ behavior: "smooth" });

  const scrollToTable = () =>
    // @ts-ignore: Object is possibly 'null'.
    tableRef.current.scrollIntoView({ behavior: "smooth" });

  const scrollToResult = () =>
    // @ts-ignore: Object is possibly 'null'.
    resultRef.current.scrollIntoView({ behavior: "smooth" });

  const scrollToGallery = () =>
    // @ts-ignore: Object is possibly 'null'.
    galleryRef.current.scrollIntoView({ behavior: "smooth" });

  const scrollToClub = () =>
    // @ts-ignore: Object is possibly 'null'.
    clubRef.current.scrollIntoView({ behavior: "smooth" });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={scrollToHome}
            sx={{
              textAlign: "center",
              ":hover": {
                backgroundColor: "red",
                color: "white",
              },
            }}
          >
            <ListItemText>
              <Typography fontFamily={"Russo One"}>DOMŮ</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={scrollToResult}
            sx={{
              textAlign: "center",
              ":hover": {
                backgroundColor: "red",
                color: "white",
              },
            }}
          >
            <ListItemText>
              <Typography fontFamily={"Russo One"}>VÝSLEDEK</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={scrollToGallery}
            sx={{
              textAlign: "center",
              ":hover": {
                backgroundColor: "red",
                color: "white",
              },
            }}
          >
            <ListItemText>
              <Typography fontFamily={"Russo One"}>FOTOGALERIE</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={scrollToTable}
            sx={{
              textAlign: "center",
              ":hover": {
                backgroundColor: "red",
                color: "white",
              },
            }}
          >
            <ListItemText>
              <Typography fontFamily={"Russo One"}>TABULKA</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={scrollToClub}
            sx={{
              textAlign: "center",
              ":hover": {
                backgroundColor: "red",
                color: "white",
              },
            }}
          >
            <ListItemText>
              <Typography fontFamily={"Russo One"}>O KLUBU</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#0062A1", py: 2 }} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 3,
              pl: 3,
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            fontSize={30}
            fontFamily={"Russo One"}
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "block" },
              ml: 0,
              pr: 0,
            }}
          >
            FC MALENOVICE
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Button
              onClick={scrollToHome}
              sx={{
                color: "#fff",
                ":hover": {
                  backgroundColor: "red",
                },
              }}
            >
              <Typography fontSize={20} fontFamily={"Russo One"}>
                DOMŮ{" "}
              </Typography>
            </Button>
            <Button
              onClick={scrollToResult}
              sx={{
                color: "#fff",
                ":hover": {
                  backgroundColor: "red",
                },
              }}
            >
              <Typography fontSize={20} fontFamily={"Russo One"}>
                VÝSLEDEK{" "}
              </Typography>
            </Button>
            <Button
              onClick={scrollToGallery}
              sx={{
                color: "#fff",
                ":hover": {
                  backgroundColor: "red",
                },
              }}
            >
              <Typography fontSize={20} fontFamily={"Russo One"}>
                FOTOGALERIE{" "}
              </Typography>
            </Button>
            <Button
              onClick={scrollToTable}
              sx={{
                color: "#fff",
                ":hover": {
                  backgroundColor: "red",
                },
              }}
            >
              <Typography fontSize={20} fontFamily={"Russo One"}>
                TABULKA
              </Typography>
            </Button>
            <Button
              onClick={scrollToClub}
              sx={{
                color: "#fff",
                ":hover": {
                  backgroundColor: "red",
                },
              }}
            >
              <Typography fontSize={20} fontFamily={"Russo One"}>
                O KLUBU
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <div ref={homeRef}></div>
      <div ref={resultRef}></div>
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
            V zápase, kdy jsme chtěli potvrdit záchranu v soutěži, jsme soupeře
            do moc šancí nepouštěli. První gól připravil Páleničkovi balónem do
            vápna Martin Bartek. Potom, když potřeboval náš celek podržet, tak
            nadvakrát zneškodnil Adam Juráň šanci soupeře. To zvedlo psychiku
            celého týmu, aby následně jsme před poločase zvýšili náskok na 2:0.
            Ve druhém poločase zkompletoval hattrick Páleníček, po akci na ose
            Kostka-Menša-Páleníček. Dokráčeli jsme si tak pro jasné tři body a
            potvrdili jsme jarní neporazitelnost na domácí půdě. Abychom
            nezapomněli, tak Petr Páleníček ukazuje, že i ve svém zlatém věku,
            zkompletovat hattrick dvakrát za sebou po sobě jdoucích zápasech
            není pro něj žádný problém.
          </Typography>
        </Container>
      </Box>
      <div ref={galleryRef}></div>
      <Box sx={{ backgroundColor: "#0062A1", py: 5 }}>
        <Typography
          align="center"
          fontFamily={"Russo One"}
          variant="h4"
          sx={{ color: "white" }}
          py={5}
        >
          FOTOGALERIE
        </Typography>
        <Container>
          {" "}
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </Container>
      </Box>
      <div ref={tableRef}></div>
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
      <div ref={clubRef}></div>
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
              <Typography fontFamily={"Russo One"}>
                ZÁKLADNÍ INFORMACE
              </Typography>
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
                uskutečnil schůzí milovníků fotbalu v bývalém hostinci Podskalí
                , který ležel pod hradem v roce 1932. Karel Mrlík, Jaroslav
                Plšek a Vojtěch Číhal získali na ředitelství malenovického
                velkostatku dohodu o pronájmu pozemku v cihelnách nad starým
                hřbitovem pro provedení úprav na hřiště pro kopanou. Z příspěvků
                prvních členů se nakoupily dresy, a tak nově vzniklo mužstvo,
                které nemělo ani vlastní hřiště, ale mohlo vyjíždět k prvním
                přátelským utkáním do širokého okolí. Složení:
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
      <Box
        sx={{
          backgroundColor: "white",
          py: 5,
        }}
      >
        <Typography fontFamily={"Russo One"} align="center">
          Created by Michal Zbranek
        </Typography>
        <Typography fontFamily={"Russo One"} align="center">
          © 2024 All rights reserved
        </Typography>
      </Box>
    </Box>
  );
}

export default Bar;
