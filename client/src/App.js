import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
    root: {
        textAlign: 'center'
    },
});

function App() {
    const classes = useStyles()

    const [coffeeList, setCoffeeList] = useState([])

    useEffect(() => {
        console.log('App -> useEffect')

        fetch('http://localhost:5000/api/coffee')
            .then(res => res.json())
            .then(data => {
                console.log('data')
                console.log(data)

                setCoffeeList(data)
            })
    }, [])

    return (
        <div className={classes.root}>
            <h1>coffee   list</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> # </TableCell>
                            <TableCell align="right">type</TableCell>
                            <TableCell align="right">price</TableCell>
                            <TableCell align="right">strength</TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Array.isArray(coffeeList) && coffeeList.length > 0
                                ?
                                coffeeList.map((row, index) => (
                                    <TableRow
                                        key={`coffee-item-${row.id}`}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="right">{row.type}</TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="right">{row.strength}</TableCell>
                                     </TableRow>
                                ))
                                :
                                <h3>No coffee found</h3>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default App;