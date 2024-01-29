import { Box, Button, Typography } from "@mui/material"
import homeStyles from "./Home.Styles"
import Header from "../../components/header/Header"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { HomeMax } from "@mui/icons-material";
import animationImg from "../../assets/animationImg.png"


const Home = () => {


    return (
        <>
            <Box sx={homeStyles.mainContainer}>
                <Header />
                <Box sx={homeStyles.bodyContainer}>
                    <Box sx={homeStyles.bodyChildContainer}>
                        <Box sx={homeStyles.bodyChildContainerOne}>
                            <Box sx={homeStyles.moreThanImgChildContainer}>
                                <Box sx={homeStyles.leftContainer}>
                                    <Typography variant="h1" sx={homeStyles.mainHeading}>More than just sharing & storage</Typography>
                                    <Typography sx={homeStyles.paragraph}>File storage made easy - including powerful features you won't find anywhere else. Whether you're.</Typography>
                                    <Box sx={homeStyles.btnsContainer}>
                                        <Button variant="contained" sx={homeStyles.containedBtn}>Get started</Button>
                                        <Box sx={homeStyles.watchVideoIconBtnContainer}>
                                            <Box sx={homeStyles.playCircleContainer}>
                                                <PlayArrowIcon sx={homeStyles.playArrowIcon} />
                                            </Box>
                                            <Typography sx={homeStyles.watchVideoText}>Watch Video</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={homeStyles.rightContainer}>
                                    <Box component="img" src={animationImg} alt="right-animation-img" sx={homeStyles.rightImg} />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={homeStyles.bodyChildContainerTwo}>
                            <Box sx={homeStyles.headingParaContainer}>
                            <Typography sx={homeStyles.headingText}>Unleash the power of latest Technologies.</Typography>
                            <Typography sx={homeStyles.paraText}>File storage made easy - including powerful features you won't find anywhere else. Whether you're.</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}



export default Home