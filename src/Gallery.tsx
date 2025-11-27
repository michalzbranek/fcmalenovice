import { Box, Container, Typography } from "@mui/material";
import 'photoswipe/dist/photoswipe.css'
import { Gallery as PhotoSwipeGallery, Item } from 'react-photoswipe-gallery'


// @ts-ignore: Object is possibly 'null'.
function Gallery({ images }) {
  return (
    <Box className="bg-club-blue py-16 text-white relative overflow-hidden">
      
      <Typography
        align="center"
        variant="h4"
        className="font-russo text-4xl md:text-5xl mb-12 tracking-wider text-white pb-10"
      >
        FOTOGALERIE
      </Typography>
      
      <Container maxWidth="lg">
        <PhotoSwipeGallery>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image: any, index: number) => (
              <Item
                key={index}
                original={image.original}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <div className="overflow-hidden rounded-xl shadow-lg group cursor-pointer aspect-video bg-gray-800">
                    <img
                      ref={ref}
                      onClick={open}
                      src={image.original}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                  </div>
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
