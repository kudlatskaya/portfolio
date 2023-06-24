import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material';
import s from './SimpleAccordion.module.scss'

type PlacePropsType = {
    company: string,
    position: string,
    years: string,
    description: string
}

export default function SimpleAccordion({company, position, years, description}: PlacePropsType) {
    return (
        <div>
            <Accordion className={s.place}>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={s.placeName}>{company}</Typography>
                </AccordionSummary>
                <AccordionDetails className={s.history}>
                    <span className={s.position}><strong>{position}</strong></span>
                    <span className={s.years}>{years}</span>
                    <Typography className={s.description}>
                        {description}
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}