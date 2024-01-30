import { Box, Button, Card, CardActions, CardMedia, Typography } from "@mui/material"
import cardImg from "../../assets/cardImage.png"
import cardStyles from "./CardThree.Styles"



const CardThree = () => {


    return (
        <Box>
            <Card sx={cardStyles.cardThree}>
                <CardMedia
                    sx={cardStyles.cardImg}
                    image={cardImg}
                />
                <Box sx={cardStyles.contentBtnsContainer}>
                    <CardActions sx={cardStyles.cardActions}>
                        <Button sx={cardStyles.borderLessBtn} size="small">Cloud</Button>
                        <Button sx={cardStyles.borderLessBtn} size="small">App Development</Button>
                    </CardActions>
                    <Typography sx={cardStyles.cardText}>No worry about losing files</Typography>
                </Box>
            </Card>
        </Box>
    )
}


export default CardThree