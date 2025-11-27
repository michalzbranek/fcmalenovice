import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box className="bg-white py-8">
      <Typography variant="h6" className="font-russo text-center mb-2">
        Created by Michal Zbranek
      </Typography>
      <Typography variant="h6" className="font-russo text-center">
        © 2025 All rights reserved
      </Typography>
    </Box>
  );
}

export default Footer;
