import { Box } from '@mui/material';
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
      <Router>
        <Routes>
          <Route path="*" element={<>Error 404</>}/>
          <Route path="/" element={<SearchScreen/>}/>
        </Routes>
      </Router>
    </Box>
  )
}

export default App;
