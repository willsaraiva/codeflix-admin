import * as React from 'react';
import { ThemeProvider } from '@mui/system'
import { Box, Typography } from '@mui/material';
import Header from './components/Header';
import Layout from './components/Layout';
import { appTheme } from './config/theme';
import { Routes, Route } from "react-router-dom"
import { ListCategory } from './features/categories/ListCategory';
import { CreateCategory } from './features/categories/CreateCategory';
import { EditCategory } from './features/categories/EditCategory';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box 
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>
          <h1> Bem vindo a React Router!</h1>
          <Routes>
            <Route path='/' element= {<ListCategory />} />
            <Route path='/categories' element= {<ListCategory />} />
            <Route path='/categories/create' element= {<CreateCategory />} />
            <Route path='/categories/edit/:id' element= {<EditCategory />} />

            <Route path='*' element= {
              <Box sx={{ color: 'white' }}>
                <Typography variant='h1'> 404 </Typography>
                <Typography variant='h1'> Page Not Found </Typography>
              </Box>
            }/>
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App;