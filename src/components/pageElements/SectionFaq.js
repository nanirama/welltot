import React, { useState, useEffect } from "react"
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container, Grid, Header } from 'semantic-ui-react';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 1)'
        : 'rgba(255, 255, 255, 1)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
      padding: '12px 0px'
    },
  }));
  const SearchComponent = styled('div')({
    backgroundColor: 'white',
    height: 60,
    margin:'0px 0px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  });
  const TextField = styled('input')({  
    height: 46,  
    width:300,
    padding:'5px 10px',
    border:'2px solid rgba(0, 0, 0, 0.12)',
    borderRadius: 6
  });
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

const SectionFaq = ({data})=>{
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(data.edges);
    useEffect(
        () => {
          
        },
        [filteredData,searchText],
      )

    const handleChange = (value) => {
        setSearchText(value);
        filterData(value);
      };
    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "" || lowercasedValue.length<2) setFilteredData(data.edges);
        else {
            data.edges.map(item => {
                console.log('my data',item.node.data.title.text.toString().toLowerCase().includes(lowercasedValue))
            });
            const searchedData = data.edges.filter(item => {
                return item.node.data.title.text.toString().toLowerCase().includes(lowercasedValue)
            });
            setFilteredData(searchedData);
        }
      }


    const [expanded, setExpanded] = React.useState('panel1');

    const handleChangeAccordion = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

        return (
            <Container style={{margin:"0px 0px 30px"}}>
                <SearchComponent>
                <TextField
                    style={{ marginLeft: 5 }}
                    type="text"
                    placeholder="Type to search..."
                    value={searchText}
                    onChange={e => handleChange(e.target.value)}
                />
                </SearchComponent>
                {filteredData && filteredData.map(({node},index)=>{
                    return(
                        <Accordion expanded={expanded === index} onChange={handleChangeAccordion(index)}>
                            <AccordionSummary aria-controls={`${index}d-content`} id="panel1d-header">
                            <Typography variant="h6">{node?.data?.title?.text}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            <div dangerouslySetInnerHTML={{ __html: node?.data?.body?.html }} ></div>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </Container>
        )
}

export default SectionFaq






