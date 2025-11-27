import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

function Horizontal({
  // @ts-ignore: Object is possibly 'null'.
  container,
  // @ts-ignore: Object is possibly 'null'.
  mobileOpen,
  // @ts-ignore: Object is possibly 'null'.
  drawerWidth,
  // @ts-ignore: Object is possibly 'null'.
  handleDrawerToggle,
  // @ts-ignore: Object is possibly 'null'.
  scrollToHome,
  // @ts-ignore: Object is possibly 'null'.
  scrollToTable,
  // @ts-ignore: Object is possibly 'null'.
  scrollToResult,
  // @ts-ignore: Object is possibly 'null'.
  scrollToGallery,
  // @ts-ignore: Object is possibly 'null'.
  scrollToClub,
}) {
  const navItems = [
    { label: "DOMŮ", action: scrollToHome },
    { label: "VÝSLEDEK", action: scrollToResult },
    { label: "FOTOGALERIE", action: scrollToGallery },
    { label: "TABULKA", action: scrollToTable },
    { label: "O KLUBU", action: scrollToClub },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} className="text-center h-full bg-club-light">
      <Typography variant="h6" className="my-4 font-russo text-club-blue">
        FC MALENOVICE
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={item.action}
              className="text-center hover:bg-club-red hover:text-white transition-colors duration-300"
            >
              <ListItemText>
                <span className="font-russo text-lg">{item.label}</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        component="nav" 
        position="sticky"
        className="shadow-lg"
        elevation={0}
        sx={{ backgroundColor: '#0062A1' }}
      >
        <Toolbar className="justify-between container mx-auto px-4 py-2">
          <div
            className="font-russo text-2xl sm:text-3xl tracking-wider flex-grow sm:flex-grow-0 text-center sm:text-left"
          >
            FC MALENOVICE
          </div>

          <Box className="hidden sm:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-white hover:text-club-red transition-colors duration-300 relative group py-2"
              >
                <span className="font-russo text-lg tracking-wide">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-club-red transition-all duration-300 group-hover:w-full"></span>
              </button>
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
    </>
  );
}

export default Horizontal;
