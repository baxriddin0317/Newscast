import React from 'react'
import "./Categories.scss";
import Data from "../../Assets/Data/data.json";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Span from '../Span/Span';
import Details from '../Details/Details';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Categories() {
    const arr = [];
    
    Data.forEach(element => {
            if(!arr.includes(element.categorie)){
                arr.push(element.categorie);
            }
        });

  return (
    <div>
      {arr.map(a => (
        <Accordion key={Math.random(200)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography style={{display: "flex"}}>
                    <Span categorie={a} />  { a}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <Details categorie={a} />
                </Typography>
            </AccordionDetails>
        </Accordion>
      ))}
    </div> 
  )
}   

export default Categories