import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import cardStyles from "./CardTwo.Styles"
import React from "react";
import DoneIcon from '@mui/icons-material/Done';



const CardTwo = () => {

    const card = (
        <React.Fragment>
            <CardContent sx={cardStyles.cardContentContainer}>
                <Typography sx={cardStyles.freeText}>
                    Free
                </Typography>
                <Typography variant="h5" component="div" sx={cardStyles.zeroNumber}>
                    <Box component="sup" sx={cardStyles.dollarSign}>$</Box>0<Box component="span" sx={cardStyles.slashMinute}>/ m</Box>
                </Typography>
                <Typography sx={cardStyles.roundTheClockText}>Round the clock storage</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={cardStyles.signUpBtn}>Sign up</Button>
            </CardActions>
            <CardContent>
                <Box sx={cardStyles.tickTextParentContainer}>
                    <Box sx={cardStyles.tickTextChildContainer}>
                        <DoneIcon sx={cardStyles.doneIcon} />
                        <Box component="span" sx={cardStyles.tickText}>5 Computer</Box>
                    </Box>
                    <Box sx={cardStyles.tickTextChildContainer}>
                        <DoneIcon sx={cardStyles.doneIcon} />
                        <Box component="span" sx={cardStyles.tickText}>5 Computer</Box>
                    </Box>
                    <Box sx={cardStyles.tickTextChildContainer}>
                        <DoneIcon sx={cardStyles.doneIcon} />
                        <Box component="span" sx={cardStyles.tickText}>5 Computer</Box>
                    </Box>
                </Box>
            </CardContent>
        </React.Fragment>
    );

    return (
        <Box sx={cardStyles.cardContainer}>
            <Card sx={cardStyles.cardTwo} variant="outlined">{card}</Card>
        </Box>
    )
}


export default CardTwo