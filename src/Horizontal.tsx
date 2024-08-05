import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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

  return (
    <>
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
    </>
  );
}

export default Horizontal;
