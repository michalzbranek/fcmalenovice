import { Box, Typography } from "@mui/material";

function Footer() {
  return (
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
  );
}

export default Footer;
