import Horizontal from "./Horizontal";
import { Box, CssBaseline } from "@mui/material";
import { useRef, useState } from "react";
import firstImage from "/1.jpg";
import secondImage from "/2.jpg";
import thirdImage from "/3.jpg";
import fifthImage from "/5.jpg";
import Result from "./Result";
import Gallery from "./Gallery";
import CurrentTable from "./CurrentTable";
import Club from "./Club";
import Footer from "./Footer";

const drawerWidth = 240;
const images = [
  {
    original: firstImage,
    width: '1024',
    height: '768'
  },
  {
    original: secondImage,
    width: '1024',
    height: '768'
  },
  {
    original: thirdImage,
    width: '1024',
    height: '768'
  },
  {
    original: fifthImage,
    width: '1024',
    height: '768'
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

function App(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;
  const homeRef = useRef(null);
  const clubRef = useRef(null);
  const galleryRef = useRef(null);
  const resultRef = useRef(null);
  const tableRef = useRef(null);

  const container =
    window !== undefined ? () => window().document.body : undefined;

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

  return (
    <Box>
      <div ref={homeRef}></div>
      <CssBaseline />
      <Horizontal
        container={container}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
        handleDrawerToggle={() => handleDrawerToggle()}
        scrollToHome={() => scrollToHome()}
        scrollToTable={() => scrollToTable()}
        scrollToResult={() => scrollToResult()}
        scrollToGallery={() => scrollToGallery()}
        scrollToClub={() => scrollToClub()}
      />
      <div ref={resultRef}></div>
      <Result />
      <div ref={galleryRef}></div>
      <Gallery images={images} />
      <div ref={tableRef}></div>
      <CurrentTable rows={rows} />
      <div ref={clubRef}></div>
      <Club />
      <Footer />
    </Box>
  );
}

export default App;
