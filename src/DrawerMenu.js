import { styled } from "@mui/material/styles";

import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Divider from "@mui/material/Divider";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawer } from './actions';

export const CustomDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

export default function DrawerMenu(props) {
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector(state => state.isDrawerOpen)
  const drawerWidth = useSelector(state => state.drawerWidth)

  return (
    <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "SlateGray"
          }
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
      >
        <CustomDrawerHeader>
          <IconButton onClick={()=>{dispatch(toggleDrawer())}}>
            <ChevronLeftIcon />
          </IconButton>
        </CustomDrawerHeader>
        <Divider />
      </Drawer>
  )
}