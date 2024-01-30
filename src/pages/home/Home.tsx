import { Box, Button, Typography } from "@mui/material"
import homeStyles from "./Home.Styles"
import Header from "../../components/header/Header"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import animationImg from "../../assets/animationImg.png"
import EastIcon from '@mui/icons-material/East';
import CardOne from "../../components/card_one/CardOne";
import cloudStorage from "../../assets/cloudStorage.png"
import clientBelieves from "../../assets/clientBelieves.png"
import logos from "../../assets/logos.png"
import graph from "../../assets/graph.png"
import CardTwo from "../../components/card_two/CardTwo";
import manImg from "../../assets/man.png";
import besnikLogo from "../../assets/besnikLogo.png";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import CardThree from "../../components/card_three/CardThree";
import AccordionUsage from "../../components/accordion/Accordion";
import Footer from "../../components/footer/Footer";

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
                                <Typography sx={homeStyles.paragraph}>File storage made easy - including powerful features you won't find anywhere else. Whether you're.</Typography>
                            </Box>
                            <Box sx={homeStyles.cardsBtnContainer}>
                                <Box sx={homeStyles.showAllBtnContainer}>
                                    <Button sx={homeStyles.showAllBtn} endIcon={<EastIcon sx={homeStyles.eastIcon} />}>show all</Button>
                                </Box>
                                <Box sx={homeStyles.cardsContainerOne}>
                                    <CardOne />
                                    <CardOne />
                                    <CardOne />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={homeStyles.bodyChildContainerThree}>
                            <Box sx={homeStyles.leftImageContainer}>
                                <Box component="img" alt="cloud-storage" sx={homeStyles.cloudStorageImg} src={cloudStorage} />
                            </Box>
                            <Box sx={homeStyles.bodyChildContainerThreeRightContainer}>
                                <Box sx={homeStyles.bodyChildContainerThreeRightChildContainer}>
                                    <Typography variant="h2" sx={homeStyles.planHighlightsText}>PLAN HIGHLIGHTS</Typography>
                                    <Typography sx={{ ...homeStyles.headingText, ...homeStyles.headingTextOne }}>Manage your cloud profile the way want.</Typography>
                                    <Typography sx={homeStyles.paragraph}>Submit your custom project request to our pool of 70+ Shopify experts. Your request will get claimed in minutes.</Typography>
                                    <Box sx={homeStyles.iconTextParentContainer}>
                                        <Box sx={homeStyles.iconTextChildContainer}>
                                            <CheckCircleRoundedIcon sx={homeStyles.tickIcon} />
                                            <Box component="span" sx={homeStyles.spanText} >Satisfaction guranteed</Box>
                                        </Box>
                                        <Box sx={homeStyles.iconTextChildContainer}>
                                            <CheckCircleRoundedIcon sx={homeStyles.tickIcon} />
                                            <Box component="span" sx={homeStyles.spanText} >Satisfaction guranteed</Box>
                                        </Box>
                                        <Box sx={homeStyles.iconTextChildContainer}>
                                            <CheckCircleRoundedIcon sx={homeStyles.tickIcon} />
                                            <Box component="span" sx={homeStyles.spanText} >Satisfaction guranteed</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={homeStyles.bodyChildContainerFour}>
                            <Box sx={{ ...homeStyles.bodyChildContainerThreeRightContainer, ...homeStyles.adjustOrderLeftChildFour }}>
                                <Box sx={{ ...homeStyles.bodyChildContainerThreeRightChildContainer, ...homeStyles.adjustCenteRightChildFour }}>
                                    <Typography sx={{ ...homeStyles.headingText, ...homeStyles.headingTextOne }}>Client's believes that cloud security.</Typography>
                                    <Typography sx={homeStyles.paragraph}>In computing, a trusted client is a device or program controlled
                                        by the user of a service, but with restrictions designed to prevent its use in ways not authorized by
                                        the provider of the service.</Typography>
                                </Box>
                            </Box>
                            <Box sx={homeStyles.leftImageContainer}>
                                <Box component="img" alt="cloud-storage" sx={homeStyles.cloudStorageImg} src={clientBelieves} />
                            </Box>

                        </Box>
                        <Box sx={homeStyles.bodyChildContainerFive}>
                            <Box sx={homeStyles.headingParagraphContainer}>
                                <Typography sx={homeStyles.clientHeading}>Our Clients</Typography>
                                <Typography sx={homeStyles.paragraph}>File storage made easy - including powerful features.</Typography>
                            </Box>
                            <Box sx={homeStyles.logosContainer}>
                                <Box component="img" alt="all-logos" sx={homeStyles.logosImage} src={logos} />
                            </Box>
                        </Box>
                        <Box sx={homeStyles.bodyChildContainerSix}>
                            <Box sx={homeStyles.bodyChildContainerSixLeft}>
                                <Typography sx={homeStyles.perfectBackupText}>The perfect back-up partners</Typography>
                                <Typography sx={homeStyles.inComputingPara}>
                                    In computing, a trusted client is a device or program controlled
                                    by the user of a service, but with restrictions designed
                                </Typography>
                            </Box>
                            <Box sx={homeStyles.bodyChildContainerSixRight}>
                                <Box component="img" src={graph} alt="graph-image" sx={homeStyles.graphImage} />
                            </Box>
                        </Box>
                        <Box sx={homeStyles.bodyChildContainerSeven}>
                            <Box sx={homeStyles.headingParagraphContainer}>
                                <Typography sx={homeStyles.clientHeading}>Pricing</Typography>
                                <Typography sx={homeStyles.paragraph}>The best cloud storage services in the world</Typography>
                            </Box>
                            <Box sx={homeStyles.cardsContainer}>
                                <CardTwo />
                                <CardTwo />
                            </Box>
                        </Box>
                        <Box sx={homeStyles.bodyChildContainerEight}>
                            <Box sx={homeStyles.headingParagraphContainerEight}>
                                <Typography sx={homeStyles.clientHeading}>What our happy client say</Typography>
                                <Typography sx={homeStyles.paragraph}>File storage made easy - including powerful features you won't find anywhere else. Whether you're.</Typography>
                            </Box>
                            <Box sx={homeStyles.imageContentContainer}>
                                <Box component="img" src={manImg} alt="profile-pic" sx={homeStyles.profileImg} />
                                <Box sx={homeStyles.contentContainer}>
                                    <Box sx={homeStyles.textLogoContainer}>
                                        <Box component="img" alt="besnik-logo" sx={homeStyles.besnikLogo} src={besnikLogo} />
                                        <Typography sx={homeStyles.besnikText}>Besnik</Typography>
                                    </Box>
                                    <Typography sx={homeStyles.paragraph}>File storage made easy - including powerful features you won't find anywhere else. Whether you're.</Typography>
                                    <Box sx={homeStyles.nameDesignationContainer}>
                                        <Typography sx={homeStyles.personName}>Larry Diamond</Typography>
                                        <Typography sx={homeStyles.personDesignation}>Chief Executive Officer, Besnik</Typography>
                                    </Box>
                                    <Box sx={homeStyles.leftRightBtnsContainer}>
                                        <Box sx={homeStyles.BtnContainer}>
                                            <KeyboardBackspaceOutlinedIcon />
                                        </Box>
                                        <Box sx={homeStyles.BtnContainer}>
                                            <ArrowRightAltOutlinedIcon />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={homeStyles.bodyChildContainerNine}>
                            <Box sx={homeStyles.headingParagraphContainer}>
                                <Typography sx={homeStyles.clientHeading}>Our Blog</Typography>
                                <Typography sx={homeStyles.paragraph}>File storage made easy - including powerful features</Typography>
                            </Box>
                            <Box sx={homeStyles.cardsContainer}>
                                <CardThree />
                                <CardThree />
                                <CardThree />
                            </Box>
                        </Box>
                        <Box sx={homeStyles.bodyChildContainerTen}>
                            <Box sx={homeStyles.headingParagraphContainer}>
                                <Typography sx={homeStyles.clientHeading}>Frequently asked questions</Typography>
                                <Typography sx={homeStyles.paragraph}>Get the best services at the lowest price</Typography>
                            </Box>
                            <Box sx={homeStyles.accordionContainer}>
                                <AccordionUsage />
                            </Box>
                        </Box>
                        <Box sx={homeStyles.bodyChildContainerEleven}>
                            <Box sx={homeStyles.bodyChildContainerElevenChild}>
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
                        </Box>
                        <Box sx={homeStyles.bodyChildContainerTwo}>
                            <Box sx={homeStyles.headingParaContainer}>
                                <Typography sx={homeStyles.headingText}>Unleash the power of latest Technologies.</Typography>
                                <Typography sx={homeStyles.paragraph}>File storage made easy - including powerful features you won't find anywhere else. Whether you're.</Typography>
                            </Box>
                            <Box sx={homeStyles.cardsBtnContainer}>
                                <Box sx={homeStyles.showAllBtnContainer}>
                                    <Button sx={homeStyles.showAllBtn} endIcon={<EastIcon sx={homeStyles.eastIcon} />}>show all</Button>
                                </Box>
                                <Box sx={homeStyles.cardsContainerOne}>
                                    <CardOne />
                                    <CardOne />
                                    <CardOne />
                                </Box>
                            </Box>
                        </Box>
                        <Footer/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}



export default Home