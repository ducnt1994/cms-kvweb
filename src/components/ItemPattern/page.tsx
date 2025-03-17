import {Accordion, AccordionDetails, AccordionSummary, Box, Button, MenuItem, Select, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {JSX} from "react";

interface IProps {
  pattern: JSX.Element
  patternName: string
  listPattern: any
  changePatternName: (patternName: string) => void
  deletePattern: () => void
}

export default function ItemPattern({ pattern, patternName, listPattern, changePatternName, deletePattern}: IProps) {

  const handChangePattern = (e: any) => {
    console.log("handChangePattern", e.target.value)
    changePatternName(e.target.value)
  }

  return (
    <Accordion sx={{mt: 2}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          gap: 2
        }}>
          <Box flex={1} sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}>
            <Typography component="span">Pattern</Typography>
            <Select
              sx={{width: '400px'}}
              size={'small'}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={patternName}
              onChange={(e) => {
                e.stopPropagation()
                handChangePattern(e)
              }}
            >
              {
                listPattern.map((item: any, index: number) => {
                  return (
                    <MenuItem key={index} value={item.key}>{item.value}</MenuItem>
                  )
                })
              }
            </Select>
          </Box>
          <Box display="flex" justifyContent="flex-end" mr={2}>
            <Typography
              onClick={(e) => {
                e.stopPropagation()
                deletePattern()
              }}
              fontSize={14} fontWeight={600} sx={{
              cursor: 'pointer',
              color: 'red'
            }}>Xoá</Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {pattern}
      </AccordionDetails>
    </Accordion>
  )
}