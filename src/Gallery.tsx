import { Box, Container, Typography } from "@mui/material";
import "react-image-gallery/styles/css/image-gallery.css";
// @ts-ignore: Object is possibly 'null'.
import ImageGallery from "react-image-gallery";

// @ts-ignore: Object is possibly 'null'.
function Gallery({ images }) {
  return (
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
  );
}

export default Gallery;
