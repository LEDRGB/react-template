import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetDataMutation } from '../../rest/queries/getData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import useStyles from './styles';


const Home: FC = () => {
  useEffect(()=>{
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const [data, setData] = useState([])
  const navigate = useNavigate();
  const classes = useStyles();
  
  const onSuccess = (data: any) => {
    console.log(data)
    setData(data.entries)
  }
  const onError = () => {
    navigate('/');
  }
  const { mutate: getData, isLoading: isLoginLoading } = useGetDataMutation(onSuccess, onError)



  return (
    <div className={classes.container}>
    {isLoginLoading 
    ? <CircularProgress className={classes.spinner}/>
    : <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Api name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Link</TableCell>
              <TableCell align="right">Cors</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row: any) => (
              <TableRow
                key={row.API}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.API}
                </TableCell>
                <TableCell align="right">{row.Description}</TableCell>
                <TableCell align="right">{row.Link}</TableCell>
                <TableCell align="right">{row.Cors}</TableCell>
              </TableRow>
            ))}
        </TableBody>
  
      </Table>
    </TableContainer>}
    </div>
  );
};

export default Home;
