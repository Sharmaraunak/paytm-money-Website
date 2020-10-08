import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
  },
  TableCell:{
      fontSize:15,
      fontWeight:"bold",
      background:"#fff"
  },
  green:{
      color:"green"
  }
 
});

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  createData('Reliance Industries', "$ 2170.6", "$ 2082.40", "$ 1,320,118" ),
  
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}
       aria-label="simple table"
       size="medium"
       stickyHeader="true"
      >
        <TableHead>
          <TableRow>
            <TableCell  className={classes.TableCell}>
                <span>
                COMPANY
                <ArrowDropDownIcon />
                </span>
            </TableCell>
            <TableCell align="right" className={classes.TableCell}>
                <span>
                MARKET PRICE
                </span>
            </TableCell>
            <TableCell align="right"  className={classes.TableCell}>
                <span>
                CLOSE PRICE
                <ArrowDropDownIcon />
                </span>
            </TableCell>
            <TableCell align="right"  className={classes.TableCell}>
                <span>
                MARKET CAP(CR)
                <ArrowDropDownIcon />
                </span>
            </TableCell>
            <TableCell className={classes.TableCell}>
               
            </TableCell>
           
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className={classes.TableCell} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center" className={classes.TableCell}>{row.calories}</TableCell>
              <TableCell align="center" className={classes.TableCell}>{row.fat}</TableCell>
              <TableCell align="center" className={classes.TableCell}>{row.fat}</TableCell>
              <TableCell align="center" className={classes.TableCell,classes.green}><AddCircleOutlineIcon color="green"></AddCircleOutlineIcon></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


