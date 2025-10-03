import { Box, Container, Typography } from "@mui/material";
import 'photoswipe/dist/photoswipe.css'
import { Gallery as PhotoSwipeGallery, Item } from 'react-photoswipe-gallery'


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
      <PhotoSwipeGallery>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '1rem' }}>
      {images.map((image: any, index: number) => (
            <Item
                key={index}
                original={image.original}
                width="1024"
                height="768"
            >
                {({ ref, open }) => (
                <img ref={ref} onClick={open} src={image.original} style={{ width: '100%', height: 'auto', cursor: 'pointer' }}/>
                )}
            </Item>
        ))}
        </div>
    </PhotoSwipeGallery>
      </Container>
    </Box>
  );
}

export default Gallery;
