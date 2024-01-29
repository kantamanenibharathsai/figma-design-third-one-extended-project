import * as React from 'react';
import { AppBar, Box, Toolbar, List, ListItem, ListItemText, Drawer, Divider, FormControl, NativeSelect, Button, IconButton } from "@mui/material";
import Typography from '@mui/material/Typography';
import besnikLogo from "../../assets/besnikLogo.png"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import headerStyles from './Header.Styles';
import MenuIcon from '@mui/icons-material/Menu';


interface Props {
    window?: () => Window;
    isCartHovered?: boolean,
}

interface IState {
    mobileOpen: boolean,
}


const Header: React.FC<Props> = (props: Props) => {
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const [mobileOpen, setMobileOpen] = React.useState<IState["mobileOpen"]>(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const stopPropagation = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const renderUnorderedList = () => {
        return (
            <List sx={headerStyles.unorderdList}>
                <ListItem disablePadding sx={headerStyles.listItem}>
                    <FormControl fullWidth>
                        <NativeSelect
                            defaultValue={30}
                            disableUnderline
                            sx={headerStyles.nativeSelect}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Products</option>
                        </NativeSelect>
                    </FormControl>
                </ListItem>
                <ListItem disablePadding sx={headerStyles.listItem}>
                    <FormControl fullWidth>
                        <NativeSelect
                            defaultValue={30}
                            disableUnderline
                            sx={headerStyles.nativeSelect}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Resources</option>
                        </NativeSelect>
                    </FormControl>
                </ListItem>
                <ListItem disablePadding sx={headerStyles.listItem}>
                    <ListItemText sx={headerStyles.getADemoText}>Get a Demo</ListItemText>
                </ListItem>
            </List>
        )
    }

    const drawer = (
        <Box onClick={stopPropagation} sx={headerStyles.drawerContainer}>
            <Box sx={headerStyles.xSmallDevicebtnsContainer}>
                <Button sx={headerStyles.loginBtn}>Log in</Button>
                <Button sx={headerStyles.getStartedBtn} variant="outlined">Get Started</Button>
            </Box>
            <Divider />
            <Box sx={headerStyles.xSmallDeviceUlistContainer}>
            {renderUnorderedList()}
            </Box>
        </Box>
    );

    return (
        <AppBar sx={headerStyles.appBar}>
            <Toolbar disableGutters sx={headerStyles.toolbar}>
                <Box sx={headerStyles.contentContainer}>
                    <Box sx={headerStyles.contentLeftContainer}>
                        <Box component="img" alt="besnik-logo" sx={headerStyles.besnikLogo} src={besnikLogo} />
                        <Typography sx={headerStyles.besnikText}>Besnik</Typography>
                        <Divider sx={headerStyles.divider} />
                        <Box sx={headerStyles.phoneNumIconContainer}>
                            <LocalPhoneIcon sx={headerStyles.phoneIcon} />
                            <Box component="span" sx={headerStyles.phoneNumber}>1-123-456-7890</Box>
                        </Box>
                    </Box>
                    <Box sx={headerStyles.contentMiddleContainer}>
                        {renderUnorderedList()}
                    </Box>
                    <IconButton
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={headerStyles.hamburgerIcon}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={headerStyles.contentRightContainer}>
                        <Button sx={headerStyles.loginBtn}>Log in</Button>
                        <Button sx={headerStyles.getStartedBtn} variant="outlined">Get Started</Button>
                    </Box>
                </Box>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={headerStyles.drawer}
                >
                    {drawer}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}
export default Header;