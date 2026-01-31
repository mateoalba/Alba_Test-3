import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import NuevaCategoria from './pages/NuevaCategoria';
import Calculos from './pages/Calculos';
import Informacion from './pages/Informacion';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1b5e20',
    },
    secondary: {
      main: '#ffd600', 
    },
  },
  typography: {
    
    fontFamily: 'Arial, sans-serif', 
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <CssBaseline />
        
   
        <AppBar position="sticky" sx={{ bgcolor: '#1b5e20', py: 0.5 }}>
          <Toolbar sx={{ flexDirection: 'column', gap: 1 }}>
            
            <Typography 
              variant="h5" 
              sx={{ 
                letterSpacing: 1, 
                fontWeight: 'bold', 
                fontSize: '1.2rem',
                mt: 1 
              }}
            >
              SISTEMA INTEGRAL DE CATEGORÍAS
            </Typography>

            <Box sx={{ display: 'flex', pb: 1 }}>
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Categorias', path: '/categorias' },
                { name: 'NuevaCategoria', path: '/nueva-categoria' },
                { name: 'Cálculos', path: '/calculos' },
                { name: 'Informacion', path: '/informacion' }
              ].map((link) => (
                <Button 
                  key={link.name}
                  component={Link} 
                  to={link.path} 
                  sx={{ 
                    color: 'white', 
                    mx: 0.5, 
                    fontSize: '0.75rem',
                    borderBottom: '1px solid transparent',
                    '&:hover': {
                      borderBottom: '1px solid white',
                      bgcolor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  {link.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        {/* Contenedor principal sin límites de Container para que ocupe todo */}
        <Box component="main" sx={{ minHeight: '80vh', p: 0 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/nueva-categoria" element={<NuevaCategoria />} />
            <Route path="/calculos" element={<Calculos />} />
            <Route path="/informacion" element={<Informacion />} />
          </Routes>
        </Box>

        <Box 
          sx={{ 
            bgcolor: '#1b5e20', 
            color: '#ccc', 
            p: 2, 
            textAlign: 'center',
            borderTop: '3px solid #ffd600' // Un detalle visual único
          }}
        >
          <Typography variant="caption">
            Desarrollo Académico - {new Date().getFullYear()} - Gestión de Datos React
          </Typography>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;