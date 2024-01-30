import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';


const AccordionUsage = () => {
    return (
        <Stack spacing={2}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    How does website version control work?
                </AccordionSummary>
                <AccordionDetails>
                    A cloud of witnesses that hover over the cloud. Take your business to a whole new level.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Can I use this without an extension?
                </AccordionSummary>
                <AccordionDetails>
                    A cloud of witnesses that hover over the cloud. Take your business to a whole new level.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Why is this better than usepastel?
                </AccordionSummary>
                <AccordionDetails>
                    A cloud of witnesses that hover over the cloud. Take your business to a whole new level.
                </AccordionDetails>
            </Accordion>
        </Stack>
    );
}


export default AccordionUsage