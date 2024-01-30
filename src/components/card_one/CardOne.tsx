import { Avatar, Box, Card, CardContent, Typography } from "@mui/material"
import cardStyles from "./CardOne.Styles"
import FolderIcon from '@mui/icons-material/Folder';



const CardOne = () => {

    const card = (
        <CardContent sx={cardStyles.cardContent}>
            <Avatar sx={cardStyles.avatarImg}>
                <FolderIcon />
            </Avatar>
            <Box sx={cardStyles.contentContainer}>
                <Typography variant="h2" sx={cardStyles.cardHeading}>
                    Features you find
                </Typography>
                <Typography sx={cardStyles.cardText}>
                    File storage made easy - including powerful features you won't find anywhere else. Whether you're.
                </Typography>
            </Box>
        </CardContent>
    );

    return (
        <Box sx={cardStyles.cardContainer}>
            <Card sx={cardStyles.cardStyle} variant="outlined">{card}</Card>
        </Box>
    )
}



export default CardOne