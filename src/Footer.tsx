import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box className="bg-white py-8 border-t border-gray-100">
      <Typography className="font-russo text-center text-gray-600 mb-2">
        Created by Michal Zbranek
      </Typography>
      <Typography className="font-russo text-center text-gray-600 text-sm">
        © 2025 All rights reserved
      </Typography>
    </Box>
  );
}

export default Footer;
