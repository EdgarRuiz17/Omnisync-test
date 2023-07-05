import { Box,Typography } from '@mui/material';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchScreen from './screens/SearchScreen';

function App() {
  return (
    initialRoutes()
  );
}

//routes
const initialRoutes = () =>{
  return (
    <Box>
      <Box>
        <Typography variant='h3'>Omnisync-test</Typography>
      </Box>
      <Router>
        <Routes>
          <Route path="*" element={<>Error 404</>}/>
          <Route path="/" element={<SearchScreen/>}/>
        </Routes>
      </Router>
      <Typography variant='caption'>Created By Edgar Ruiz</Typography>
    </Box>
  )
}

export default App;
