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
import { useState } from "react";
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
import Paper from "@mui/material/Paper";
import firstImage from "/1.jpg";
import secondImage from "/2.jpg";
import thirdImage from "/3.jpg";
import fourthImage from "/4.jpg";
import fifthImage from "/5.jpg";

const navItems = ["DOMŮ", "VÝSLEDEK", "FOTOGALERIE", "O KLUBU", "TABULKA"];
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
    original: fourthImage,
    thumbnail: fourthImage,
  },
  {
    original: fifthImage,
    thumbnail: fifthImage,
  },
];
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
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

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                ":hover": {
                  backgroundColor: "red",
                  color: "white",
                },
              }}
            >
              <ListItemText>
                <Typography fontFamily={"Russo One"}>{item}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
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
              mr: 2,
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
              flexDirection: "row-reverse",
              ml: 6,
            }}
          >
            FC MALENOVICE
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#fff",
                  ":hover": {
                    backgroundColor: "red",
                  },
                }}
              >
                <Typography fontSize={20} fontFamily={"Russo One"}>
                  {item}
                </Typography>
              </Button>
            ))}
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
      <Box sx={{ backgroundColor: "#0062A1", py: 5 }}>
        <Typography
          align="center"
          fontFamily={"Russo One"}
          variant="h4"
          sx={{ color: "white" }}
          py={5}
        >
          Fotogalerie
        </Typography>
        <Container>
          {" "}
          <ImageGallery items={images} />
        </Container>
      </Box>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

export default Bar;
